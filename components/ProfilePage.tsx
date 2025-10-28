// Fix: The original file content was placeholder text. It has been replaced with a full implementation of the ProfilePage component.
import React, { useState, useEffect } from 'react';
import type { User } from '../types';
import { CloseIcon, UserIcon } from './IconComponents';

interface ProfilePageProps {
  user: User;
  onUpdateProfile: (user: User) => void;
  onClose: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onUpdateProfile, onClose }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);
    const [error, setError] = useState('');

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setAddress(user.address);
    }, [user]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!name || !email || !address) {
            setError('All fields are required.');
            return;
        }

        onUpdateProfile({ name, email, address });
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-40 flex justify-center items-center" onClick={onClose}>
            <div
                className="bg-gray-800 rounded-2xl p-8 m-4 max-w-md w-full shadow-2xl animate-fadeInUp"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <UserIcon className="h-8 w-8 text-primary mr-3" />
                        <h2 className="text-3xl font-bold text-gray-100">Profile</h2>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                        <CloseIcon className="h-6 w-6 text-gray-300" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="profile-name" className="block text-sm font-medium text-gray-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="profile-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light"
                        />
                    </div>
                    <div>
                        <label htmlFor="profile-email" className="block text-sm font-medium text-gray-300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="profile-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light"
                        />
                    </div>
                    <div>
                        <label htmlFor="profile-address" className="block text-sm font-medium text-gray-300">
                            Delivery Address
                        </label>
                        <textarea
                            id="profile-address"
                            rows={3}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light"
                        />
                    </div>
                    
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
