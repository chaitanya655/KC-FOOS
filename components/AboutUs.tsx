import React from 'react';

const AboutUs: React.FC<{onClose: () => void}> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/70 z-40 flex justify-center items-center" onClick={onClose}>
             <div 
                className="bg-gray-800 text-gray-200 rounded-lg p-8 m-4 max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4">About KC FOODS</h2>
                <p className="text-gray-300 mb-4">
                    KC FOODS is a fictional food delivery service created to demonstrate a modern web application built with React, TypeScript, and Tailwind CSS. 
                </p>
                <p className="text-gray-300">
                    The goal is to provide a seamless and enjoyable user experience for ordering food online. All data is for demonstration purposes only.
                </p>
                <div className="text-right mt-6">
                    <button 
                        onClick={onClose}
                        className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;