import React from 'react';
import { GooglePlayIcon, AppStoreIcon, LinkedInIcon, InstagramIcon, FacebookIcon, PinterestIcon, TwitterIcon } from './IconComponents';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">FoodFleet</h3>
                        <p className="text-gray-400 text-sm">© 2024 FoodFleet Inc.</p>
                        <p className="text-gray-400 text-sm mt-2">All rights reserved.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">About us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Press</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Get the app</h3>
                        <div className="space-y-3">
                            <a href="#" aria-label="Get it on Google Play">
                                <GooglePlayIcon className="h-12 w-auto" />
                            </a>
                            <a href="#" aria-label="Download on the App Store">
                                <AppStoreIcon className="h-12 w-auto" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 sm:mb-0">Serving deliciousness across the nation.</p>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><LinkedInIcon className="h-6 w-6" /></a>
                        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><InstagramIcon className="h-6 w-6" /></a>
                        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><FacebookIcon className="h-6 w-6" /></a>
                        <a href="#" aria-label="Pinterest" className="text-gray-400 hover:text-white"><PinterestIcon className="h-6 w-6" /></a>
                        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><TwitterIcon className="h-6 w-6" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
