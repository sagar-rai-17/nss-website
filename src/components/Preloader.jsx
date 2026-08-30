import React from 'react';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0b192c] flex flex-col items-center justify-center">
      {/* Container with overflow-hidden to crop out JPEG corners */}
      <div className="relative h-24 w-24 rounded-full bg-white flex items-center justify-center p-2 border border-white/20 shadow-2xl overflow-hidden animate-spin [animation-duration:3s]">
        <img 
          src="/images/nss-logo.jpg" 
          alt="Loading" 
          className="h-full w-full object-cover rounded-full" 
        />
      </div>
      <span className="mt-8 text-white/50 text-xs font-bold uppercase tracking-[0.25em] animate-pulse font-sans">
        Loading
      </span>
    </div>
  );
}