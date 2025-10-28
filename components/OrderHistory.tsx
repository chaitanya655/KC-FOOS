
import React from 'react';
import type { Order, CartItem } from '../types';
import { CloseIcon, HistoryIcon } from './IconComponents';

interface OrderHistoryProps {
  orders: Order[];
  onClose: () => void;
  onReorder: (items: CartItem[]) => void;
  onTrackOrder: (order: Order) => void;
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders, onClose, onReorder, onTrackOrder }) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-40 flex justify-center items-center animate-fadeIn" onClick={onClose}>
      <div 
        className="bg-gray-800 text-gray-100 w-full max-w-2xl h-[90vh] rounded-2xl shadow-2xl flex flex-col" 
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <HistoryIcon className="h-7 w-7 text-primary"/>
            <h2 className="text-2xl font-bold text-gray-100">Order History</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
            <CloseIcon className="h-6 w-6 text-gray-300" />
          </button>
        </header>

        <div className="flex-grow overflow-y-auto p-6">
          {orders.length > 0 ? (
            <div className="space-y-6">
              {[...orders].reverse().map(order => (
                <div key={order.id} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-bold text-lg text-white">Order #{order.id.slice(-6)}</p>
                      <p className="text-sm text-gray-400">{order.date}</p>
                    </div>
                    <div className={`px-3 py-1 text-xs font-bold rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' : 
                      order.status === 'Out for Delivery' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {order.items.map(item => (
                      <div key={item.dish.id} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">{item.dish.name} &times; {item.quantity}</span>
                        <span className="text-gray-400">₹{(item.dish.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex justify-between items-center font-bold text-white mb-4">
                      <span>Total Paid</span>
                      <span>₹{order.totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={() => onReorder(order.items)}
                            className="flex-1 bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-dark transition-colors text-sm"
                        >
                            Reorder
                        </button>
                        {order.status !== 'Delivered' && (
                            <button 
                                onClick={() => onTrackOrder(order)}
                                className="flex-1 bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-500 transition-colors text-sm"
                            >
                                Track Order
                            </button>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
              <HistoryIcon className="h-16 w-16 text-gray-600 mb-4" />
              <p className="text-lg font-semibold">No past orders</p>
              <p>Your order history will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
