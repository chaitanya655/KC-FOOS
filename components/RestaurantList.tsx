import React from 'react';
import type { Restaurant } from '../types';
import { HeartIcon, StarIcon } from './IconComponents';

interface RestaurantListProps {
  restaurants: Restaurant[];
  onSelectRestaurant: (restaurant: Restaurant) => void;
  favoriteRestaurants: string[];
  onToggleFavorite: (restaurantId: string) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ 
  restaurants, 
  onSelectRestaurant, 
  favoriteRestaurants,
  onToggleFavorite,
}) => {
  return (
    <div>
      {restaurants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => {
            const isFavorite = favoriteRestaurants.includes(restaurant.id);
            return (
              <div
                key={restaurant.id}
                onClick={() => onSelectRestaurant(restaurant)}
                className="cursor-pointer group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={restaurant.imageUrl}
                    alt={restaurant.name}
                    className="w-full h-40 object-cover"
                  />
                  {restaurant.offer && (
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-bold text-lg">{restaurant.offer}</p>
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(restaurant.id);
                    }}
                    className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  >
                      <HeartIcon className="w-6 h-6 text-red-500" filled={isFavorite} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg truncate text-gray-800">{restaurant.name}</h3>
                  <div className="flex items-center text-sm text-gray-900 font-semibold my-1">
                    <StarIcon className="w-5 h-5 text-green-500 mr-1" />
                    <span>{restaurant.rating.toFixed(1)}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{restaurant.cuisine}</p>
                  <p className="text-sm text-gray-500 truncate">{restaurant.address}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-500 bg-white rounded-xl col-span-full">
          <p className="font-semibold text-lg">No restaurants found</p>
          <p>Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;