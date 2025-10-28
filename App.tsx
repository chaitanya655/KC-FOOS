import React, { useState, useEffect } from 'react';
import { restaurants as initialRestaurants } from './data/db';
import { categories } from './data/categories';
import type { Restaurant, Dish, Order, OrderStatus } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import CartView from './components/CartView';
import OrderHistory from './components/OrderHistory';
import FoodCategoryFilter from './components/FoodCategoryFilter';
import { SearchIcon, SortIcon } from './components/IconComponents';

const App: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(initialRestaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(initialRestaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  
  const [cartItems, setCartItems] = useState<Dish[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [orders, setOrders] = useState<Order[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const [favoriteRestaurants, setFavoriteRestaurants] = useState<string[]>(() => {
    const savedFavorites = localStorage.getItem('favoriteRestaurants');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('rating');

  useEffect(() => {
    localStorage.setItem('favoriteRestaurants', JSON.stringify(favoriteRestaurants));
  }, [favoriteRestaurants]);

  useEffect(() => {
    let result = restaurants;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(r => 
        r.cuisine.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        r.dishes.some(d => d.name.toLowerCase().includes(selectedCategory.toLowerCase()))
      );
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(r =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.dishes.some(d => d.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort
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
  }, [searchTerm, selectedCategory, sortOption, restaurants]);

  const handleSelectRestaurant = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleCloseDetail = () => {
    setSelectedRestaurant(null);
  };

  const handleAddToCart = (dish: Dish) => {
    setCartItems(prev => [...prev, dish]);
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleEmptyCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const taxesAndFees = subtotal * 0.05;
    const deliveryFee = 40.00;
    const total = subtotal + taxesAndFees + deliveryFee;

    const newOrder: Order = {
      id: `order-${Date.now()}`,
      date: new Date().toISOString(),
      items: [...cartItems],
      totalAmount: total,
      status: 'Processing',
    };
    setOrders(prev => [...prev, newOrder]);
    setCartItems([]);
    setIsCartOpen(false);
    alert('Your order has been placed successfully!');
  };

  const handleUpdateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId ? { ...order, status } : order
      )
    );
  };
  
  const handleToggleFavorite = (restaurantId: string) => {
    setFavoriteRestaurants(prev =>
      prev.includes(restaurantId)
        ? prev.filter(id => id !== restaurantId)
        : [...prev, restaurantId]
    );
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header 
        cartItemCount={cartItems.length}
        onToggleCart={() => setIsCartOpen(!isCartOpen)}
        onToggleHistory={() => setIsHistoryOpen(!isHistoryOpen)}
      />
      <main className="container mx-auto px-4 py-8">
        <FoodCategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
                Restaurants in Hyderabad
            </h2>
            <div className="flex items-center space-x-4 w-full md:w-auto">
                <div className="relative flex-grow md:flex-grow-0">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for restaurants or dishes"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light"
                    />
                </div>
                <div className="relative">
                    <SortIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-primary-light bg-white"
                    >
                        <option value="rating">Rating</option>
                        <option value="deliveryTime">Delivery Time</option>
                    </select>
                </div>
            </div>
        </div>

        <RestaurantList 
          restaurants={filteredRestaurants}
          onSelectRestaurant={handleSelectRestaurant}
          favoriteRestaurants={favoriteRestaurants}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <Footer />
      {selectedRestaurant && (
        <RestaurantDetail 
          restaurant={selectedRestaurant}
          onClose={handleCloseDetail}
          onAddToCart={handleAddToCart}
        />
      )}
      <CartView 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onEmptyCart={handleEmptyCart}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <OrderHistory
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        orders={orders}
        onUpdateStatus={handleUpdateOrderStatus}
      />
    </div>
  );
};

export default App;
