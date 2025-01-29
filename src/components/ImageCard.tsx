"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

interface ImageCardProps {
  title: string;
  imageUrl: string;
  generationDate: string;
  aiModel: string;
}

const ImageCard = ({ title, imageUrl, generationDate, aiModel }: ImageCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Model: {aiModel}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {new Date(generationDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      <ImageModal
        imageUrl={imageUrl}
        title={title}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ImageCard;