import React from 'react';
import { 
    SteamingFoodIcon, 
    GooglePlayIcon, 
    AppStoreIcon,
    LinkedInIcon,
    InstagramIcon,
    FacebookIcon,
    PinterestIcon,
    TwitterIcon
} from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-xl font-bold text-white mb-4 md:mb-0">For better experience, download the KC FOOD app now</h3>
            <div className="flex space-x-4">
                <a href="#" aria-label="Get it on Google Play">
                    <GooglePlayIcon className="h-12" />
                </a>
                <a href="#" aria-label="Download on the App Store">
                    <AppStoreIcon className="h-12" />
                </a>
            </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                    <SteamingFoodIcon className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold text-white">KC <span className="text-primary">FOOD</span></h2>
                </div>
                <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} KC FOOD Limited</p>
            </div>
            <div>
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">KC FOOD One</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-white mb-4">Contact us</h4>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Help & Support</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Partner with us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Ride with us</a></li>
                </ul>
                 <h4 className="font-bold text-white mb-4 mt-6">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-white mb-4">Available in</h4>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Hyderabad</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Bangalore</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Delhi</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Mumbai</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-white mb-4">Social Links</h4>
                <div className="flex space-x-4">
                    <a href="#" aria-label="LinkedIn"><LinkedInIcon className="h-6 w-6 text-gray-400 hover:text-white" /></a>
                    <a href="#" aria-label="Instagram"><InstagramIcon className="h-6 w-6 text-gray-400 hover:text-white" /></a>
                    <a href="#" aria-label="Facebook"><FacebookIcon className="h-6 w-6 text-gray-400 hover:text-white" /></a>
                    <a href="#" aria-label="Pinterest"><PinterestIcon className="h-6 w-6 text-gray-400 hover:text-white" /></a>
                    <a href="#" aria-label="Twitter"><TwitterIcon className="h-6 w-6 text-gray-400 hover:text-white" /></a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;