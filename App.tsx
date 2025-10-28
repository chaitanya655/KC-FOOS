import React, { useState, useEffect } from 'react';

// Data
import { restaurants as allRestaurantsData } from './data/db';
import { categories } from './data/categories';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import FoodCategoryFilter from './components/FoodCategoryFilter';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import CartView from './components/CartView';
import OrderHistory from './components/OrderHistory';
import BackToTopButton from './components/BackToTopButton';
import ToastContainer from './components/ToastContainer';
import ConfirmationDialog from './components/ConfirmationDialog';
import AboutUs from './components/AboutUs';
import SplashScreen from './components/SplashScreen';
import AuthPage from './components/AuthPage';
import ProfilePage from './components/ProfilePage';

// Types
import type { Restaurant, Dish, CartItem, Order, OrderStatus, User } from './types';

// Custom hook for local storage
function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}


const App: React.FC = () => {
  // Authentication & User State
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [showProfile, setShowProfile] = useState(false);

  // App Loading State
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isRestaurantsLoading, setIsRestaurantsLoading] = useState(true);

  // Data State
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // UI State
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Cart & Order State
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cartItems', []);
  const [orders, setOrders] = useLocalStorage<Order[]>('orders', []);
  
  // Toast Notifications
  const [toasts, setToasts] = useState<{id: number, message: string, type: 'success' | 'error'}[]>([]);

  // Confirmation Dialog
  const [confirmation, setConfirmation] = useState<{ title: string; message: string; onConfirm: () => void; confirmText?: string } | null>(null);

  // --- Effects ---

  // Initial load effect
  useEffect(() => {
    const splashTimer = setTimeout(() => setIsAppLoading(false), 1500);
    const dataTimer = setTimeout(() => {
        setRestaurants(allRestaurantsData);
        setFilteredRestaurants(allRestaurantsData);
        setIsRestaurantsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(dataTimer);
    };
  }, []);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Filter restaurants when category changes
  useEffect(() => {
    setIsRestaurantsLoading(true);
    const timer = setTimeout(() => {
      if (selectedCategory === 'all') {
        setFilteredRestaurants(restaurants);
      } else {
        const filtered = restaurants.filter(r => 
          r.cuisine.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          r.dishes.some(d => d.name.toLowerCase().includes(selectedCategory.toLowerCase()))
        );
        setFilteredRestaurants(filtered);
      }
      setIsRestaurantsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedCategory, restaurants]);


  // --- Handlers ---
  
  const addToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(currentToasts => currentToasts.filter(t => t.id !== id));
    }, 3000);
  };
  
  // Cart handlers
  const handleIncreaseQuantity = (dish: Dish) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.dish.id === dish.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { dish, quantity: 1 }];
    });
    addToast(`${dish.name} added to cart`);
  };

  const handleDecreaseQuantity = (dishId: string) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.dish.id === dishId);
      if (item && item.quantity > 1) {
        return prevItems.map(i =>
          i.dish.id === dishId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prevItems.filter(i => i.dish.id !== dishId);
    });
  };

  const handleEmptyCart = () => {
    setCartItems([]);
    setConfirmation(null);
    addToast('Cart emptied successfully');
  };

  // Order handlers
  const handleCheckout = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.dish.price * item.quantity), 0);
    const taxesAndFees = subtotal * 0.05;
    const deliveryFee = 40.00;
    const totalAmount = subtotal + taxesAndFees + deliveryFee;

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      date: new Date().toISOString(),
      items: cartItems,
      totalAmount: totalAmount,
      status: 'Processing',
    };

    setOrders(prev => [...prev, newOrder]);
    setCartItems([]);
    setIsCartOpen(false);
    setConfirmation(null);
    addToast('Order placed successfully!');
  };
  
  const handleUpdateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? {...o, status} : o));
    addToast(`Order #${orderId.slice(-6)} status updated`);
  };
  
  // Authentication Handlers
  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    addToast(`Welcome, ${loggedInUser.name}!`);
  };
  
  const handleLogout = () => {
    setConfirmation({
      title: 'Logout',
      message: 'Are you sure you want to log out?',
      onConfirm: () => {
        setUser(null);
        setCartItems([]);
        setOrders([]);
        setConfirmation(null);
        addToast('You have been logged out.');
      }
    });
  };
  
  const handleUpdateProfile = (updatedUser: User) => {
    setUser(updatedUser);
    setShowProfile(false);
    addToast('Profile updated successfully!');
  };

  // --- Render Logic ---

  if (isAppLoading) {
    return <SplashScreen />;
  }

  if (!user) {
    return <AuthPage onLogin={handleLogin} />;
  }
  
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans">
      <Header 
        cartItemCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
        onHistoryClick={() => setIsHistoryOpen(true)}
        onProfileClick={() => setShowProfile(true)}
        onLogout={handleLogout}
        user={user}
      />
      
      <main className="container mx-auto px-4 py-8">
        <FoodCategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <RestaurantList 
          restaurants={filteredRestaurants}
          onSelectRestaurant={setSelectedRestaurant}
          isLoading={isRestaurantsLoading}
        />
      </main>
      
      <Footer onAboutClick={() => setIsAboutUsOpen(true)} />

      {/* Modals and Overlays */}
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
        onPromptEmptyCart={() => setConfirmation({ title: 'Empty Cart', message: 'Are you sure you want to remove all items from your cart?', onConfirm: handleEmptyCart })}
        onPromptCheckout={() => setConfirmation({ title: 'Confirm Order', message: 'Ready to place your order?', onConfirm: handleCheckout, confirmText: 'Place Order' })}
      />
      
      <OrderHistory 
        isOpen={isHistoryOpen} 
        onClose={() => setIsHistoryOpen(false)} 
        orders={orders}
        onUpdateStatus={handleUpdateOrderStatus}
      />
      
      {isAboutUsOpen && <AboutUs onClose={() => setIsAboutUsOpen(false)} />}
      
      {showProfile && user && (
        <ProfilePage user={user} onClose={() => setShowProfile(false)} onUpdateProfile={handleUpdateProfile} />
      )}
      
      {confirmation && (
        <ConfirmationDialog 
          isOpen={true}
          title={confirmation.title}
          message={confirmation.message}
          onConfirm={confirmation.onConfirm}
          onCancel={() => setConfirmation(null)}
          confirmText={confirmation.confirmText}
        />
      )}
      
      <ToastContainer toasts={toasts} />
      <BackToTopButton isVisible={showBackToTop} />
    </div>
  );
};

export default App;
