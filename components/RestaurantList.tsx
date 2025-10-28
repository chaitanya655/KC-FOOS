import React, { useState } from 'react';
import type { Restaurant } from '../types';
import { StarIcon, HeartIcon } from './IconComponents';
import SkeletonRestaurantCard from './SkeletonRestaurantCard';

interface RestaurantCardProps {
    restaurant: Restaurant;
    onSelect: (restaurant: Restaurant) => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onSelect }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    return (
        <div 
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
            onClick={() => onSelect(restaurant)}
        >
            <div className="relative">
                <img className="w-full h-40 object-cover" src={restaurant.imageUrl} alt={restaurant.name} />
                <div className="absolute top-0 right-0 p-2">
                    <button onClick={toggleFavorite} className="p-2 rounded-full bg-black/50 hover:bg-black/75" aria-label="Add to favorites">
                        <HeartIcon className="w-5 h-5 text-white" filled={isFavorite} />
                    </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-md">{restaurant.offer}</span>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-100 truncate group-hover:text-primary transition-colors">{restaurant.name}</h3>
                <div className="flex items-center text-sm text-gray-300 my-1">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{restaurant.rating.toFixed(1)}</span>
                    <span className="mx-2">•</span>
                    <span>{restaurant.deliveryTime}</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{restaurant.cuisine}</p>
                <p className="text-sm text-gray-400 truncate">{restaurant.address}</p>
            </div>
        </div>
    );
};


interface RestaurantListProps {
  restaurants: Restaurant[];
  onSelectRestaurant: (restaurant: Restaurant) => void;
  isLoading: boolean;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, onSelectRestaurant, isLoading }) => {
  return (
    <div>
        <h2 className="text-3xl font-bold text-gray-100 mb-6">Restaurants to explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading ? (
                Array.from({ length: 8 }).map((_, index) => <SkeletonRestaurantCard key={index} />)
            ) : restaurants.length > 0 ? (
                restaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} onSelect={onSelectRestaurant} />
                ))
            ) : (
                <div className="col-span-full text-center py-12">
                    <p className="text-gray-400 text-lg">No restaurants found for your selection.</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default RestaurantList;
