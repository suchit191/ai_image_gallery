// components/Dashboard.tsx
import React, { useState } from 'react';
import { Image, AIModel } from '../types/types';
import { aiModels, sampleImages } from '../types/data';

export default function Dashboard() {
  const [selectedModel, setSelectedModel] = useState<AIModel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter images based on search query and selected model
  const filteredImages = sampleImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModel = selectedModel === 'all' || image.aiModel === selectedModel;
    return matchesSearch && matchesModel;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8">AI Image Gallery</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search images..."
          className="flex-1 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <select
          className="p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value as AIModel | 'all')}
        >
          <option value="all">All Models</option>
          {aiModels.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
      </div>

      {/* Image Grid */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No images found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    {new Date(image.generationDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    Model: {image.aiModel}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {image.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}