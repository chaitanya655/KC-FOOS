import React, { useState } from 'react';
import type { User } from '../types';

interface AuthPageProps {
  onLogin: (user: User) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [name, setName] = useState('Guest User');
  const [email, setEmail] = useState('guest@kcfood.com');
  const [address, setAddress] = useState('123 Delicious Lane, Foodie City');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!name || !email || !address) {
      setError('Please fill in all fields to continue.');
      return;
    }
    setError('');
    onLogin({ name, email, address });
  };

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md m-4 text-center animate-fadeInUp">
        <h1 className="text-4xl font-bold text-white mb-2">Welcome to KC FOOD</h1>
        <p className="text-gray-400 mb-6">Enter your details to get started.</p>

        <div className="space-y-4 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-300">Delivery Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

        <button
          onClick={handleLogin}
          className="mt-8 w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Enter
        </button>
        <p className="text-xs text-gray-500 mt-4">This is a demo. No real data is stored.</p>
      </div>
    </div>
  );
};

export default AuthPage;
