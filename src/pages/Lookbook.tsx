import React from 'react';
import { useSEO } from '../hooks/useSEO';

export default function Lookbook() {
  useSEO({
    title: 'Lookbook',
    description: 'Explore Campaign 01: The Foundation. The latest editorial and styling inspiration from VIYUN.'
  });

  const images = [
    'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=1200',
  ];

  return (
    <div className="w-full animate-in fade-in duration-500 pt-16 min-h-screen">
      <div className="border-b border-black px-4 md:px-8 py-8 flex items-baseline justify-between">
        <h1 className="font-bold lowercase tracking-wider text-xl md:text-2xl">campaign 01 // the foundation</h1>
        <p className="text-[11px] font-bold uppercase tracking-tight">fw25</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black border-b border-black">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group bg-transparent">
             <img src={img} alt={`Look ${i + 1}`} className="w-full h-full object-cover mix-blend-multiply" />
             <div className="absolute bottom-4 left-4 border border-black bg-white/50 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#111]">
               Look {i + 1}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
