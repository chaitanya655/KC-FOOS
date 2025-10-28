
import React from 'react';

const SkeletonRestaurantCard: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-700">
      <div className="relative">
        <div className="w-full h-40 bg-gray-700 animate-pulse"></div>
      </div>
      <div className="p-4">
        <div className="h-6 w-3/4 bg-gray-700 rounded animate-pulse mb-2"></div>
        <div className="flex items-center my-2">
          <div className="h-5 w-1/3 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="h-4 w-1/2 bg-gray-700 rounded animate-pulse mb-1"></div>
        <div className="h-4 w-1/3 bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonRestaurantCard;