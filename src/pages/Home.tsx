import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Home',
    description: 'Explore the latest collection of contemporary streetwear and elevated essentials from VIYUN.'
  });

  const newArrivals = products.filter(p => p.isNewArrival);

  const heroImages = [
    "https://i.pinimg.com/1200x/47/16/5e/47165e6e151630e5fafbdcbfbec105f2.jpg",
    "https://i.pinimg.com/1200x/fc/65/cc/fc65cc4c69e48eb01994641a5b544ac6.jpg",
    "https://i.pinimg.com/1200x/56/d5/6e/56d56e27603c9a4b626057bfa4e6f50f.jpg",
    "https://i.pinimg.com/736x/26/f3/3d/26f33da23b7776f7e7b269c95d3a5e60.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="w-full animate-in fade-in duration-1000">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden mt-0 md:mt-4 px-4 md:px-8 pb-4">
        <div className="relative w-full h-full bg-[#DCD8CD] overflow-hidden">
           {/* Slider Images */}
           {heroImages.map((img, index) => (
             <img 
               key={index}
               src={img} 
               className={`absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-1000 ${index === currentSlide ? 'opacity-90 z-10' : 'opacity-0 z-0'}`} 
               alt={`Hero Campaign ${index + 1}`} 
             />
           ))}
           
           {/* Huge Text Overlay */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
             <h1 className="font-serif italic text-[25vw] leading-none text-[#F4F1E9] opacity-80 tracking-tighter mix-blend-overlay">viyun</h1>
           </div>
           
           {/* Shop Now Button */}
           <div className="absolute bottom-6 right-6 z-20">
              <Link to="/shop" className="bg-[#EBE7DF] text-black border border-black px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-black hover:text-[#EBE7DF] transition-colors inline-block">
                 SHOP NOW
              </Link>
           </div>
        </div>
      </section>

      {/* Ready To Wear Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pt-16 pb-24">
         <div className="flex justify-between items-end mb-6">
            <h2 className="text-sm md:text-base font-bold uppercase tracking-tight">Ready-To-Wear</h2>
            <Link to="/shop" className="text-[11px] flex items-center hover:opacity-70 font-bold lowercase tracking-wider">
               see more <ArrowRight size={14} className="ml-1" />
            </Link>
         </div>
         
         <div className="grid grid-cols-2 lg:grid-cols-5 border-l border-t border-black">
            {newArrivals.slice(0, 5).map(product => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </section>

      {/* Categories */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-32">
         <h2 className="text-sm md:text-base font-bold uppercase tracking-tight mb-4">Categories</h2>
         <div className="flex flex-col border-t border-black">
            {['Essentials & Core', 'Outerwear & Layers', 'The Soft Palette', 'Accessories', 'Modest Edit'].map((cat, i) => (
               <Link to={`/shop?category=${encodeURIComponent(cat)}`} key={i} className="flex justify-between items-center py-4 border-b border-black hover:pl-2 transition-all group text-sm md:text-base font-medium">
                  <span>{cat} /</span>
                  <ArrowRight size={16} className="text-black group-hover:translate-x-2 transition-transform" />
               </Link>
            ))}
         </div>
      </section>

    </div>
  );
}
