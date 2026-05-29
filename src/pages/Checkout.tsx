import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Upload, FileCheck2 } from 'lucide-react';

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 150;
  const total = subtotal + shipping;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="w-full pt-16 min-h-[70vh] flex flex-col justify-center items-center px-4">
        <p className="text-[11px] font-bold uppercase tracking-tight text-gray-400 mb-6">secure checkout</p>
        <h1 className="text-xl md:text-2xl font-bold lowercase tracking-wider mb-8 text-[#111]">no items to checkout</h1>
        <Link 
          to="/shop" 
          className="border border-black bg-black text-white px-8 py-3 text-[11px] uppercase tracking-widest font-bold hover:bg-transparent hover:text-black transition-all"
        >
          return to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full animate-in fade-in duration-700 min-h-[70vh] pt-16">
      <div className="border-b border-black px-4 md:px-8 py-8 flex items-baseline justify-between mb-0">
         <h1 className="text-xl md:text-2xl font-bold lowercase tracking-wider">secure checkout</h1>
         <span className="text-[11px] font-bold uppercase tracking-tight">{cart.length} items</span>
      </div>
      
      <div className="flex flex-col lg:flex-row">
        {/* Form */}
        <div className="w-full lg:w-2/3 border-b lg:border-b-0 lg:border-r border-black p-4 md:p-8">
          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-12">
            {/* Contact */}
            <section className="border-b border-black/10 pb-12">
              <h2 className="text-[11px] font-bold uppercase tracking-tight mb-6 flex items-center">
                 <span className="w-5 h-5 border border-black flex items-center justify-center text-[10px] mr-3">1</span>
                 contact details
              </h2>
              <div className="space-y-4">
                 <input type="email" placeholder="email address" required className="w-full bg-transparent border border-black p-3 text-sm focus:bg-black/5 focus:outline-none transition-colors placeholder:text-gray-500 font-bold lowercase tracking-wider" />
                 <label className="flex items-center mt-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-black flex items-center justify-center mr-3 relative">
                       <input type="checkbox" className="appearance-none absolute inset-0 peer cursor-pointer" />
                       <div className="w-2 h-2 bg-black hidden peer-checked:block" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-tight text-gray-500 group-hover:text-black transition-colors">subscribe to exclusive drops</span>
                 </label>
              </div>
            </section>
            
            {/* Shipping */}
            <section className="border-b border-black/10 pb-12 mt-12">
              <h2 className="text-[11px] font-bold uppercase tracking-tight mb-6 flex items-center">
                 <span className="w-5 h-5 border border-black flex items-center justify-center text-[10px] mr-3">2</span>
                 shipping address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="first name" required className="w-full bg-transparent border border-black p-3 text-sm focus:bg-black/5 focus:outline-none placeholder:text-gray-500 font-bold lowercase tracking-wider col-span-2 sm:col-span-1" />
                <input type="text" placeholder="last name" required className="w-full bg-transparent border border-black p-3 text-sm focus:bg-black/5 focus:outline-none placeholder:text-gray-500 font-bold lowercase tracking-wider col-span-2 sm:col-span-1" />
                <input type="text" placeholder="address" required className="w-full bg-transparent border border-black p-3 text-sm focus:bg-black/5 focus:outline-none placeholder:text-gray-500 font-bold lowercase tracking-wider col-span-2" />
                <input type="text" placeholder="city" required className="w-full bg-transparent border border-black p-3 text-sm focus:bg-black/5 focus:outline-none placeholder:text-gray-500 font-bold lowercase tracking-wider col-span-2 sm:col-span-1" />
                <div className="grid grid-cols-2 gap-4 col-span-2 sm:col-span-1">
                  <input type="text" placeholder="region" required className="w-full bg-transparent border border-black p-3 text-sm focus:bg-black/5 focus:outline-none placeholder:text-gray-500 font-bold lowercase tracking-wider" />
                  <input type="text" placeholder="postcode" required className="w-full bg-transparent border border-black p-3 text-sm focus:bg-black/5 focus:outline-none placeholder:text-gray-500 font-bold lowercase tracking-wider" />
                </div>
              </div>
            </section>

             {/* Transfer Slip */}
             <section className="mt-12">
              <h2 className="text-[11px] font-bold uppercase tracking-tight mb-6 flex items-center">
                 <span className="w-5 h-5 border border-black flex items-center justify-center text-[10px] mr-3">3</span>
                 bank transfer
              </h2>
              <div className="border border-black p-6 bg-transparent">
                <div className="mb-6 pb-6 border-b border-black">
                   <p className="text-[11px] font-bold uppercase tracking-tight mb-2">account details</p>
                   <p className="text-sm font-bold lowercase tracking-wider text-gray-500">7730 0000 0000 0000</p>
                   <p className="text-sm font-bold lowercase tracking-wider text-gray-500 mt-1">bml islamic / viyun</p>
                </div>
                
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-black/20 p-8 hover:bg-black/5 transition-colors cursor-pointer relative group">
                  <input type="file" accept="image/*,.pdf" required onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                  {uploadedFileName ? (
                    <div className="flex flex-col items-center text-center">
                      <FileCheck2 size={24} strokeWidth={1.5} className="mb-3 text-black" />
                      <p className="text-xs font-bold lowercase tracking-wider truncate max-w-[200px]">{uploadedFileName}</p>
                      <p className="text-[10px] font-bold uppercase tracking-tight text-gray-500 mt-2 hover:text-black hover:underline cursor-pointer relative z-20" onClick={(e) => { e.stopPropagation(); setUploadedFileName(null); }}>[ replace slip ]</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center">
                      <Upload size={24} strokeWidth={1.5} className="mb-3 text-black group-hover:scale-110 transition-transform" />
                      <p className="text-xs font-bold lowercase tracking-wider mb-1">upload transfer slip</p>
                      <p className="text-[10px] font-bold uppercase tracking-tight text-gray-500">jpeg, png or pdf</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </form>
        </div>

        {/* Invoice Summary */}
        <div className="w-full lg:w-1/3 p-4 md:p-8 flex flex-col items-start self-start h-auto">
          <h2 className="text-[11px] font-bold uppercase tracking-tight mb-8 text-black">order overview</h2>
          
          <div className="space-y-6 flex-1 w-full max-h-[40vh] overflow-y-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {cart.map((item, i) => (
               <div key={i} className="flex justify-between items-start text-sm border-b border-black/10 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="w-16 h-20 border border-black flex-shrink-0">
                       <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                    <div className="pt-1 ml-4">
                      <p className="font-bold lowercase tracking-wider text-[11px] mb-1 max-w-[140px] truncate">{item.product.name}</p>
                      <p className="text-gray-500 font-bold uppercase tracking-tight text-[10px] mb-1">color // {item.selectedColor}</p>
                      <p className="text-gray-500 font-bold uppercase tracking-tight text-[10px]">size // {item.selectedSize}</p>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className="font-bold text-xs pt-1">{(item.product.price * item.quantity).toFixed(2)} MVR</span>
                    <span className="text-[10px] font-bold uppercase tracking-tight text-gray-500 mt-1">qty: {item.quantity}</span>
                  </div>
               </div>
            ))}
          </div>
          
           <div className="space-y-4 mb-8 pt-8 mt-8 border-t border-black w-full text-xs font-bold uppercase tracking-tight text-gray-500">
              <div className="flex justify-between items-end border-b border-black/10 pb-2">
                <span>merchandise</span>
                <span className="text-black">{subtotal.toFixed(2)} MVR</span>
              </div>
              <div className="flex justify-between items-end border-b border-black/10 pb-2">
                <span>shipping</span>
                <span className="text-black">{shipping === 0 ? 'complimentary' : `${shipping.toFixed(2)} MVR`}</span>
              </div>
            </div>
            
            <div className="pt-4 mt-auto w-full">
              <div className="flex justify-between font-bold lowercase tracking-wider text-lg mb-8">
                <span>total</span>
                <span>{total.toFixed(2)} MVR</span>
              </div>

              <button
                type="submit"
                form="checkout-form"
                disabled={isProcessing}
                className="w-full border border-black bg-black text-white py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-black transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {isProcessing ? 'processing...' : 'confirm order'}
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
