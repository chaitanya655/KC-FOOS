import React from 'react';
import type { Dish } from '../types';
import { VegIcon, NonVegIcon } from './IconComponents';

interface DishCardProps {
  dish: Dish;
  onAddToCart: (dish: Dish) => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onAddToCart }) => {
  return (
    <div className="bg-slate-50 rounded-lg overflow-hidden border border-gray-200 flex flex-col hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start p-4">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-bold text-gray-800">{dish.name}</h4>
            {dish.isVeg ? <VegIcon className="h-5 w-5"/> : <NonVegIcon className="h-5 w-5"/>}
          </div>
          <p className="text-sm text-gray-500 mb-2">{dish.description}</p>
          <div className="font-semibold text-primary">₹{dish.price}</div>
        </div>
        <img
          src={dish.imageUrl}
          alt={dish.name}
          className="w-24 h-24 object-cover rounded-md ml-4 flex-shrink-0"
        />
      </div>
      <div className="mt-auto p-4 pt-0">
        <button 
            onClick={() => onAddToCart(dish)}
            className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300 text-sm"
            aria-label={`Add ${dish.name} to cart`}
        >
            Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DishCard;