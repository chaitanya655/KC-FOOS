import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col justify-center items-center z-[100] animate-fadeOut">
      <div className="text-white text-5xl font-bold animate-pulse">
        KC FOOD
      </div>
      <p className="text-gray-400 mt-2">Loading deliciousness...</p>
    </div>
  );
};

export default SplashScreen;
