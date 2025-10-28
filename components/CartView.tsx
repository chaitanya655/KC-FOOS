
import React from 'react';
import type { CartItem, Dish } from '../types';
import { CloseIcon, TrashIcon, CartIcon, PlusIcon, MinusIcon } from './IconComponents';

interface CartViewProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onPromptEmptyCart: () => void;
  onIncreaseQuantity: (dish: Dish) => void;
  onDecreaseQuantity: (dishId: string) => void;
  onPromptCheckout: () => void;
}

const CartView: React.FC<CartViewProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onPromptEmptyCart, 
  onIncreaseQuantity, 
  onDecreaseQuantity, 
  onPromptCheckout 
}) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.dish.price * item.quantity), 0);
  const taxesAndFees = subtotal * 0.05; // Placeholder 5% tax
  const deliveryFee = cartItems.length > 0 ? 40.00 : 0; // Placeholder flat fee, 0 if cart is empty
  const total = subtotal + taxesAndFees + deliveryFee;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-gray-800 text-gray-100 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100">Your Cart</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
              <CloseIcon className="h-6 w-6 text-gray-300" />
            </button>
          </header>

          <div className="flex-grow overflow-y-auto p-4">
            {cartItems.length > 0 ? (
              <ul className="space-y-4">
                {cartItems.map((item, index) => (
                  <li 
                    key={`${item.dish.id}-${index}`} 
                    className="flex items-center space-x-4 animate-fadeInUp"
                    style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'backwards' }}
                  >
                    <img src={item.dish.imageUrl} alt={item.dish.name} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-100">{item.dish.name}</p>
                      <p className="text-sm text-gray-400">₹{item.dish.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between bg-gray-700 text-primary font-bold shadow-md rounded-md border border-gray-600 text-lg w-[100px]">
                        <button 
                            onClick={() => onDecreaseQuantity(item.dish.id)} 
                            className="px-3 py-1 hover:bg-gray-600 rounded-l-md"
                            aria-label={`Decrease quantity of ${item.dish.name}`}
                        >
                            <MinusIcon className="w-4 h-4" />
                        </button>
                        <span className="px-2 text-base text-gray-100">{item.quantity}</span>
                        <button 
                            onClick={() => onIncreaseQuantity(item.dish)} 
                            className="px-3 py-1 hover:bg-gray-600 rounded-r-md"
                            aria-label={`Increase quantity of ${item.dish.name}`}
                        >
                            <PlusIcon className="w-4 h-4" />
                        </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 animate-fadeInUp">
                <CartIcon className="h-16 w-16 text-gray-600 mb-4" />
                <p className="text-lg font-semibold">Your cart is empty</p>
                <p>Add some delicious food to get started!</p>
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <footer className="p-4 border-t border-gray-700 bg-gray-900">
                <div className="space-y-2 mb-4 text-sm text-gray-300">
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
                    <hr className="my-2 border-dashed border-gray-600" />
                    <div className="flex justify-between items-center text-lg font-bold text-gray-100">
                        <span>To Pay</span>
                        <span className="text-primary">₹{total.toFixed(2)}</span>
                    </div>
                </div>
                <button 
                    onClick={onPromptCheckout}
                    className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-red-600 transition-colors mb-2"
                >
                    Proceed to Checkout
                </button>
                <button 
                    onClick={onPromptEmptyCart}
                    className="w-full flex items-center justify-center text-sm text-red-500 font-semibold py-2 px-4 rounded-lg hover:bg-red-900/50 transition-colors"
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