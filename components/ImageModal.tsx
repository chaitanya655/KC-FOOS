
import React from 'react';
import { CloseIcon } from './IconComponents';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4 animate-fadeInUp"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl max-h-[90vh] bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imageUrl} alt="Enlarged dish view" className="object-contain w-full h-full max-h-[85vh]"/>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-800/80 p-2 rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Close image view"
        >
          <CloseIcon className="w-6 h-6 text-gray-100" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;