import React from 'react';
import { useSEO } from '../hooks/useSEO';

export default function About() {
  useSEO({
    title: 'Our Philosophy',
    description: 'Learn about the philosophy behind VIYUN. Bridging the gap between elevated luxury and everyday streetwear.'
  });

  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-wide mb-8">Our Philosophy</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Viyun was born from a desire to bridge the gap between elevated luxury and everyday streetwear. 
          We believe that considered design should be accessible, and that clothing should serve both an aesthetic 
          and functional purpose in your daily life.
        </p>
        <p className="text-gray-600 leading-relaxed mb-16">
          Every piece is designed with an obsessive focus on proportion, fabric, and construction. We source 
          premium materials globally and partner with ethical manufacturers to ensure our products not only look 
          exceptional but endure over time.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" 
          alt="Studio" 
          className="w-full h-[50vh] object-cover mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 border-t border-gray-100">
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-3">Materials</h3>
            <p className="text-sm text-gray-500">Premium cottons, Japanese denim, and Italian nylons form the basis of our collections.</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-3">Construction</h3>
            <p className="text-sm text-gray-500">Traditional techniques met with modern machinery for unparalleled durability.</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-3">Design</h3>
            <p className="text-sm text-gray-500">Minimalist aesthetics prioritizing silhouette and understated details.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
