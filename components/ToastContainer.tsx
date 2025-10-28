
import React, { useState, useEffect } from 'react';
import { CheckCircleIcon } from './IconComponents';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

interface ToastContainerProps {
  toasts: Toast[];
}

const ToastMessage: React.FC<{ toast: Toast }> = ({ toast }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 2500); // Start exit animation before removal

        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className={`flex items-center bg-primary text-white p-4 rounded-lg shadow-lg ${isExiting ? 'animate-toast-out' : 'animate-toast-in'}`}
        >
            <CheckCircleIcon className="h-6 w-6 mr-3" />
            <span className="font-semibold">{toast.message}</span>
        </div>
    );
};


const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] space-y-2">
      {toasts.map(toast => (
        <ToastMessage key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;