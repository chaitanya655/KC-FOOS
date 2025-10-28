import React from 'react';
import type { FoodCategory } from '../types';
import { AllIcon, BiryaniIcon, DosaIcon, ThaliIcon, CurryIcon, KebabIcon, DessertIcon, IdliIcon } from './IconComponents';

interface FoodCategoryFilterProps {
  categories: FoodCategory[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
        case 'all': return AllIcon;
        case 'biryani': return BiryaniIcon;
        case 'dosa': return DosaIcon;
        case 'thali': return ThaliIcon;
        case 'curry': return CurryIcon;
        case 'kebab': return KebabIcon;
        case 'dessert': return DessertIcon;
        case 'idli': return IdliIcon;
        case 'desserts': return DessertIcon;
        default: return null;
    }
};

const FoodCategoryFilter: React.FC<FoodCategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const allCategory: FoodCategory = {
    id: 'all',
    name: 'All',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200'
  };

  const displayCategories = [allCategory, ...categories];

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">What's on your mind?</h2>
      <div className="flex space-x-6 overflow-x-auto pb-4 -mx-4 px-4">
        {displayCategories.map(category => {
          const IconComponent = getCategoryIcon(category.id);
          return (
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
              <div className={`mt-2 flex items-center justify-center space-x-1.5 transition-colors duration-300 ${
                selectedCategory === category.id ? 'text-primary' : 'text-gray-700'
              }`}>
                {IconComponent && <IconComponent className="h-4 w-4" />}
                <p className="font-semibold">{category.name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default FoodCategoryFilter;