import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import CartView from './components/CartView';
import OrderHistory from './components/OrderHistory';
import FoodCategoryFilter from './components/FoodCategoryFilter';
import SkeletonRestaurantCard from './components/SkeletonRestaurantCard';
import BackToTopButton from './components/BackToTopButton';
import ToastContainer from './components/ToastContainer';
import ConfirmationDialog from './components/ConfirmationDialog';
import { restaurants as allRestaurants } from './data/db';
import { categories as allCategories } from './data/categories';
import type { Restaurant, Dish, Order, OrderStatus, CartItem } from './types';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

const App: React.FC = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        try {
            const savedCart = localStorage.getItem('cartItems');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            return [];
        }
    });
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [orders, setOrders] = useState<Order[]>(() => {
        try {
            const savedOrders = localStorage.getItem('orders');
            return savedOrders ? JSON.parse(savedOrders) : [];
        } catch (error) {
            return [];
        }
    });
    const [isOrderHistoryOpen, setIsOrderHistoryOpen] = useState(false);
    
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOption, setSortOption] = useState('rating');
    const [isVegOnly, setIsVegOnly] = useState(false);
    
    const [favoriteRestaurants, setFavoriteRestaurants] = useState<string[]>(() => {
        try {
            const savedFavorites = localStorage.getItem('favoriteRestaurants');
            return savedFavorites ? JSON.parse(savedFavorites) : [];
        } catch (error) {
            return [];
        }
    });

    const [toasts, setToasts] = useState<Toast[]>([]);
    const [dialogConfig, setDialogConfig] = useState<{
        isOpen: boolean;
        title: string;
        message: string;
        onConfirm: () => void;
    } | null>(null);
    
    const [isLoading, setIsLoading] = useState(true);
    const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRestaurants(allRestaurants);
            setIsLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        localStorage.setItem('favoriteRestaurants', JSON.stringify(favoriteRestaurants));
    }, [favoriteRestaurants]);
    
    useEffect(() => {
        let result = restaurants;

        if (isVegOnly) {
            result = result.filter(r => r.isVeg);
        }

        if (selectedCategory !== 'all') {
            result = result.filter(r => 
                r.cuisine.toLowerCase().includes(selectedCategory.toLowerCase()) ||
                r.dishes.some(d => d.name.toLowerCase().includes(selectedCategory.toLowerCase()))
            );
        }

        if (searchQuery) {
            result = result.filter(r => 
                r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.dishes.some(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        const sortedResult = [...result].sort((a, b) => {
            if (sortOption === 'rating') {
                return b.rating - a.rating;
            }
            if (sortOption === 'deliveryTime') {
                const timeA = parseInt(a.deliveryTime);
                const timeB = parseInt(b.deliveryTime);
                return timeA - timeB;
            }
            return 0;
        });

        setFilteredRestaurants(sortedResult);
    }, [restaurants, searchQuery, selectedCategory, sortOption, isVegOnly]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsBackToTopVisible(true);
            } else {
                setIsBackToTopVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
        const newToast = { id: Date.now(), message, type };
        setToasts(prevToasts => [...prevToasts, newToast]);
        setTimeout(() => {
            setToasts(currentToasts => currentToasts.filter(t => t.id !== newToast.id));
        }, 3000);
    }, []);

    const handleIncreaseQuantity = useCallback((dish: Dish) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.dish.id === dish.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { dish, quantity: 1 }];
        });
        showToast(`${dish.name} added to cart!`);
    }, [showToast]);
    
    const handleDecreaseQuantity = useCallback((dishId: string) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.dish.id === dishId);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    return prevItems.map(item =>
                        item.dish.id === dishId ? { ...item, quantity: item.quantity - 1 } : item
                    );
                } else {
                    showToast(`${existingItem.dish.name} removed from cart.`, 'error');
                    return prevItems.filter(item => item.dish.id !== dishId);
                }
            }
            return prevItems;
        });
    }, [showToast]);

    
    const handleToggleFavorite = useCallback((restaurantId: string) => {
        setFavoriteRestaurants(prev => {
            const isFavorite = prev.includes(restaurantId);
            if (isFavorite) {
                showToast('Removed from favorites', 'error');
                return prev.filter(id => id !== restaurantId);
            } else {
                showToast('Added to favorites');
                return [...prev, restaurantId];
            }
        });
    }, [showToast]);

    const handleCheckout = () => {
        const subtotal = cartItems.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
        const taxesAndFees = subtotal * 0.05;
        const deliveryFee = cartItems.length > 0 ? 40.00 : 0;
        const totalAmount = subtotal + taxesAndFees + deliveryFee;

        const newOrder: Order = {
            id: `ORD-${Date.now()}`,
            date: new Date().toISOString(),
            items: [...cartItems],
            totalAmount: totalAmount,
            status: 'Processing',
        };
        setOrders(prevOrders => [...prevOrders, newOrder]);
        setCartItems([]);
        setIsCartOpen(false);
        showToast('Order placed successfully!');
    };

    const handlePromptCheckout = () => {
        setDialogConfig({
            isOpen: true,
            title: 'Confirm Order',
            message: 'Are you sure you want to place this order?',
            onConfirm: () => {
                handleCheckout();
                setDialogConfig(null);
            },
        });
    };

    const handleEmptyCart = () => {
        setCartItems([]);
        showToast('Cart emptied.', 'error');
    };

    const handlePromptEmptyCart = () => {
        setDialogConfig({
            isOpen: true,
            title: 'Empty Cart',
            message: 'Are you sure you want to remove all items from your cart?',
            onConfirm: () => {
                handleEmptyCart();
                setDialogConfig(null);
            },
        });
    };
    
    const handleUpdateStatus = (orderId: string, status: OrderStatus) => {
        setOrders(prevOrders => prevOrders.map(order => 
            order.id === orderId ? { ...order, status } : order
        ));
        showToast(`Order status updated to ${status}.`);
    };
    
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
      <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
        <Header 
            onSearch={setSearchQuery}
            cartItemCount={cartItemCount}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenOrderHistory={() => setIsOrderHistoryOpen(true)}
        />
        <main className="flex-grow container mx-auto px-4 py-8">
            <FoodCategoryFilter 
                categories={allCategories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-3xl font-bold text-gray-800">
                    {filteredRestaurants.length} Restaurants
                </h2>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="veg-only"
                            checked={isVegOnly}
                            onChange={(e) => setIsVegOnly(e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary-light"
                        />
                        <label htmlFor="veg-only" className="ml-2 text-sm font-medium text-gray-700">
                            Veg Only
                        </label>
                    </div>
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50 text-sm"
                    >
                        <option value="rating">Sort by Rating</option>
                        <option value="deliveryTime">Sort by Delivery Time</option>
                    </select>
                </div>
            </div>

            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, index) => <SkeletonRestaurantCard key={index} />)}
                </div>
            ) : (
                <RestaurantList 
                    restaurants={filteredRestaurants}
                    onSelectRestaurant={setSelectedRestaurant}
                    favoriteRestaurants={favoriteRestaurants}
                    onToggleFavorite={handleToggleFavorite}
                />
            )}
        </main>
        
        <Footer />
        
        {selectedRestaurant && (
            <RestaurantDetail 
                restaurant={selectedRestaurant}
                onClose={() => setSelectedRestaurant(null)}
                cartItems={cartItems}
                onIncreaseQuantity={handleIncreaseQuantity}
                onDecreaseQuantity={handleDecreaseQuantity}
            />
        )}
        
        <CartView 
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            onPromptEmptyCart={handlePromptEmptyCart}
            onPromptCheckout={handlePromptCheckout}
        />

        <OrderHistory
            isOpen={isOrderHistoryOpen}
            onClose={() => setIsOrderHistoryOpen(false)}
            orders={orders}
            onUpdateStatus={handleUpdateStatus}
        />

        <ToastContainer toasts={toasts} />

        {dialogConfig && (
            <ConfirmationDialog
                isOpen={dialogConfig.isOpen}
                title={dialogConfig.title}
                message={dialogConfig.message}
                onConfirm={dialogConfig.onConfirm}
                onCancel={() => setDialogConfig(null)}
                confirmText={dialogConfig.title.includes('Order') ? 'Place Order' : 'Confirm'}
            />
        )}

        <BackToTopButton isVisible={isBackToTopVisible} />
      </div>
    );
};

export default App;