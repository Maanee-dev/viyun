import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isAdded, setIsAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (product) {
      if (product.size.length > 0) setSelectedSize(product.size[0]);
      if (product.color.length > 0) setSelectedColor(product.color[0]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
           <p className="text-sm font-light text-gray-400 uppercase tracking-widest mb-4">Error 404</p>
           <h1 className="font-serif text-3xl mb-8">Product Unavailable</h1>
           <Link to="/shop" className="text-[10px] uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 transition-colors">Return to Directory</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: 1,
      selectedSize,
      selectedColor
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="w-full animate-in fade-in duration-700 min-h-screen pt-16">
      {/* Breadcrumbs */}
      <div className="border-b border-black px-4 md:px-8 py-4 flex items-center text-[10px] uppercase font-bold tracking-tight">
        <Link to="/" className="hover:opacity-70 transition-opacity">home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:opacity-70 transition-opacity">shop</Link>
        <span className="mx-2">/</span>
        <span>{product.category.toLowerCase()}</span>
        <span className="mx-2">/</span>
        <span className="truncate max-w-[200px] text-gray-500">{product.name.toLowerCase()}</span>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Visual Gallery Layout */}
        <div className="w-full lg:w-2/3 border-b lg:border-b-0 lg:border-r border-black flex flex-col md:flex-row h-auto md:h-[calc(100vh-100px)] overflow-hidden">
          {/* Thumbnails (desktop) */}
          <div className="hidden md:flex flex-col w-20 xl:w-24 flex-shrink-0 border-r border-black overflow-y-auto">
             {product.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImage(i)} className={`w-full aspect-[3/4] border-b border-black outline-none transition-colors ${activeImage === i ? 'bg-black/10' : 'hover:bg-black/5'}`}>
                   <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover mix-blend-multiply" />
                </button>
             ))}
          </div>
          
          {/* Main Image (Desktop) */}
          <div className="hidden md:flex flex-1 overflow-hidden relative bg-transparent items-center justify-center p-4">
            <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-contain mix-blend-multiply animate-in fade-in zoom-in-95 duration-500" key={activeImage} />
          </div>

          {/* Main Images Scrollable (Mobile) */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {product.images.map((img, i) => (
              <div key={i} className="min-w-full h-[60vh] snap-center flex items-center justify-center p-4 shrink-0 relative">
                <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-contain mix-blend-multiply" />
                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2">
                  {product.images.map((_, dotIdx) => (
                    <div key={dotIdx} className={`w-1.5 h-1.5 rounded-full border border-black ${dotIdx === i ? 'bg-black' : 'bg-transparent'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details panel */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="p-4 md:p-8 border-b border-black">
             <h1 className="text-xl md:text-2xl font-bold lowercase tracking-wider mb-2">{product.name}</h1>
             <p className="text-sm font-bold">{product.price.toFixed(2)} MVR</p>
          </div>
          
          <div className="p-4 md:p-8 flex-1 flex flex-col">
            {/* Color selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-bold uppercase tracking-tight">color // <span className="text-gray-500">{selectedColor}</span></span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.color.map(c => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-4 py-2 border text-[11px] font-bold uppercase tracking-tight transition-colors ${
                      selectedColor === c ? 'border-black bg-black text-white' : 'border-black text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-3">
                <span className="text-[11px] font-bold uppercase tracking-tight">size</span>
                <button className="text-[10px] font-bold uppercase tracking-tight border-b border-black pb-0.5 hover:opacity-70 transition-opacity">size guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.size.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-2 border text-[11px] font-bold uppercase tracking-tight transition-colors ${
                      selectedSize === s ? 'border-black bg-black text-white' : 'border-black text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase Action */}
            <div className="mt-auto pt-8">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 border border-black text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                   isAdded ? 'bg-[#555] text-white border-[#555]' : 'bg-black text-white hover:bg-transparent hover:text-black'
                }`}
              >
                {isAdded ? 'added to bag' : 'add to bag'}
              </button>
            </div>
            
            {/* Accordion / Details */}
            <div className="pt-8 border-t border-black mt-8 flex flex-col gap-6">
              <div>
                 <h3 className="text-[11px] font-bold uppercase tracking-tight mb-2">details</h3>
                 <p className="text-xs text-[#333] leading-relaxed">
                   {product.description}
                 </p>
              </div>
              <div>
                 <h3 className="text-[11px] font-bold uppercase tracking-tight mb-2">shipping & returns</h3>
                 <ul className="text-xs text-[#333] space-y-1 leading-relaxed">
                   <li>- Standard delivery 3-5 days.</li>
                   <li>- Extended 30-day returns.</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
