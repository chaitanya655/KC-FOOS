import React, { useState } from 'react';
import { SteamingFoodIcon, SearchIcon, CartIcon, HistoryIcon } from './IconComponents';

interface HeaderProps {
    onSearch: (query: string) => void;
    cartItemCount: number;
    onOpenCart: () => void;
    onOpenOrderHistory: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, cartItemCount, onOpenCart, onOpenOrderHistory }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-30">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a href="/" className="flex items-center space-x-2">
                    <SteamingFoodIcon className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-bold text-gray-800 tracking-tight">FoodFleet</span>
                </a>

                <div className="w-full max-w-md hidden md:block">
                    <form onSubmit={handleSearch} className="relative">
                        <input 
                            type="text" 
                            placeholder="Search for restaurants or dishes..."
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                if (e.target.value === '') {
                                    onSearch('');
                                }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                        />
                        <button type="submit" className="absolute right-0 top-0 mt-1.5 mr-3" aria-label="Search">
                            <SearchIcon className="h-6 w-6 text-gray-400 hover:text-primary" />
                        </button>
                    </form>
                </div>

                <nav className="flex items-center space-x-4">
                    <button onClick={onOpenOrderHistory} className="text-gray-600 hover:text-primary transition-colors flex items-center space-x-1.5">
                        <HistoryIcon className="h-6 w-6" />
                        <span className="hidden lg:inline font-semibold">Orders</span>
                    </button>
                    <button onClick={onOpenCart} className="relative text-gray-600 hover:text-primary transition-colors flex items-center space-x-1.5">
                        <CartIcon className="h-6 w-6" />
                        <span className="hidden lg:inline font-semibold">Cart</span>
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
