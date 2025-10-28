import React, { useState } from 'react';
import Lottie from 'lottie-react';
import type { User } from '../types';
import { CloseIcon } from './IconComponents';

// Embedded Lottie animation data to resolve missing file and path alias issues.
const foodAnimationData = {"v":"5.9.6","fr":60,"ip":0,"op":180,"w":1080,"h":1080,"nm":"Food Ring Loading Animation","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Stroke 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[864,864],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":432,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect"},{"ty":"st","c":{"a":0,"k":[1,0.380392156863,0.313725490196,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":48,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"tr":{"s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0,0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[35,35]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":120,"s":[35,35]},{"t":180,"s":[0,0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0,0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":60,"s":[35,35]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":150,"s":[35,35]},{"t":180,"s":[0,0]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":90,"s":[0]},{"t":150,"s":[-360]}],"ix":3}},"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":180,"st":0,"bm":0}]}

interface AuthPageProps {
  onLogin: (user: User) => void;
  onClose: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin, onClose }) => {
  const [name, setName] = useState('Satoshi');
  const [email, setEmail] = useState('satoshi@gmx.com');
  const [address, setAddress] = useState('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !address) {
      setError('Please fill in all fields to continue.');
      return;
    }
    setError('');
    onLogin({ name, email, address });
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-40 flex justify-center items-center animate-fadeIn" onClick={onClose}>
      <div 
        className="relative max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl p-8 animate-fadeInUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-colors">
            <CloseIcon className="h-6 w-6 text-gray-300" />
        </button>
        <div className="text-center mb-6">
          <Lottie animationData={foodAnimationData} className="w-40 h-40 mx-auto -mt-16" />
          <h1 className="text-4xl font-bold text-white tracking-wider -mt-4">
            Welcome to KC <span className="text-primary">FOODS</span>
          </h1>
          <p className="text-gray-400 mt-2">Sign in to start your delicious journey.</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-300">
              Delivery Address
            </label>
            <textarea
              id="address"
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary transition-colors"
            >
              Continue to App
            </button>
          </div>
        </form>
         <p className="mt-6 text-center text-xs text-gray-500">
            For demonstration purposes, you can use the default credentials.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;