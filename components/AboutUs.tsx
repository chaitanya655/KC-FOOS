import React from 'react';
import { SteamingFoodIcon, HeartIcon } from './IconComponents';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <SteamingFoodIcon className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About FoodFleet
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-xl text-gray-500">
            Bringing your favorite local restaurants right to your doorstep, one delicious meal at a time.
          </p>
        </div>

        <div className="mt-20 prose prose-lg text-gray-500 mx-auto">
          <h2>Our Mission</h2>
          <p>
            At FoodFleet, our mission is simple: to connect people with the best local food in their city. We believe that a great meal can bring people together, create memories, and brighten up anyone's day. We're passionate about supporting local businesses and helping them thrive in the digital age.
          </p>
          
          <h2>Our Story</h2>
          <p>
            Founded in a small garage by a group of food lovers, FoodFleet started with a simple idea: what if getting great food delivered was as easy and enjoyable as dining out? We've since grown into a bustling community of restaurants, riders, and customers, all united by a love for good food.
          </p>
          
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Customer-Obsessed:</strong> We put our customers at the heart of everything we do. Your satisfaction is our top priority.
            </li>
            <li>
              <strong>Support Local:</strong> We are champions for local restaurants, helping them to reach more customers and grow their business.
            </li>
            <li>
              <strong>Speed and Quality:</strong> We are committed to delivering your food hot, fresh, and on time, every time.
            </li>
          </ul>

          <div className="mt-12 text-center">
            <p className="flex items-center justify-center text-lg text-gray-600">
              Made with <HeartIcon className="w-6 h-6 text-red-500 mx-2" filled={true} /> in Hyderabad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
