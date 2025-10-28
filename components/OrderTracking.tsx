import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Order } from '../types';
import { CloseIcon, DeliveryScooterIcon, CheckCircleIcon, RestaurantIcon, HomeIcon } from './IconComponents';

interface OrderTrackingProps {
  order: Order | null;
  onClose: () => void;
  onDeliveryComplete: (orderId: string) => void;
}

const statusSteps = [
    { name: 'Order Confirmed', progress: 0 },
    { name: 'Cooking', progress: 25 },
    { name: 'Out for Delivery', progress: 50 },
    { name: 'Delivered', progress: 100 },
];

const OrderTracking: React.FC<OrderTrackingProps> = ({ order, onClose, onDeliveryComplete }) => {
    const [progress, setProgress] = useState(0);
    const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
    const [eta, setEta] = useState(15 * 60); // 15 minutes in seconds

    useEffect(() => {
        if (!order || order.status === 'Delivered') {
            setProgress(100);
            setCurrentStatusIndex(3);
            return;
        };

        const totalDuration = 15 * 1000; // 15 seconds for simulation
        const intervalTime = 100;
        const progressIncrement = (intervalTime / totalDuration) * 100;
        
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + progressIncrement;
                if (newProgress >= 100) {
                    clearInterval(progressInterval);
                    clearInterval(etaInterval);
                    onDeliveryComplete(order.id);
                    return 100;
                }
                
                const nextStatus = statusSteps.findIndex(step => newProgress < step.progress);
                setCurrentStatusIndex(nextStatus > -1 ? nextStatus - 1 : statusSteps.length -1);

                return newProgress;
            });
        }, intervalTime);

        const etaInterval = setInterval(() => {
            setEta(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => {
            clearInterval(progressInterval);
            clearInterval(etaInterval);
        };
    }, [order, onDeliveryComplete]);

    if (!order) return null;

    const scooterPath = {
        top: `${80 - progress * 0.6}%`,
        left: `${10 + progress * 0.7}%`,
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className="fixed inset-0 bg-black/80 z-40 flex justify-center items-center animate-fadeIn" onClick={onClose}>
            <div
                className="bg-gray-800 rounded-2xl p-6 m-4 max-w-lg w-full shadow-2xl animate-fadeInUp flex flex-col h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex justify-between items-center mb-4">
                    <div className="text-center flex-grow">
                         <h2 className="text-2xl font-bold text-gray-100">Track Your Order</h2>
                         <p className="text-sm text-gray-400">Order #{order.id.slice(-6)}</p>
                    </div>
                    <button onClick={onClose} className="p-2 -mr-2 rounded-full hover:bg-gray-700 transition-colors">
                        <CloseIcon className="h-6 w-6 text-gray-300" />
                    </button>
                </header>

                {/* Simulated Map */}
                <div className="flex-grow bg-gray-700/50 rounded-lg relative overflow-hidden my-4 border border-gray-600">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800" />
                    {/* Roads */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-600/50 -translate-y-8"></div>
                    <div className="absolute top-1/4 right-0 w-1 h-3/4 bg-gray-600/50 translate-x-4"></div>

                    <div className="absolute top-[80%] left-[10%]">
                        <RestaurantIcon className="w-10 h-10 text-primary animate-pulse" />
                        <span className="text-xs font-bold text-white -ml-2">Restaurant</span>
                    </div>

                    <div className="absolute top-[20%] left-[80%] text-center">
                        <HomeIcon className="w-10 h-10 text-white" />
                        <span className="text-xs font-bold text-white -ml-1">Home</span>
                    </div>

                    <motion.div
                        className="absolute"
                        animate={scooterPath}
                        transition={{ duration: 0.1, ease: "linear" }}
                    >
                        <DeliveryScooterIcon className="w-12 h-12 text-yellow-400 -rotate-45" />
                    </motion.div>
                </div>

                {/* ETA and Progress */}
                <div className="flex-shrink-0">
                    <div className="text-center my-4">
                        <p className="text-gray-400">Estimated Delivery Time</p>
                        <p className="text-4xl font-bold text-primary">{formatTime(eta)}</p>
                    </div>

                     {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                        <motion.div
                            className="bg-primary h-2.5 rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: 'linear' }}
                        />
                    </div>

                    {/* Status Text */}
                    <div className="text-center font-semibold text-lg text-white">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentStatusIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {statusSteps[currentStatusIndex].name}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;