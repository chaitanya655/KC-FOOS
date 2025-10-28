import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CartIcon, HistoryIcon, UserIcon, LogoutIcon, LogoIcon, SearchIcon, CloseIcon } from './IconComponents';
import type { User } from '../types';

interface HeaderProps {
    cartItemCount: number;
    onCartClick: () => void;
    onHistoryClick: () => void;
    onProfileClick: () => void;
    onLogout: () => void;
    user: User | null;
    isScrolled: boolean;
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

const AnimatedBrandName = () => {
    const brandName = "KC FOODS";
    const letters = Array.from(brandName);

    const container = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
      },
    };

    const child = {
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 12, stiffness: 200 },
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: { type: "spring", damping: 12, stiffness: 200 },
      },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex items-center space-x-2 text-3xl font-bold text-white tracking-wider"
        >
            <LogoIcon className="w-8 h-8 text-primary" />
            <div className="flex overflow-hidden">
                {letters.map((letter, index) => (
                    <motion.span key={index} variants={child}>
                        {index >= 3 ? <span className="text-primary">{letter}</span> : letter}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};


const Header: React.FC<HeaderProps> = ({ 
    cartItemCount, 
    onCartClick, 
    onHistoryClick, 
    onProfileClick, 
    onLogout, 
    user,
    isScrolled,
    searchTerm,
    onSearchChange
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const getInitials = (name: string) => {
        const names = name.split(' ');
        if (names.length > 1) {
            return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleProfileClick = () => {
        onProfileClick();
        setIsDropdownOpen(false);
    };

    const handleLogoutClick = () => {
        onLogout();
        setIsDropdownOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled || isSearchOpen ? 'bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-700/50' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    
                    {/* Normal Header View */}
                    <div className={`flex justify-between items-center w-full ${isSearchOpen ? 'hidden' : 'flex'}`}>
                        <a href="/" className="flex items-center">
                            <AnimatedBrandName />
                        </a>
                        
                        <div className="hidden lg:flex flex-grow max-w-xl mx-8">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search for restaurants..."
                                    value={searchTerm}
                                    onChange={(e) => onSearchChange(e.target.value)}
                                    className="w-full px-4 py-2 pl-10 bg-gray-800/50 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-white"
                                />
                                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 md:space-x-6">
                            <button onClick={() => setIsSearchOpen(true)} className="lg:hidden text-gray-300 hover:text-white transition-colors" aria-label="Open search">
                                <SearchIcon className="w-6 h-6" />
                            </button>
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
                            
                            {user ? (
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-primary"
                                        aria-haspopup="true"
                                        aria-expanded={isDropdownOpen}
                                    >
                                        {getInitials(user.name)}
                                    </button>
                                    
                                    {isDropdownOpen && (
                                        <div 
                                            className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 border border-gray-700 origin-top-right transition-all duration-200 ease-out animate-fadeInScaleUp"
                                        >
                                            <div className="px-4 py-2 border-b border-gray-700">
                                                <p className="text-sm text-white font-semibold truncate">{user.name}</p>
                                                <p className="text-xs text-gray-400 truncate">{user.email}</p>
                                            </div>
                                            <button onClick={handleProfileClick} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                                                <UserIcon className="w-5 h-5 mr-3" />
                                                Profile
                                            </button>
                                            <button onClick={handleLogoutClick} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                                                <LogoutIcon className="w-5 h-5 mr-3" />
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button onClick={onProfileClick} className="text-gray-300 hover:text-white transition-colors" aria-label="Login or Sign up">
                                    <UserIcon className="w-7 h-7" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Search View */}
                    <div className={`flex items-center w-full transition-opacity duration-300 ${isSearchOpen ? 'opacity-100 flex' : 'opacity-0 hidden'}`}>
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search restaurants..."
                                value={searchTerm}
                                onChange={(e) => onSearchChange(e.target.value)}
                                className="w-full px-4 py-2 pl-10 bg-gray-800/50 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-white"
                                autoFocus
                            />
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                        <button onClick={() => setIsSearchOpen(false)} className="ml-4 text-gray-300 hover:text-white flex-shrink-0" aria-label="Close search">
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </div>
            <style>{`
                @keyframes fadeInScaleUp {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fadeInScaleUp { animation: fadeInScaleUp 0.2s forwards; }
            `}</style>
        </header>
    );
};

export default Header;