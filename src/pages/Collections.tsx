import React from 'react';
import { Link } from 'react-router-dom';

export default function Collections() {
  const collections = [
    {
      id: 1,
      name: 'Summer Essentials',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200',
      description: 'Lightweight fabrics and breathable silhouettes designed for peak summer.',
    },
    {
      id: 2,
      name: 'Minimal Basics',
      image: 'https://images.unsplash.com/photo-1434389678219-48243c5b8d65?auto=format&fit=crop&q=80&w=1200',
      description: 'The foundation of a modern wardrobe. Elevated tees, hoodies, and trousers.',
    },
    {
      id: 3,
      name: 'Outerwear Drop',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1200',
      description: 'Transitional pieces to layer when the temperature drops.',
    }
  ];

  return (
    <div className="w-full animate-in fade-in duration-500 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-4xl font-bold tracking-wide mb-16 text-center">Curated Collections</h1>
        
        <div className="space-y-20">
          {collections.map((collection, index) => (
            <div key={collection.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <img src={collection.image} alt={collection.name} className="w-full h-[60vh] object-cover" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4 md:px-12">
                <h2 className="font-serif text-3xl font-bold mb-4">{collection.name}</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto md:mx-0">{collection.description}</p>
                <Link 
                  to="/shop" 
                  className="inline-block border-b border-black text-xs uppercase tracking-widest font-bold pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors self-center md:self-start"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
