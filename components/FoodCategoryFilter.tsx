import React from 'react';
import type { FoodCategory } from '../types';

interface FoodCategoryFilterProps {
  categories: FoodCategory[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const FoodCategoryFilter: React.FC<FoodCategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const allCategory = {
    id: 'all',
    name: 'All',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200'
  };

  const displayCategories = [allCategory, ...categories];

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">What's on your mind?</h2>
      <div className="flex space-x-6 overflow-x-auto pb-4 -mx-4 px-4">
        {displayCategories.map(category => (
          <div
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`flex-shrink-0 text-center cursor-pointer group transition-transform duration-300 ${
              selectedCategory === category.id ? 'scale-105' : 'hover:scale-105'
            }`}
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className={`w-24 h-24 object-cover rounded-full border-4 transition-colors duration-300 ${
                selectedCategory === category.id ? 'border-primary' : 'border-transparent'
              }`}
            />
            <p className={`mt-2 font-semibold transition-colors duration-300 ${
              selectedCategory === category.id ? 'text-primary' : 'text-gray-700'
            }`}>
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategoryFilter;