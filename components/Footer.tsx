import React from 'react';

interface FooterProps {
    onAboutClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAboutClick }) => {
    return (
        <footer className="bg-gray-800 text-white mt-16">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold">KC FOOD</h3>
                        <p className="text-gray-400">Your favorite food, delivered.</p>
                    </div>
                    <div className="flex space-x-6">
                        <button onClick={onAboutClick} className="text-gray-300 hover:text-white transition-colors">About Us</button>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} KC FOOD. All rights reserved. For demonstration purposes only.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
