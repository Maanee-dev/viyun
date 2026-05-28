import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const location = useLocation();

  const categories = [
    'All', 
    'Men', 
    'Women', 
    'Modest Wear', 
    'Beachwear', 
    'Footwear', 
    'Smart Wear', 
    'Kids', 
    'Accessories', 
    'Seasonal',
    'Streetwear',
    'Island Wear'
  ];

  useEffect(() => {
     const params = new URLSearchParams(location.search);
     const initialCategory = params.get('category');
     if (initialCategory && categories.includes(initialCategory)) {
        setActiveCategory(initialCategory);
     }
  }, [location]);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory || p.tags?.includes(activeCategory));

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-700 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Filters Sidebar */}
        <div className="w-full md:w-48 lg:w-56 flex-shrink-0">
          <div className="sticky top-24 md:top-32">
            <h1 className="text-sm md:text-base font-bold uppercase tracking-tight mb-8">Collections</h1>
            <ul className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-4 md:gap-0 md:space-y-4 pb-4 md:pb-0 border-b md:border-b-0 border-black/10">
              {categories.map(cat => (
                <li key={cat} className="flex-shrink-0">
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm md:text-base uppercase tracking-tight transition-all duration-300 relative group flex w-fit hover:pl-2 ${
                      activeCategory === cat ? 'text-black font-bold pl-2' : 'text-[#555] font-medium'
                    }`}
                  >
                    <span>{cat} /</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 mt-6 md:mt-0">
          <div className="flex justify-between items-center mb-6">
             <span className="text-[11px] font-bold lowercase tracking-wider">{filteredProducts.length} items</span>
             <select className="text-[11px] font-bold lowercase tracking-wider border-b border-black bg-transparent outline-none cursor-pointer pb-0.5">
                <option>sort: featured</option>
                <option>price: low to high</option>
                <option>price: high to low</option>
             </select>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-t border-black">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-40 flex flex-col items-center">
              <p className="text-sm font-bold uppercase tracking-tight mb-4">The vault is empty</p>
              <h2 className="font-serif italic text-3xl">No items in this collection yet.</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
