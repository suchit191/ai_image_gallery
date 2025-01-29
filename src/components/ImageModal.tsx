"use client";

import { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  imageUrl: string;
  title: string;
  onClose: () => void;
  isOpen: boolean;
}

const ImageModal = ({ imageUrl, title, onClose, isOpen }: ImageModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-[60vh]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;