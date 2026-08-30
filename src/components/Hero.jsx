import React from 'react';
import { Link } from 'react-router-dom'; // Imported Link for routing

export default function Hero() {
  return (
    <section id="home" className="relative h-[82vh] flex items-center justify-start overflow-hidden px-8 sm:px-16 md:px-24">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/images/thomason.jpg')`,
            backgroundColor: '#050c1e' // Dark Navy fallback
          }}
        />
        {/* Soft, Transparent Left-to-Right Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/85 via-[#0b192c]/50 to-transparent z-10" />
        
        {/* Subtle bottom vignetting to blend the lower edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 text-left max-w-3xl mt-32 flex flex-col justify-center">
        
        {/* Main Header */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tight uppercase leading-none drop-shadow-md">
          NSS IIT Roorkee
        </h1>
        
        {/* Slogan Subtitle */}
        <p className="mt-5 text-2xl sm:text-3xl text-gray-200 font-light italic tracking-wide drop-shadow-sm leading-relaxed">
          Not for me, but for the Nation.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-row justify-start items-center space-x-6">
          {/* UPDATED: Navigates directly to the separate About Page */}
          <Link 
            to="/about" 
            className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-10 py-4 rounded-md font-extrabold text-xs tracking-widest shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            OUR VISION
          </Link>
          
                    <Link 
            to="/events" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0b192c] px-10 py-4 rounded-md font-extrabold text-xs tracking-widest transition-all duration-200 transform hover:-translate-y-1"
          >
            OUR INITIATIVES
          </Link>

        </div>

      </div>
    </section>
  );
}