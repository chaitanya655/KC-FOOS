import React, { useState } from 'react';
import type { Restaurant, Dish, CartItem } from '../types';
import { CloseIcon, StarIcon, DeliveryScooterIcon } from './IconComponents';
import DishCard from './DishCard';
import ImageModal from './ImageModal';

interface RestaurantDetailProps {
  restaurant: Restaurant;
  onClose: () => void;
  cartItems: CartItem[];
  onIncreaseQuantity: (dish: Dish) => void;
  onDecreaseQuantity: (dishId: string) => void;
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ restaurant, onClose, cartItems, onIncreaseQuantity, onDecreaseQuantity }) => {
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-20 flex justify-center items-center animate-fadeIn" onClick={onClose}>
        <div 
          className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden" 
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
              <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-64 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <button 
                  onClick={onClose} 
                  className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10"
                  aria-label="Close restaurant details"
              >
                  <CloseIcon className="w-6 h-6 text-gray-800" />
              </button>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-4xl font-extrabold tracking-tight">{restaurant.name}</h2>
                  <p className="text-lg mt-1">{restaurant.cuisine}</p>
                  <p className="text-sm mt-1">{restaurant.address}</p>
                  <div className="flex items-center text-sm font-semibold mt-4 space-x-6">
                      <div className="flex items-center">
                          <StarIcon className="w-5 h-5 text-green-400 mr-1.5" />
                          <span>{restaurant.rating.toFixed(1)} Rating</span>
                      </div>
                      <div className="flex items-center">
                          <DeliveryScooterIcon className="w-5 h-5 text-white mr-1.5" />
                          <span>{restaurant.deliveryTime}</span>
                      </div>
                  </div>
              </div>
          </div>

          <div className="p-6 flex-grow overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Menu</h3>
            <div className="space-y-4">
              {restaurant.dishes.map(dish => {
                const cartItem = cartItems.find(item => item.dish.id === dish.id);
                const quantity = cartItem ? cartItem.quantity : 0;
                return (
                  <DishCard 
                    key={dish.id} 
                    dish={dish} 
                    quantity={quantity}
                    onIncrease={() => onIncreaseQuantity(dish)} 
                    onDecrease={() => onDecreaseQuantity(dish.id)}
                    onImageClick={() => setViewingImage(dish.imageUrl)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {viewingImage && (
        <ImageModal imageUrl={viewingImage} onClose={() => setViewingImage(null)} />
      )}
    </>
  );
};

export default RestaurantDetail;