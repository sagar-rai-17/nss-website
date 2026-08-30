import React from 'react';

export default function PartnersTicker() {
  const partners = [
    { name: "FPA India", file: "fpaindia.jpg" },
    { name: "ICMR", file: "icmr.jpg" },
    { name: "CDDEP", file: "cddep.jpg" },
    { name: "Devfolio", file: "devfolio.jpg" },
    { name: "World Health Organization", file: "who.jpg" },
    { name: "MakeRoom", file: "makeroom.jpg" },
    { name: "NITI Aayog", file: "nitiaayog.jpg" },
    { name: "Namaste", file: "namaste.jpg" },
    { name: "Aasra", file: "aasra.jpg" },
    { name: "India Donates", file: "indiadonates.jpg" },
    { name: "Uttarakhand Government", file: "uttarakhand.jpg" }
  ];

  const trippledPartners = [...partners, ...partners, ...partners];

  return (
    <section 
      id="partners" 
      className="relative py-14 overflow-hidden w-full bg-gradient-to-b from-[#0b192c] to-[#112240]"
    >
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-track {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-track:hover {
          animation-play-state: paused;
        }
        .partner-logo-makeroom {
          object-position: left center !important;
        }
        
        /* THE SHARPNESS HACK: Optimizes contrast and forces GPU rendering to prevent blurriness */
        .sharp-logo {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
        }
      `}</style>

      <div className="w-full mx-auto px-0 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-white/95 text-3xl font-['Brush_Script_MT',_Georgia,_cursive] italic tracking-wider">
            The bonds we share
          </h2>
        </div>

        {/* Slider Wrapper with Frosted Glass Effect */}
        <div className="relative w-full overflow-hidden py-6 group">
          
          <div className="absolute inset-y-0 left-0 right-0 bg-white/5 backdrop-blur-md border-y border-white/10"></div>

          {/* Edge fade mask */}
          <div 
            className="w-full relative z-10"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
            }}
          >
            <div className="animate-scroll-track items-center" style={{ gap: '6rem' }}>
              {trippledPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center h-36 w-72 shrink-0" 
                >
                  <img 
                    src={`/images/partners/${partner.file}`} 
                    alt={`${partner.name} Logo`}
                    // Added "sharp-logo" class to force high-quality browser rendering
                    className={`max-h-full max-w-full object-contain sharp-logo transition-all duration-500 group-hover:opacity-80 hover:!opacity-100 ${partner.name === "MakeRoom" ? "partner-logo-makeroom" : ""}`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}