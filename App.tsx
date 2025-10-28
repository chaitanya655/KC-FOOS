import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import FoodCategoryFilter from './components/FoodCategoryFilter';
import RestaurantDetail from './components/RestaurantDetail';
import CartView from './components/CartView';
import AuthPage from './components/AuthPage';
import ProfilePage from './components/ProfilePage';
import OrderHistory from './components/OrderHistory';
import OrderTracking from './components/OrderTracking';
import AboutUs from './components/AboutUs';
import SplashScreen from './components/SplashScreen';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import ToastContainer from './components/ToastContainer';
import ConfirmationDialog from './components/ConfirmationDialog';

import { restaurants as allRestaurants } from './data/db';
import { categories } from './data/categories';
import type { User, Restaurant, CartItem, Dish, Order } from './types';

type ActiveView = 'auth' | 'profile' | 'cart' | 'history' | 'about' | 'tracking' | null;

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

interface ConfirmationState {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
}

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAppReady, setIsAppReady] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

    const [activeView, setActiveView] = useState<ActiveView>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
    
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [confirmation, setConfirmation] = useState<ConfirmationState>({ isOpen: false, title: '', message: '', onConfirm: () => {} });

    // Initial load and splash screen
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            if (!user) {
                setActiveView('auth');
            } else {
                setIsAppReady(true);
            }
        }, 2000);
        return () => clearTimeout(timer);
    }, [user]);

    // Restaurant filtering logic
    useEffect(() => {
        let filtered = allRestaurants;

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(r => r.cuisine.toLowerCase().includes(selectedCategory.toLowerCase()) || r.dishes.some(d => d.name.toLowerCase().includes(selectedCategory.toLowerCase())));
        }

        if (searchTerm) {
            const lowercasedSearchTerm = searchTerm.toLowerCase();
            filtered = filtered.filter(r => 
                r.name.toLowerCase().includes(lowercasedSearchTerm) || 
                r.cuisine.toLowerCase().includes(lowercasedSearchTerm) ||
                r.dishes.some(d => d.name.toLowerCase().includes(lowercasedSearchTerm))
            );
        }

        setRestaurants(filtered);
    }, [selectedCategory, searchTerm]);

    // Scroll listeners
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            setIsBackToTopVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper functions
    const addToast = (message: string, type: 'success' | 'error' = 'success') => {
        const newToast = { id: Date.now(), message, type };
        setToasts(prev => [...prev, newToast]);
        setTimeout(() => {
            setToasts(currentToasts => currentToasts.filter(t => t.id !== newToast.id));
        }, 3000);
    };

    const showConfirmation = (title: string, message: string, onConfirm: () => void) => {
        setConfirmation({ isOpen: true, title, message, onConfirm });
    };

    const closeConfirmation = () => {
        setConfirmation(prev => ({ ...prev, isOpen: false }));
    };

    // Event Handlers
    const handleLogin = (loggedInUser: User) => {
        setUser(loggedInUser);
        setActiveView(null);
        setIsAppReady(true);
        addToast(`Welcome, ${loggedInUser.name}!`);
    };

    const handleLogout = () => {
        showConfirmation('Logout', 'Are you sure you want to log out?', () => {
            setUser(null);
            setIsAppReady(false);
            setActiveView('auth');
            setCartItems([]);
            addToast('You have been logged out.');
            closeConfirmation();
        });
    };
    
    const handleUpdateProfile = (updatedUser: User) => {
        setUser(updatedUser);
        setActiveView(null);
        addToast('Profile updated successfully!');
    };

    const handleIncreaseQuantity = (dish: Dish) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.dish.id === dish.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { dish, quantity: 1 }];
        });
    };

    const handleDecreaseQuantity = (dishId: string) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.dish.id === dishId);
            if (existingItem && existingItem.quantity > 1) {
                return prevItems.map(item =>
                    item.dish.id === dishId ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            return prevItems.filter(item => item.dish.id !== dishId);
        });
    };
    
    const handleEmptyCart = () => {
        showConfirmation('Empty Cart', 'Are you sure you want to remove all items from your cart?', () => {
            setCartItems([]);
            addToast('Cart emptied.');
            closeConfirmation();
        });
    };

    const handleCheckout = () => {
        const totalAmount = cartItems.reduce((sum, item) => sum + item.dish.price * item.quantity, 0) * 1.05 + (cartItems.length > 0 ? 40 : 0);
        const newOrder: Order = {
            id: `ORD-${Date.now()}`,
            date: new Date().toLocaleString(),
            items: cartItems,
            totalAmount,
            status: 'Processing',
        };
        setOrders(prev => [...prev, newOrder]);
        setCurrentOrder(newOrder);
        setCartItems([]);
        setActiveView('tracking');
        addToast('Order placed successfully!');
    };

    const handleReorder = (items: CartItem[]) => {
        setCartItems(items);
        setActiveView('cart');
        addToast('Items added to your cart.');
    };

    const handleTrackOrder = (order: Order) => {
        setCurrentOrder(order);
        setActiveView('tracking');
    };
    
    const handleDeliveryComplete = (orderId: string) => {
        setOrders(prevOrders => 
            prevOrders.map(order => 
                order.id === orderId ? { ...order, status: 'Delivered' } : order
            )
        );
        addToast(`Order #${orderId.slice(-6)} has been delivered!`);
    };

    if (isLoading) {
        return <SplashScreen />;
    }

    if (!isAppReady || !user) {
        return <AuthPage onLogin={handleLogin} onClose={() => { /* No close on initial auth */ }} />;
    }

    return (
        <div className="bg-gray-900 min-h-screen text-gray-200">
            <Header
                cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                onCartClick={() => setActiveView('cart')}
                onHistoryClick={() => setActiveView('history')}
                onProfileClick={() => setActiveView('profile')}
                onLogout={handleLogout}
                user={user}
                isScrolled={isScrolled}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />

            <main className="container mx-auto px-4 pt-28 pb-16">
                <FoodCategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
                <RestaurantList
                    restaurants={restaurants}
                    onSelectRestaurant={setSelectedRestaurant}
                    isLoading={!restaurants.length && searchTerm === '' && selectedCategory === 'all' && isAppReady}
                />
            </main>

            <Footer onAboutClick={() => setActiveView('about')} />
            
            <BackToTopButton isVisible={isBackToTopVisible} />
            <ToastContainer toasts={toasts} />
            
            {/* Modals and Side Panels */}
            {activeView === 'auth' && <AuthPage onLogin={handleLogin} onClose={() => setActiveView(null)} />}
            {activeView === 'profile' && user && <ProfilePage user={user} onUpdateProfile={handleUpdateProfile} onClose={() => setActiveView(null)} />}
            {activeView === 'cart' && <CartView isOpen={true} onClose={() => setActiveView(null)} cartItems={cartItems} onIncreaseQuantity={handleIncreaseQuantity} onDecreaseQuantity={handleDecreaseQuantity} onPromptEmptyCart={handleEmptyCart} onPromptCheckout={() => { setActiveView(null); showConfirmation('Confirm Checkout', `Your total is ₹${(cartItems.reduce((sum, item) => sum + item.dish.price * item.quantity, 0) * 1.05 + 40).toFixed(2)}. Proceed?`, handleCheckout)}} />}
            {activeView === 'history' && <OrderHistory orders={orders} onClose={() => setActiveView(null)} onReorder={handleReorder} onTrackOrder={handleTrackOrder} />}
            {activeView === 'tracking' && currentOrder && <OrderTracking order={currentOrder} onClose={() => setActiveView(null)} onDeliveryComplete={handleDeliveryComplete} />}
            {activeView === 'about' && <AboutUs onClose={() => setActiveView(null)} />}
            
            {selectedRestaurant && <RestaurantDetail restaurant={selectedRestaurant} onClose={() => setSelectedRestaurant(null)} cartItems={cartItems} onIncreaseQuantity={handleIncreaseQuantity} onDecreaseQuantity={handleDecreaseQuantity} />}

            <ConfirmationDialog 
                isOpen={confirmation.isOpen}
                title={confirmation.title}
                message={confirmation.message}
                onConfirm={() => { confirmation.onConfirm(); closeConfirmation(); }}
                onCancel={closeConfirmation}
            />
        </div>
    );
};

export default App;