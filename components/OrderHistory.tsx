
import React, { useState } from 'react';
// Fix: Import OrderStatus type
import type { Order, OrderStatus, CartItem } from '../types';
import { CloseIcon, HistoryIcon, ChevronDownIcon } from './IconComponents';

interface OrderHistoryProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
  // Fix: Use OrderStatus type for onUpdateStatus prop
  onUpdateStatus: (orderId: string, status: OrderStatus) => void;
}

// Fix: Add type for statusColors
const statusColors: Record<OrderStatus, string> = {
  Processing: 'bg-yellow-100 text-yellow-800',
  'Out for Delivery': 'bg-blue-100 text-blue-800',
  Delivered: 'bg-green-100 text-green-800',
};

const OrderHistory: React.FC<OrderHistoryProps> = ({ isOpen, onClose, orders, onUpdateStatus }) => {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const handleToggle = (orderId: string) => {
    setExpandedOrderId(prevId => (prevId === orderId ? null : orderId));
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

      {/* History Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between p-4 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Order History</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <CloseIcon className="h-6 w-6 text-gray-600" />
            </button>
          </header>

          <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
            {orders.length > 0 ? (
              <ul className="space-y-3">
                {orders.slice().reverse().map((order, index) => {
                  const isExpanded = expandedOrderId === order.id;
                  const currentStatus = order.status || 'Processing';
                  return (
                    <li
                      key={order.id}
                      className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fadeInUp overflow-hidden"
                      style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'backwards' }}
                    >
                      <button
                        onClick={() => handleToggle(order.id)}
                        className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-bold text-gray-800">Order #{order.id.slice(-6)}</p>
                            <p className="text-sm text-gray-500">{new Date(order.date).toLocaleString()}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="font-bold text-lg text-primary">₹{order.totalAmount.toFixed(2)}</span>
                            <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                        <div className="mt-2 text-left">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[currentStatus]}`}>
                                {currentStatus}
                            </span>
                        </div>
                      </button>

                      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                          <div className="px-4 pb-4 pt-3 border-t border-gray-200">
                            <p className="text-sm font-semibold text-gray-700 mb-2">Items Ordered:</p>
                            <ul className="space-y-1 text-sm text-gray-600 mb-4">
                                {order.items.map((item, itemIndex) => (
                                    <li key={`${item.dish.id}-${itemIndex}`} className="flex justify-between">
                                        <span>{item.quantity} x {item.dish.name}</span>
                                        <span>₹{(item.dish.price * item.quantity).toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4">
                              <label htmlFor={`status-${order.id}`} className="block text-sm font-medium text-gray-700 mb-1">
                                Update Status
                              </label>
                              <select
                                id={`status-${order.id}`}
                                value={currentStatus}
                                // Fix: use OrderStatus type cast instead of any
                                onChange={(e) => onUpdateStatus(order.id, e.target.value as OrderStatus)}
                                onClick={(e) => e.stopPropagation()} // Prevent closing the accordion
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50 text-sm py-2 px-3"
                              >
                                <option value="Processing">Processing</option>
                                <option value="Out for Delivery">Out for Delivery</option>
                                <option value="Delivered">Delivered</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 animate-fadeInUp">
                <HistoryIcon className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-lg font-semibold">No past orders</p>
                <p>Your previous orders will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;