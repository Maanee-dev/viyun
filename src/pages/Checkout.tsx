import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 150;
  const total = subtotal + shipping;

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
      <div className="max-w-[1440px] mx-auto px-4 py-40 text-center flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6">Cart Empty</p>
        <h1 className="font-serif text-4xl font-normal mb-8">No Items to Secure</h1>
        <Link to="/shop" className="text-[10px] uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 transition-colors">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full animate-in fade-in duration-700 bg-[#FAFAFA]">
      <h1 className="font-serif text-3xl lg:text-4xl font-normal tracking-wide mb-16 text-center">Secure Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
        {/* Form */}
        <div className="w-full lg:w-[60%]">
          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-12">
            {/* Contact */}
            <section>
              <h2 className="text-[11px] uppercase tracking-[0.15em] mb-6 flex items-center">
                 <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] mr-3">1</span>
                 Contact Details
              </h2>
              <div className="space-y-4">
                 <input type="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-[#DDD] py-3 text-sm focus:border-black focus:outline-none transition-colors placeholder:text-gray-400 font-light" />
                 <label className="flex items-center mt-3 cursor-pointer">
                    <input type="checkbox" className="accent-black mr-3" />
                    <span className="text-xs text-gray-500 font-light tracking-wide">Include me in the Viyun Newsletter for exclusive drops</span>
                 </label>
              </div>
            </section>
            
            {/* Shipping */}
            <section>
              <h2 className="text-[11px] uppercase tracking-[0.15em] mb-6 flex items-center">
                 <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] mr-3">2</span>
                 Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                <input type="text" placeholder="First Name" required className="w-full bg-transparent border-b border-[#DDD] py-3 text-sm focus:border-black focus:outline-none placeholder:text-gray-400 font-light col-span-2 sm:col-span-1" />
                <input type="text" placeholder="Last Name" required className="w-full bg-transparent border-b border-[#DDD] py-3 text-sm focus:border-black focus:outline-none placeholder:text-gray-400 font-light col-span-2 sm:col-span-1" />
                <input type="text" placeholder="Address Suite / Street" required className="w-full bg-transparent border-b border-[#DDD] py-3 text-sm focus:border-black focus:outline-none placeholder:text-gray-400 font-light col-span-2" />
                <input type="text" placeholder="City" required className="w-full bg-transparent border-b border-[#DDD] py-3 text-sm focus:border-black focus:outline-none placeholder:text-gray-400 font-light col-span-2 sm:col-span-1" />
                <div className="grid grid-cols-2 gap-6 col-span-2 sm:col-span-1">
                  <input type="text" placeholder="State/Region" required className="w-full bg-transparent border-b border-[#DDD] py-3 text-sm focus:border-black focus:outline-none placeholder:text-gray-400 font-light" />
                  <input type="text" placeholder="Postcode" required className="w-full bg-transparent border-b border-[#DDD] py-3 text-sm focus:border-black focus:outline-none placeholder:text-gray-400 font-light" />
                </div>
              </div>
            </section>

             {/* Payment Mock */}
             <section>
              <h2 className="text-[11px] uppercase tracking-[0.15em] mb-6 flex items-center">
                 <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] mr-3">3</span>
                 Payment Vault
              </h2>
              <div className="bg-white p-6 border border-[#EEEEEE] shadow-sm">
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-6 flex justify-between items-center pb-4 border-b border-[#EEEEEE]">
                   <span>Card Setup</span>
                   <span>Secure Checkout</span>
                </div>
                <input type="text" placeholder="Card Number" required className="w-full bg-transparent border-b border-[#DDD] py-3 text-sm focus:border-black focus:outline-none placeholder:text-gray-400 font-light mb-6" />
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="MM / YY" required className="w-full bg-transparent border-b border-[#DDD] py-3 text-sm focus:border-black focus:outline-none placeholder:text-gray-400 font-light" />
                  <input type="text" placeholder="CVC" required className="w-full bg-transparent border-b border-[#DDD] py-3 text-sm focus:border-black focus:outline-none placeholder:text-gray-400 font-light" />
                </div>
              </div>
            </section>
          </form>
        </div>

        {/* Invoice Summary */}
        <div className="w-full lg:w-[40%] bg-white p-8 lg:p-10 self-start shadow-sm border border-[#F5F5F5]">
          <h2 className="text-[10px] uppercase tracking-[0.2em] mb-8 font-medium">Order Invoice</h2>
          
          <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
            {cart.map((item, i) => (
               <div key={i} className="flex justify-between items-start text-sm">
                  <div className="flex items-start">
                    <div className="w-16 h-20 bg-[#F5F5F5] mr-4 flex-shrink-0">
                       <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="pt-1">
                      <p className="font-medium text-[11px] uppercase tracking-wider mb-1 max-w-[140px] truncate">{item.product.name}</p>
                      <p className="text-[#888] text-[10px] uppercase tracking-widest">{item.selectedColor} / {item.selectedSize}</p>
                      <p className="text-[#888] text-[10px] uppercase mt-2">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-light text-sm pt-1">MVR {(item.product.price * item.quantity).toFixed(2)}</span>
               </div>
            ))}
          </div>
          
           <div className="space-y-4 mb-8 pt-8 border-t border-[#F5F5F5] font-light">
              <div className="flex justify-between text-sm">
                <span className="text-[#666]">Subtotal</span>
                <span>MVR {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#666]">Standard Shipping</span>
                <span>{shipping === 0 ? 'Complimentary' : `MVR ${shipping.toFixed(2)}`}</span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-black mb-10">
              <div className="flex justify-between text-xl font-serif">
                <span>Total</span>
                <span>MVR {total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              form="checkout-form"
              disabled={isProcessing}
              className="w-full bg-black text-white py-5 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[#222] transition-colors disabled:opacity-50"
            >
              {isProcessing ? 'Processing Transaction...' : `Pay MVR ${total.toFixed(2)}`}
            </button>
        </div>
      </div>
    </div>
  );
}
