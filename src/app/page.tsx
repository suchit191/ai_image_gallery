// src/app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import LoadingSpinner from '../components/LoadingSpinner';



export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">AI Image Gallery</h1>
        {isLoading ? <LoadingSpinner /> : <Dashboard />}
      </div>
    </main>
  );
}