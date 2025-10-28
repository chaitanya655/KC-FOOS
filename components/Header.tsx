import React from 'react';
import { CartIcon, HistoryIcon, UserIcon, LogoutIcon } from './IconComponents';
import type { User } from '../types';

interface HeaderProps {
    cartItemCount: number;
    onCartClick: () => void;
    onHistoryClick: () => void;
    onProfileClick: () => void;
    onLogout: () => void;
    user: User | null;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick, onHistoryClick, onProfileClick, onLogout, user }) => {
    return (
        <header className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-30 shadow-lg border-b border-gray-700/50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <div className="text-3xl font-bold text-white tracking-wider">
                        <a href="/">KC <span className="text-primary">FOOD</span></a>
                    </div>

                    {user && (
                        <div className="flex items-center space-x-6">
                            <button onClick={onCartClick} className="relative text-gray-300 hover:text-white transition-colors" aria-label="Open cart">
                                <CartIcon className="w-7 h-7" />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                            <button onClick={onHistoryClick} className="text-gray-300 hover:text-white transition-colors" aria-label="View order history">
                                <HistoryIcon className="w-7 h-7" />
                            </button>
                            <div className="flex items-center space-x-2">
                                <button onClick={onProfileClick} className="text-gray-300 hover:text-white transition-colors flex items-center" aria-label="View profile">
                                    <UserIcon className="w-7 h-7 mr-2" />
                                    <span className="hidden md:block">{user.name.split(' ')[0]}</span>
                                </button>
                                <button onClick={onLogout} className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Logout">
                                    <LogoutIcon className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
