import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border-r border-b border-black flex flex-col group bg-transparent">
      <Link to={`/product/${product.id}`} className="block relative aspect-[2/3] px-2 py-4 flex items-center justify-center group-hover:bg-black/5 transition-colors">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-cover md:object-contain mix-blend-multiply"
        />
        {/* Optional secondary image on hover if array exists and has > 1 */}
        {product.images && product.images.length > 1 && (
           <img
             src={product.images[1]}
             alt={product.name}
             className="absolute inset-0 w-full h-full object-cover md:object-contain mix-blend-multiply opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
           />
        )}
        {product.isNewArrival && (
          <span className="absolute top-2 left-2 bg-transparent text-black text-[9px] uppercase font-bold tracking-widest z-10">
            new
          </span>
        )}
      </Link>
      <div className="flex justify-between items-center px-3 py-2 border-t border-black text-[10px] bg-transparent">
         <Link to={`/product/${product.id}`} className="truncate pr-2 font-medium hover:opacity-70 transition-opacity">
            {product.name}
         </Link>
         <span className="font-bold flex-shrink-0">{product.price} MVR</span>
      </div>
    </div>
  );
}
