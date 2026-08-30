import React from 'react';

export default function VisionSection() {
  return (
    <section 
      id="vision" 
      className="relative bg-gradient-to-b from-[#0b192c] to-[#112240] py-24 px-6 sm:px-12 md:px-24 overflow-hidden border-t border-white/5"
    >
      {/* Soft glowing accent in the background */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#d32f2f]/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-[1300px] mx-auto relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-left mb-16 pl-4">
          <span className="text-white/60 font-bold text-xs uppercase tracking-[0.2em] block mb-3 font-['Verdana',_sans-serif]">Our Philosophy</span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-[0.05em] font-['Verdana',_sans-serif] leading-tight">
            Messages of Vision & Purpose
          </h2>
          <div className="h-[3px] w-16 bg-white/40 mt-4 rounded-full" />
        </div>

        {/* BOOK CONTAINER WRAPPER (Handles the stacked page effect) */}
        <div className="relative">
          
          {/* Under-page stack layer 2 (Deepest) */}
          <div className="absolute inset-0 translate-x-2 translate-y-3 bg-gray-200/40 border border-gray-300/30 rounded-2xl shadow-md z-0" />
          
          {/* Under-page stack layer 1 (Middle) */}
          <div className="absolute inset-0 translate-x-1 translate-y-1.5 bg-gray-150 border border-gray-200/50 rounded-2xl shadow-lg z-0" />

          {/* THE MAIN ACTIVE OPEN BOOK (Top Layer) */}
          <div className="relative z-10 bg-white border border-gray-300/60 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            
            {/* 3D BOOK SPINE SPINE SHADOWS (Desktop Only) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-full w-12 bg-gradient-to-r from-transparent to-black/[0.07] z-20 pointer-events-none" />
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-12 bg-gradient-to-l from-transparent to-black/[0.07] z-20 pointer-events-none" />
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gray-300/80 z-20 pointer-events-none" />

            {/* ==========================================
                LEFT PAGE: PROFESSOR-IN-CHARGE (PIC)
                ========================================== */}
            <div className="p-8 md:p-14 bg-gradient-to-r from-white via-gray-50/30 to-gray-100/30 flex flex-col items-center justify-center text-center relative z-10">
              
              {/* PIC Portrait Frame */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-200 rounded-full blur-sm scale-95 opacity-60" />
                  <div className="relative h-44 w-44 rounded-full overflow-hidden border-2 border-gray-100 shadow-md bg-gray-50">
                    <img 
                      src="/images/advisor.jpg" 
                      alt="Dr. Dharmendra Pratap Singh" 
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80";
                      }}
                    />
                  </div>
                </div>

                {/* PIC Nameplate */}
                <div className="mt-5 leading-normal">
                  <h3 className="text-[#0b192c] font-normal text-3xl font-['Brush_Script_MT',_Georgia,_cursive] italic tracking-wide">
                    Dr. D. P. Singh
                  </h3>
                  <p className="text-[#d32f2f] text-xs uppercase tracking-[0.15em] font-extrabold mt-2 font-['Verdana',_sans-serif]">
                    Faculty Advisor
                  </p>
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1 font-sans">NSS IIT Roorkee</span>
                </div>
              </div>

              {/* PIC Message Paragraph */}
              <div className="mt-8 relative max-w-md">
                <span className="absolute -top-10 -left-6 text-9xl text-[#d32f2f]/5 font-serif select-none pointer-events-none">“</span>
                <p className="text-[#2d3748] text-sm md:text-base leading-relaxed italic font-medium relative z-10">
                  "Our mission is to bridge the gap between technical academic excellence and grassroots social empathy. I welcome all student volunteers to step forward, contribute their unique skills, and help us design innovative technical solutions to address rural and urban welfare challenges."
                </p>
              </div>

            </div>

            {/* ==========================================
                RIGHT PAGE: GENERAL SECRETARY (GS)
                ========================================== */}
            <div className="p-8 md:p-14 bg-gradient-to-l from-white via-gray-50/30 to-gray-100/30 flex flex-col items-center justify-center text-center relative z-10">
              
              {/* GS Portrait Frame */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-200 rounded-full blur-sm scale-95 opacity-60" />
                  <div className="relative h-44 w-44 rounded-full overflow-hidden border-2 border-gray-100 shadow-md bg-gray-50">
                    <img 
                      src="/images/gensec.jpg" 
                      alt="Kunal Kapoor" 
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80";
                      }}
                    />
                  </div>
                </div>

                {/* GS Nameplate */}
                <div className="mt-5 leading-normal">
                  <h3 className="text-[#0b192c] font-normal text-3xl font-['Brush_Script_MT',_Georgia,_cursive] italic tracking-wide">
                    Kunal Kapoor
                  </h3>
                  <p className="text-[#d32f2f] text-xs uppercase tracking-[0.15em] font-extrabold mt-2 font-['Verdana',_sans-serif]">
                    General Secretary
                  </p>
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1 font-sans">NSS IIT Roorkee</span>
                </div>
              </div>

              {/* GS Message Paragraph */}
              <div className="mt-8 relative max-w-md">
                <span className="absolute -top-10 -left-6 text-9xl text-[#d32f2f]/5 font-serif select-none pointer-events-none">“</span>
                <p className="text-[#2d3748] text-sm md:text-base leading-relaxed italic font-medium relative z-10">
                  "At NSS, IIT Roorkee, we aspire to cultivate a society where individuals embrace social responsibility. We strive to nurture empathetic leaders who, through service and innovation, address societal challenges. Our vision is a community where every member is actively engaged in contributing to collective betterment."
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}