import React from 'react';

export default function SocialSummit() {
  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/nssiitr/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/nssiitr/", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.5-.79-1.5-1.764s.534-1.764 1.5-1.764 1.5.79 1.5 1.764-.534 1.764-1.5 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { name: "YouTube", url: "https://www.youtube.com/@nationalserviceschemeiitro4733", icon: "M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
    { name: "X", url: "https://x.com/NSS_IITR", icon: "M18.244 2.25h3.308l-7.227 7.56 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.09L1.35 2.25h6.91l4.772 6.311L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" }
  ];

  return (
    <section className="relative bg-slate-50 min-h-screen py-32 px-6 flex flex-col items-center justify-center text-center">
      {/* Cursive Signature Coming Soon Heading */}
      <h1 className="text-5xl md:text-7xl font-normal text-[#d32f2f] font-['Brush_Script_MT',_Georgia,_cursive] italic tracking-wide">
        COMING SOON!!! ☺
      </h1>
      
      {/* Brackets Subheading */}
      <span className="block mt-6 text-slate-400 font-extrabold text-xs uppercase tracking-[0.25em] font-sans">
        (Stay Connected)
      </span>

      {/* Large Gold Circle Social Icons */}
      <div className="flex items-center justify-center space-x-6 mt-10">
        {socialLinks.map((link, idx) => (
          <a 
            key={idx}
            href={link.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="h-16 w-16 rounded-full bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 text-amber-700 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
            title={link.name}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d={link.icon} />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}