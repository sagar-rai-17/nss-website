import React from 'react';

export default function EsteemedGuests() {
  const guests = [
    {
      name: "Dr. Kiran Bedi",
      role: "Retired IPS Officer & Former LG",
      organization: "Govt of Puducherry",
      image: "kiran.jpg"
    },
    {
      name: "Ashneer Grover",
      role: "Entrepreneur & Co-founder",
      organization: "BharatPe",
      image: "ashneer.jpg"
    },
    {
      name: "Major D.P. Singh",
      role: "Kargil War veteran",
      organization: "Indian Army",
      image: "dp.jpg"
    },
    {
      name: "Shri Pushkar Singh Dhami",
      role: "Honorable Chief Minister",
      organization: "Uttarakhand State",
      image: "pushkar.jpg"
    }
  ];

  return (
    <section 
      id="guests" 
      // Background updated to match Deep Navy Theme
      className="relative bg-gradient-to-b from-[#112240] to-[#0b192c] py-24 px-6 sm:px-12 md:px-24 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16 pl-4">
          <span className="text-white/60 font-bold text-xs uppercase tracking-[0.2em] block mb-3 font-['Verdana',_sans-serif]">Distinguished Visitors</span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-[0.05em] font-['Verdana',_sans-serif] leading-tight">
            Our Esteemed Guests
          </h2>
          <div className="h-[3px] w-16 bg-white/40 mt-4 rounded-full" />
        </div>

        {/* Symmetrical 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {guests.map((guest, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center animate-fade-in"
            >
              
              {/* Custom Blue Quote/Silhouette Portrait Frame */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                
                <div className="absolute inset-0 flex items-center justify-start z-0">
                  <div className="h-full w-6 bg-[#0080d8] rounded-full absolute left-2 top-0" />
                  <div className="h-44 w-44 bg-[#009bf2]/20 rounded-full absolute left-3 top-2 blur-[2px]" />
                  <div className="h-40 w-40 bg-[#0080d8] rounded-full absolute left-4 top-4" />
                </div>

                <div className="relative z-10 h-36 w-36 rounded-full overflow-hidden border-2 border-white shadow-lg bg-gray-100">
                  <img 
                    src={`/images/guests/${guest.image}`} 
                    alt={guest.name}
                    className="h-full w-full object-cover transition-all duration-300"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80";
                    }}
                  />
                </div>

              </div>

              {/* Guest Information */}
              <div className="mt-6 leading-normal flex-1">
                <h3 className="text-[#0b192c] font-extrabold text-base tracking-wide font-sans">
                  {guest.name}
                </h3>
                <p className="text-gray-500 text-xs font-semibold mt-2">
                  {guest.role}
                </p>
                <span className="block text-[10px] text-[#d32f2f] font-bold uppercase tracking-widest mt-2.5 font-['Verdana']">
                  {guest.organization}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}