import React from 'react';

export default function Contact() {
  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h1 className="font-serif text-4xl font-bold tracking-wide mb-12 text-center">Contact Us</h1>
        
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-serif font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              Have a question about sizing, availability, or your recent order? 
              Fill out the form and our concierge team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-1">Email</h3>
                <p className="text-sm text-gray-500">support@viyun.com</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-1">Press Inquiries</h3>
                <p className="text-sm text-gray-500">press@viyun.com</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-1">Social</h3>
                <p className="text-sm text-gray-500">@viyun</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold mb-2">Name</label>
                <input type="text" id="name" className="w-full border border-gray-300 p-3 text-sm focus:border-black focus:outline-none" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full border border-gray-300 p-3 text-sm focus:border-black focus:outline-none" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full border border-gray-300 p-3 text-sm focus:border-black focus:outline-none resize-none" required></textarea>
              </div>
              <button type="submit" className="bg-black text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
