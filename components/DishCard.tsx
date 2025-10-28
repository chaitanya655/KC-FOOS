import React from 'react';
import type { Dish } from '../types';
import { VegIcon, NonVegIcon, BestsellerIcon, PlusIcon, MinusIcon } from './IconComponents';

interface DishCardProps {
  dish: Dish;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onImageClick: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, quantity, onIncrease, onDecrease, onImageClick }) => {
  return (
    <div className="flex items-start justify-between py-4 border-b last:border-b-0">
      <div className="flex-grow pr-4">
        <div className="flex items-center mb-1">
          {dish.isVeg ? <VegIcon className="h-5 w-5 mr-2"/> : <NonVegIcon className="h-5 w-5 mr-2"/>}
          {dish.bestseller && (
            <span className="flex items-center text-xs font-bold text-red-500 mr-2">
              <BestsellerIcon className="w-4 h-4 mr-1" />
              Bestseller
            </span>
          )}
        </div>
        <h4 className="font-semibold text-gray-800">{dish.name}</h4>
        <div className="font-semibold text-gray-700 my-1">₹{dish.price}</div>
        <p className="text-sm text-gray-500">{dish.description}</p>
      </div>
      
      <div className="flex-shrink-0 text-center relative">
        <button 
          onClick={onImageClick} 
          className="block group rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label={`View larger image of ${dish.name}`}
        >
          <img
            src={dish.imageUrl}
            alt={dish.name}
            className="w-28 h-28 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </button>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90px]">
          {quantity > 0 ? (
            <div className="flex items-center justify-between bg-white text-primary font-bold shadow-lg rounded-md border border-gray-200 text-lg">
              <button 
                onClick={onDecrease} 
                className="px-3 py-1 hover:bg-gray-100 rounded-l-md"
                aria-label={`Decrease quantity of ${dish.name}`}
              >
                <MinusIcon className="w-4 h-4" />
              </button>
              <span className="px-2">{quantity}</span>
              <button 
                onClick={onIncrease} 
                className="px-3 py-1 hover:bg-gray-100 rounded-r-md"
                aria-label={`Increase quantity of ${dish.name}`}
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button 
              onClick={onIncrease}
              className="bg-white text-primary font-bold py-1 px-6 shadow-lg rounded-md border border-gray-200 hover:bg-primary-light hover:text-white transition-colors"
              aria-label={`Add ${dish.name} to cart`}
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DishCard;