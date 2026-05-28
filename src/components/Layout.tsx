import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();
  
  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'About', path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <div className={`min-h-screen flex flex-col pt-16`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#EBE7DF] border-b border-black/10`}>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16 text-[#111111]">
            {/* Search */}
            <div className="flex items-center w-1/3">
               <button 
                 onMouseDown={(e) => { e.preventDefault(); setIsSearchOpen(!isSearchOpen); }}
                 className="hover:opacity-70 transition-opacity flex items-center space-x-2"
               >
                 {isSearchOpen ? <X size={18} strokeWidth={1.5} /> : <Search size={18} strokeWidth={1.5} />}
               </button>
            </div>
            
             {/* Logo */}
            <div className="w-1/3 flex justify-center relative">
               <Link to="/" className="pointer-events-auto hover:opacity-70 transition-opacity flex items-center justify-center text-[#111] absolute top-1/2 -translate-y-1/2">
                 <svg viewBox="0 0 600 596" preserveAspectRatio="xMidYMid meet" className="h-[90px] md:h-[150px] w-auto">
                   <g transform="translate(0,596) scale(0.066667,-0.066667)" fill="currentColor" stroke="none">
                     <path d="M3724 5339 c-34 -7 -77 -20 -95 -29 -25 -14 -35 -13 -49 7 -15 20 -50 23 -235 20 l-217 -4 -4 -709 -4 -709 232 0 233 0 0 647 0 647 48 -10 c76 -15 99 -49 156 -230 60 -194 80 -215 231 -245 232 -46 270 -73 270 -195 0 -98 -52 -152 -206 -213 -157 -62 -175 -88 -182 -260 l-5 -141 226 0 225 0 5 342 5 341 51 105 c41 84 86 139 227 277 168 167 239 264 239 329 0 30 -8 31 -319 31 l-318 -1 37 -30 c194 -157 221 -272 118 -496 -26 -57 -50 -101 -53 -98 -3 3 -23 66 -44 139 -104 360 -311 536 -572 485z"/>
                     <path d="M1708 5320 c-113 -42 -193 -117 -163 -153 17 -20 23 -20 54 0 127 83 186 4 300 -404 131 -469 129 -465 305 -519 179 -54 226 -103 249 -258 8 -54 17 -71 37 -71 20 0 28 17 34 71 14 115 71 268 149 399 198 334 336 668 363 876 l10 79 -315 0 c-201 0 -316 -5 -316 -15 0 -8 6 -15 14 -15 31 0 152 -139 195 -222 121 -241 111 -425 -41 -736 -73 -150 -76 -154 -84 -105 -4 28 -15 97 -24 154 -21 128 -154 559 -205 658 -111 220 -360 336 -562 261z"/>
                     <path d="M4968 4842 l5 -499 40 -86 c181 -388 857 -479 1054 -142 56 97 68 220 68 742 l0 484 -229 -4 -228 -4 4 -443 c5 -517 -1 -493 167 -607 207 -141 175 -264 -64 -245 -301 25 -357 153 -366 830 l-5 465 -225 4 -226 4 5 -499z"/>
                     <path d="M6239 5338 c0 -3 -2 -323 -3 -710 l-2 -705 228 -5 228 -4 0 57 c-1 150 -40 242 -173 409 -91 113 -112 153 -155 282 -31 94 -84 406 -72 418 4 4 76 -117 160 -268 303 -540 323 -563 554 -636 215 -67 263 -102 280 -205 7 -41 17 -56 38 -56 27 0 28 26 28 713 l0 712 -232 0 c-265 0 -244 15 -217 -148 19 -117 38 -156 153 -309 111 -148 156 -246 193 -420 44 -214 37 -228 -42 -83 -400 738 -480 853 -641 913 -68 26 -323 61 -325 45z"/>
                   </g>
                 </svg>
               </Link>
            </div>

            {/* Icons */}
            <div className="w-1/3 flex justify-end items-center space-x-5">
              <Link to="/cart" className="hover:opacity-70 transition-opacity relative">
                <ShoppingBag size={18} strokeWidth={1.5} />
                {cartCount > 0 && (
                   <span className="absolute -top-1.5 -right-2 text-[9px] w-4 h-4 rounded-full flex items-center justify-center leading-none bg-black text-white">
                      {cartCount}
                   </span>
                )}
              </Link>
              <button className="hidden sm:block hover:opacity-70 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </button>
              <Link to="/account" className="hidden sm:block hover:opacity-70 transition-opacity">
                <User size={18} strokeWidth={1.5} />
              </Link>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:opacity-75 focus:outline-none transition-opacity"
              >
                {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Panel */}
        {isSearchOpen && (
          <div className="bg-[#EBE7DF] mt-[1px] absolute w-full left-0 origin-top animate-in fade-in slide-in-from-top-2 duration-300 border-t border-black z-50 p-6 md:p-12">
             <div className="max-w-4xl mx-auto">
               <div className="flex border-b border-black pb-2 items-center">
                 <Search size={20} strokeWidth={1.5} className="mr-3" />
                 <input 
                   type="text" 
                   autoFocus
                   placeholder="SEARCH PRODUCTS, COLLECTIONS..." 
                   className="bg-transparent border-none outline-none w-full text-sm md:text-base font-bold lowercase tracking-wider placeholder-[#888] text-black"
                 />
               </div>
               <div className="mt-8 text-xs font-bold uppercase tracking-tight text-gray-500">
                 Trending searches: <span className="text-black ml-2 cursor-pointer hover:underline">Jackets</span>, <span className="text-black ml-2 cursor-pointer hover:underline">FW25</span>
               </div>
             </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-[#EBE7DF] mt-[1px] absolute w-full left-0 origin-top animate-in slide-in-from-top-2 fade-in duration-300 h-screen overflow-y-auto border-t border-black/10 z-50">
            <div className="px-6 pt-8 pb-32 space-y-8 h-full flex flex-col text-sm text-[#111111]">
              <div className="py-4 border-b border-black/10 w-full flex justify-center">
                 <Link to="/shop" className="text-xl font-serif italic hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              </div>
              <div className="py-4 border-b border-black/10 w-full flex justify-center">
                 <Link to="/collections" className="text-xl font-serif italic hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Collections</Link>
              </div>
              <div className="py-4 border-b border-black/10 w-full flex justify-center">
                 <Link to="/lookbook" className="text-xl font-serif italic hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Lookbook</Link>
              </div>
              <div className="py-4 border-b border-black/10 w-full flex justify-center">
                 <Link to="/about" className="text-xl font-serif italic hover:opacity-70" onClick={() => setIsMenuOpen(false)}>About</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#EAE5DD] text-[#111] border-t border-black/10 mt-auto">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 justify-items-start">
            <div className="space-y-6 md:col-span-4 lg:col-span-5">
              <Link to="/" className="inline-block text-[#111] hover:opacity-70 transition-opacity">
                 <svg viewBox="0 0 600 596" preserveAspectRatio="xMidYMid meet" className="h-[120px] md:h-[180px] w-auto">
                   <g transform="translate(0,596) scale(0.066667,-0.066667)" fill="currentColor" stroke="none">
                     <path d="M3724 5339 c-34 -7 -77 -20 -95 -29 -25 -14 -35 -13 -49 7 -15 20 -50 23 -235 20 l-217 -4 -4 -709 -4 -709 232 0 233 0 0 647 0 647 48 -10 c76 -15 99 -49 156 -230 60 -194 80 -215 231 -245 232 -46 270 -73 270 -195 0 -98 -52 -152 -206 -213 -157 -62 -175 -88 -182 -260 l-5 -141 226 0 225 0 5 342 5 341 51 105 c41 84 86 139 227 277 168 167 239 264 239 329 0 30 -8 31 -319 31 l-318 -1 37 -30 c194 -157 221 -272 118 -496 -26 -57 -50 -101 -53 -98 -3 3 -23 66 -44 139 -104 360 -311 536 -572 485z"/>
                     <path d="M1708 5320 c-113 -42 -193 -117 -163 -153 17 -20 23 -20 54 0 127 83 186 4 300 -404 131 -469 129 -465 305 -519 179 -54 226 -103 249 -258 8 -54 17 -71 37 -71 20 0 28 17 34 71 14 115 71 268 149 399 198 334 336 668 363 876 l10 79 -315 0 c-201 0 -316 -5 -316 -15 0 -8 6 -15 14 -15 31 0 152 -139 195 -222 121 -241 111 -425 -41 -736 -73 -150 -76 -154 -84 -105 -4 28 -15 97 -24 154 -21 128 -154 559 -205 658 -111 220 -360 336 -562 261z"/>
                     <path d="M4968 4842 l5 -499 40 -86 c181 -388 857 -479 1054 -142 56 97 68 220 68 742 l0 484 -229 -4 -228 -4 4 -443 c5 -517 -1 -493 167 -607 207 -141 175 -264 -64 -245 -301 25 -357 153 -366 830 l-5 465 -225 4 -226 4 5 -499z"/>
                     <path d="M6239 5338 c0 -3 -2 -323 -3 -710 l-2 -705 228 -5 228 -4 0 57 c-1 150 -40 242 -173 409 -91 113 -112 153 -155 282 -31 94 -84 406 -72 418 4 4 76 -117 160 -268 303 -540 323 -563 554 -636 215 -67 263 -102 280 -205 7 -41 17 -56 38 -56 27 0 28 26 28 713 l0 712 -232 0 c-265 0 -244 15 -217 -148 19 -117 38 -156 153 -309 111 -148 156 -246 193 -420 44 -214 37 -228 -42 -83 -400 738 -480 853 -641 913 -68 26 -323 61 -325 45z"/>
                   </g>
                 </svg>
              </Link>
              <p className="text-[#555] max-w-sm text-sm leading-relaxed font-light">
                Bridging premium minimal luxury with everyday wearability for the global citizen.
              </p>
            </div>
            
            <div className="space-y-6 md:col-span-2 lg:col-span-2">
              <h4 className="font-bold text-xs uppercase tracking-widest text-black">Explore</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><Link to="/shop" className="text-[#555] hover:text-black transition-colors">Shop All</Link></li>
                <li><Link to="/shop?category=Women" className="text-[#555] hover:text-black transition-colors">Womenswear</Link></li>
                <li><Link to="/shop?category=Men" className="text-[#555] hover:text-black transition-colors">Menswear</Link></li>
                <li><Link to="/about" className="text-[#555] hover:text-black transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div className="space-y-6 md:col-span-3 lg:col-span-3">
              <h4 className="font-bold text-xs uppercase tracking-widest text-black">Client Services</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><Link to="/contact" className="text-[#555] hover:text-black transition-colors">Contact Us</Link></li>
                <li><Link to="/track-order" className="text-[#555] hover:text-black transition-colors">Track Order</Link></li>
                <li><Link to="#" className="text-[#555] hover:text-black transition-colors">Shipping & Returns</Link></li>
                <li><Link to="#" className="text-[#555] hover:text-black transition-colors">Size Guide</Link></li>
              </ul>
            </div>

            <div className="space-y-6 md:col-span-3 lg:col-span-2 flex flex-col h-full w-full justify-between">
               <div className="space-y-6">
                 <h4 className="font-bold text-xs uppercase tracking-widest text-black">Newsletter</h4>
                 <div className="border-b border-black/30 flex pb-2">
                    <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none text-sm font-light flex-1 placeholder-[#888] text-black" />
                    <button className="text-[10px] uppercase tracking-widest text-black hover:text-[#555] transition-colors font-bold">Subscribe</button>
                 </div>
               </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#555] uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} VIYUN STUDIOS. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-6 mt-6 sm:mt-0">
              <Link to="#" className="hover:text-black transition-colors">Instagram</Link>
              <Link to="#" className="hover:text-black transition-colors">TikTok</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
