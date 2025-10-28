import React from 'react';
import { SteamingFoodIcon, CartIcon, HistoryIcon } from './IconComponents';

interface HeaderProps {
    cartItemCount: number;
    onToggleCart: () => void;
    onToggleHistory: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onToggleCart, onToggleHistory }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
            <SteamingFoodIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
                KC <span className="text-primary">FOOD</span>
            </h1>
        </div>
        <div className="flex items-center space-x-2">
            <button onClick={onToggleHistory} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="View order history">
                <HistoryIcon className="h-7 w-7 text-gray-600" />
            </button>
            <button onClick={onToggleCart} className="relative p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="View cart">
                <CartIcon className="h-7 w-7 text-gray-600" />
                {cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItemCount}
                    </span>
                )}
            </button>
            <button className="hidden md:block bg-primary text-white font-semibold py-2 px-4 rounded-full hover:bg-primary-dark transition-colors duration-300">
                Sign In
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;