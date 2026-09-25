import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isSubpage = location.pathname !== '/';

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div className="w-full flex items-center justify-between">
        
        {/* 1. BRANDING - Transparent background to prevent white-on-white bleeding */}
        <Link to="/" className="flex items-center space-x-4 pl-2 cursor-pointer z-50">
          <div className="h-16 w-16 rounded-full bg-transparent flex items-center justify-center overflow-hidden">
            <img 
              src="/images/nss-logo.jpg" 
              alt="NSS Logo" 
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="text-white leading-tight">
            <span className="block text-[11px] font-semibold tracking-widest uppercase leading-none text-red-800">National Service Scheme</span>
            <h1 className="block text-2xl font-black tracking-wider uppercase mt-1 leading-none text-red-800">IIT ROORKEE</h1>
          </div>
        </Link>

        {/* 2. DESKTOP CAPSULE */}
        <div className={`hidden lg:flex items-center backdrop-blur-md rounded-full pl-8 pr-3 py-3 shadow-2xl border transition-all duration-300 ${
          isSubpage 
            ? 'bg-[#0b192c]/10 border-gray-200/40 shadow-gray-200/10' 
            : 'bg-white/10 border-white/25'
        }`}>
          <nav className="hidden xl:flex items-center space-x-8 mr-10 font-['Verdana',_sans-serif]">
            <Link to="/" className={`font-bold text-[12px] uppercase tracking-wide transition-colors py-1 ${isSubpage ? 'text-slate-700 hover:text-[#d32f2f]' : 'text-white hover:text-[#d32f2f]'}`}>Home</Link>
            <Link to="/attendance" className={`font-bold text-[12px] uppercase tracking-wide transition-colors py-1 ${isSubpage ? 'text-slate-500 hover:text-[#d32f2f]' : 'text-white/80 hover:text-[#d32f2f]'}`}>Attendance</Link>
            <Link to="/cells" className={`font-bold text-[12px] uppercase tracking-wide transition-colors py-1 ${isSubpage ? 'text-slate-500 hover:text-[#d32f2f]' : 'text-white/80 hover:text-[#d32f2f]'}`}>Cells</Link>
            <Link to="/about" className={`font-bold text-[12px] uppercase tracking-wide transition-colors py-1 ${isSubpage ? 'text-slate-500 hover:text-[#d32f2f]' : 'text-white/80 hover:text-[#d32f2f]'}`}>About</Link>
            <Link to="/teams" className={`font-bold text-[12px] uppercase tracking-wide transition-colors py-1 ${isSubpage ? 'text-slate-500 hover:text-[#d32f2f]' : 'text-white/80 hover:text-[#d32f2f]'}`}>Teams</Link>
            <Link to="/events" className={`font-bold text-[12px] uppercase tracking-wide transition-colors py-1 ${isSubpage ? 'text-slate-500 hover:text-[#d32f2f]' : 'text-white/80 hover:text-[#d32f2f]'}`}>Events</Link>
          </nav>
          
          <Link to="/social-summit" className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-md transition-all duration-200 transform hover:scale-105 inline-block font-['Verdana',_sans-serif]">Social Summit</Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden z-50 focus:outline-none p-2.5 backdrop-blur-md rounded-full border shadow-md ${
            isSubpage 
              ? 'text-white bg-[#0b192c]/10 border-gray-200/40' 
              : 'text-white bg-white/10 border-white/20'
          }`}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#0b192c] flex flex-col items-center justify-center space-y-6 font-['Verdana',_sans-serif] animate-fade-in">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#d32f2f] text-xl font-bold uppercase tracking-wider">Home</Link>
          <Link to="/attendance" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-[#d32f2f] text-lg font-semibold uppercase tracking-wider">Attendance</Link>
          <Link to="/cells" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-[#d32f2f] text-lg font-semibold uppercase tracking-wider">Cells</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-[#d32f2f] text-lg font-semibold uppercase tracking-wider">About</Link>
          <Link to="/events" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-[#d32f2f] text-lg font-semibold uppercase tracking-wider">Events</Link>
          <Link to="/teams" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-[#d32f2f] text-lg font-semibold uppercase tracking-wider">Teams</Link>
          <Link to="/social-summit" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-10 py-3 rounded-full font-bold text-sm uppercase tracking-widest mt-6">Social Summit</Link>
        </div>
      )}
    </header>
  );
}