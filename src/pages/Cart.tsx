import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X, ArrowRight } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 150;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="w-full pt-16 min-h-[70vh] flex flex-col justify-center items-center px-4">
        <p className="text-[11px] font-bold uppercase tracking-tight text-gray-400 mb-6">bag empty</p>
        <h1 className="text-xl md:text-2xl font-bold lowercase tracking-wider mb-8 text-[#111]">the vault is empty</h1>
        <Link 
          to="/shop" 
          className="border border-black bg-black text-white px-8 py-3 text-[11px] uppercase tracking-widest font-bold hover:bg-transparent hover:text-black transition-all"
        >
          discover
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full animate-in fade-in duration-700 min-h-[70vh] pt-16">
      <div className="border-b border-black px-4 md:px-8 py-8 flex items-baseline justify-between">
         <h1 className="text-xl md:text-2xl font-bold lowercase tracking-wider">shopping bag</h1>
         <span className="text-[11px] font-bold uppercase tracking-tight">{cart.length} items</span>
      </div>
      
      <div className="flex flex-col lg:flex-row">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 border-b lg:border-b-0 lg:border-r border-black">
          <div className="hidden sm:grid grid-cols-12 px-4 md:px-8 py-4 border-b border-black text-[11px] font-bold uppercase tracking-tight text-gray-500">
            <div className="col-span-6">product details</div>
            <div className="col-span-2 text-center">unit price</div>
            <div className="col-span-2 text-center">quantity</div>
            <div className="col-span-2 text-right">subtotal</div>
          </div>
          
          <div className="flex flex-col">
            {cart.map((item, index) => (
              <div key={`${item.product.id}-${item.selectedSize}-${index}`} className="flex flex-col sm:grid sm:grid-cols-12 items-center border-b border-black last:border-b-0 px-4 md:px-8 py-6">
                <div className="col-span-12 sm:col-span-6 flex items-start w-full relative">
                  <div className="w-24 h-32 flex-shrink-0 overflow-hidden bg-transparent border border-black">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="ml-6 flex-1 flex flex-col pt-1">
                     <Link to={`/product/${item.product.id}`} className="font-bold lowercase tracking-wider hover:opacity-70 transition-opacity block mb-2 text-sm text-[#111]">
                       {item.product.name}
                     </Link>
                     <p className="text-[11px] font-bold uppercase tracking-tight text-gray-500 mb-1">color // {item.selectedColor}</p>
                     <p className="text-[11px] font-bold uppercase tracking-tight text-gray-500 mb-4">size // {item.selectedSize}</p>
                     <button 
                         onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                         className="text-[10px] font-bold uppercase tracking-tight text-black hover:opacity-70 transition-opacity flex items-center mt-auto"
                       >
                         [ remove ]
                     </button>
                  </div>
                </div>
                
                <div className="col-span-12 sm:col-span-2 w-full flex justify-between sm:justify-center items-center mt-6 sm:mt-0">
                  <span className="sm:hidden text-[11px] font-bold uppercase tracking-tight text-gray-500">price //</span>
                  <span className="text-xs font-bold text-black">{item.product.price.toFixed(2)} MVR</span>
                </div>
                
                <div className="col-span-12 sm:col-span-2 w-full flex justify-between sm:justify-center items-center mt-3 sm:mt-0">
                  <span className="sm:hidden text-[11px] font-bold uppercase tracking-tight text-gray-500">qty //</span>
                  <span className="text-xs font-bold">{item.quantity}</span>
                </div>
                
                <div className="col-span-12 sm:col-span-2 w-full flex justify-between sm:justify-end items-center mt-3 sm:mt-0">
                   <span className="sm:hidden text-[11px] font-bold uppercase tracking-tight text-gray-500">total //</span>
                  <span className="text-xs font-bold">{(item.product.price * item.quantity).toFixed(2)} MVR</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 p-4 md:p-8 flex flex-col">
           <h2 className="text-[11px] font-bold uppercase tracking-tight mb-8 text-black">order overview</h2>
            
            <div className="space-y-4 mb-8 text-xs font-bold uppercase tracking-tight text-gray-500 flex-1">
              <div className="flex justify-between items-end border-b border-black/10 pb-2">
                <span>merchandise</span>
                <span className="text-black">{subtotal.toFixed(2)} MVR</span>
              </div>
              <div className="flex justify-between items-end border-b border-black/10 pb-2">
                <span>shipping</span>
                <span className="text-black">{shipping === 0 ? 'complimentary' : `${shipping.toFixed(2)} MVR`}</span>
              </div>
            </div>
            
            <div className="pt-4 mt-auto">
              <div className="flex justify-between font-bold lowercase tracking-wider text-lg mb-8">
                <span>total</span>
                <span>{total.toFixed(2)} MVR</span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full border border-black bg-black text-white py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-black transition-colors flex items-center justify-center group"
              >
                checkout <ArrowRight size={14} className="ml-2 transform transition-transform group-hover:translate-x-2" />
              </button>
              
              <div className="mt-6 text-center">
                 <Link to="/shop" className="text-[10px] font-bold uppercase tracking-tight text-gray-500 hover:text-black transition-colors underline underline-offset-4">
                   continue shopping
                 </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
