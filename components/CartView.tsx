import React from 'react';
import type { Dish } from '../types';
import { CloseIcon, TrashIcon, CartIcon } from './IconComponents';

interface CartViewProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Dish[];
  onEmptyCart: () => void;
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

const CartView: React.FC<CartViewProps> = ({ isOpen, onClose, cartItems, onEmptyCart, onRemoveItem, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const taxesAndFees = subtotal * 0.05; // Placeholder 5% tax
  const deliveryFee = cartItems.length > 0 ? 40.00 : 0; // Placeholder flat fee, 0 if cart is empty
  const total = subtotal + taxesAndFees + deliveryFee;


  const handleEmptyCartClick = () => {
    if (window.confirm('Are you sure you want to empty your cart? This action cannot be undone.')) {
      onEmptyCart();
    }
  };

  const handleCheckoutClick = () => {
    if (window.confirm('Are you ready to place your order?')) {
      onCheckout();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between p-4 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <CloseIcon className="h-6 w-6 text-gray-600" />
            </button>
          </header>

          <div className="flex-grow overflow-y-auto p-4">
            {cartItems.length > 0 ? (
              <ul className="space-y-4">
                {cartItems.map((item, index) => (
                  <li 
                    key={`${item.id}-${index}`} 
                    className="flex items-center space-x-4 animate-fadeInUp"
                    style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'backwards' }}
                  >
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(index)}
                      className="p-2 rounded-full hover:bg-red-100 transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <TrashIcon className="h-5 w-5 text-red-500" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 animate-fadeInUp">
                <CartIcon className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-lg font-semibold">Your cart is empty</p>
                <p>Add some delicious food to get started!</p>
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <footer className="p-4 border-t bg-gray-50">
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Taxes & Charges</span>
                        <span>₹{taxesAndFees.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Delivery Fee</span>
                        <span>₹{deliveryFee.toFixed(2)}</span>
                    </div>
                    <hr className="my-2 border-dashed" />
                    <div className="flex justify-between items-center text-lg font-bold text-gray-800">
                        <span>To Pay</span>
                        <span className="text-primary">₹{total.toFixed(2)}</span>
                    </div>
                </div>
                <button 
                    onClick={handleCheckoutClick}
                    className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-emerald-600 transition-colors mb-2"
                >
                    Proceed to Checkout
                </button>
                <button 
                    onClick={handleEmptyCartClick}
                    className="w-full flex items-center justify-center text-sm text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
                >
                    <TrashIcon className="h-4 w-4 mr-2" />
                    Empty Cart
                </button>
            </footer>
          )}
        </div>
      </div>
    </>
  );
};

export default CartView;