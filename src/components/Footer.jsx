import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact" 
      // Background updated to match solid Deep Navy Theme
      className="relative bg-[#112240] text-white pt-16 pb-8 px-6 sm:px-12 md:px-24 overflow-hidden border-t border-white/10"
    >
      <div className="max-w-[1360px] mx-auto relative z-10 w-full">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mb-12">
          
          {/* LEFT COLUMN: Contact Details */}
          <div className="flex flex-col space-y-8">
            
            {/* Logo and Brand Title */}
            <div className="flex items-center space-x-3.5">
              <img 
                src="/images/nss-logo.jpg" 
                alt="NSS Logo" 
                className="h-12 w-12 object-contain" 
              />
              <div className="leading-tight">
                <span className="block text-[10px] font-semibold tracking-widest text-white/70 uppercase leading-none">National Service Scheme</span>
                <h1 className="block text-lg font-black tracking-wider text-white uppercase mt-1 leading-none">IIT Roorkee</h1>
              </div>
            </div>

            {/* Address Details with White Accent Line */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-5 w-[3px] bg-white/40 rounded-full" />
                <h2 className="text-base font-bold text-white uppercase tracking-wider">Contact Us</h2>
              </div>
              <p className="text-white/90 text-sm leading-relaxed font-sans font-medium pl-4">
                NSS Office,<br />
                2nd floor, Multi Activity Centre,<br />
                IIT Roorkee, Roorkee-247667<br />
                Uttarakhand, IN
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Google Maps & Social Handles */}
          <div className="flex flex-col space-y-6 items-start md:items-end">
            
            {/* Google Map of MAC IIT Roorkee */}
            <div className="w-full max-w-[460px] aspect-[2/1] rounded-lg overflow-hidden border border-white/15 shadow-md">
              <iframe
                title="NSS IIT Roorkee Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.137357064375!2d77.8962635!3d29.863242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb7bb2c813739%3A0xbcf70da3e33f389a!2sMulti%20Activity%20Centre!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* Social Media Link Icons with Transparent White Circular Backgrounds */}
            <div className="flex items-center space-x-4 w-full max-w-[460px] justify-start md:justify-end pt-2">
              <span className="text-white/80 font-bold text-xs uppercase tracking-wider font-['Verdana']">Stay connected with us:</span>
              <div className="flex space-x-2.5">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/nssiitr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-8 w-8 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/nssiitr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-8 w-8 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.5-.79-1.5-1.764s.534-1.764 1.5-1.764 1.5.79 1.5 1.764-.534 1.764-1.5 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@nationalserviceschemeiitro4733" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-8 w-8 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                {/* X */}
                <a 
                  href="https://x.com/NSS_IITR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-8 w-8 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full flex items-center justify-center transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 7.56 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.09L1.35 2.25h6.91l4.772 6.311L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright line with divider */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-white/80 text-xs tracking-wider">
            Copyright © 2026 NSS IITR. All Rights Reserved.
          </span>
        </div>

      </div>

      {/* STATEFUL FLOATING SCROLL-TO-TOP BUTTON */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-white/15 backdrop-blur-md text-white h-12 w-12 rounded-full border border-white/20 shadow-lg flex items-center justify-center hover:bg-white hover:text-[#d32f2f] hover:border-white/30 transition-all duration-200 active:scale-95 group focus:outline-none"
          title="Scroll to Top"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </footer>
  );
}