import React from 'react';

// =========================================================================
// CONFIGURATION: EVENT DATABASE (Dates removed from past events)
// =========================================================================
const events = [
  {
    title: "NSS Intro Talk",
    date: "29th Sept, 2026",
    venue:"Mac Audi",
    desc: "Fostering civic responsibility, community engagement, and empathetic leadership among first-year students through an introductory talk designed to outline club goals, initiatives, and work life.",
    image: "intro.jpg",
    isUpcoming: true,
    vertical: "Central Events"
  },
  {
    title: "Essay Writing Competition",
    desc: "Encouraging literary expression, creative vocabulary, and critical writing skills among school students through themed essay challenges designed to spark independent thought and structure.",
    image: "essay.jpg",
    isUpcoming: false,
    vertical: "Education"
  },
  {
    title: "Khoj Quiz Competition",
    desc: "An institute-wide science, logical reasoning, and general knowledge quiz competition organized to promote healthy competition. It encourages students from various schools to test their analytical skills, discover new scientific concepts, and foster an active passion for learning beyond their textbooks.",
    image: "khoj.jpg",
    isUpcoming: false,
    vertical: "Education"
  },
  {
    title: "Career Counselling Session",
    desc: "Conducting comprehensive guidance seminars to help high school students explore professional career opportunities. Our coordinators provide in-depth details on competitive examinations like JEE and NEET, offering structured study strategies and personal mentorship to shape their future academic paths.",
    image: "career.jpg",
    isUpcoming: false,
    vertical: "Education"
  },
  {
    title: "Drawing Competition",
    desc: "Organizing themed fine arts and coloring challenges to encourage creative expression among local primary school children. This interactive session provides a clean, welcoming environment for young minds to showcase their imaginations, build fine-motor coordination, and receive exciting educational gifts.",
    image: "drawing.jpg",
    isUpcoming: false,
    vertical: "Education"
  },
  {
    title: "Students Visit to IITR",
    desc: "Inviting underprivileged children from local village schools to tour the historic and prestigious IIT Roorkee campus. Students explore our advanced laboratories, walk through the central library, and interact with researchers, inspiring them to dream big and pursue careers in higher education.",
    image: "visit.jpg",
    isUpcoming: false,
    vertical: "Education"
  },
  {
    title: "Motivation Session at Devbhoomi School",
    desc: "Delivering inspirational seminars and workshops at Devbhoomi International School to guide and motivate rural student youth. We focus on personal growth, self-confidence, time management, and the infinite career options available to them, showing how higher education is a path to social transformation.",
    image: "motivation.jpg",
    isUpcoming: false,
    vertical: "Education"
  },
  {
    title: "School Visit",
    desc: "Routine on-site visits to local primary and middle schools to distribute essential school kits, notebooks, and hygiene items. Our volunteer coordinators conduct basic interactive tutoring classes, promote clean health practices, and identify structural needs of the classrooms.",
    image: "school.jpg",
    isUpcoming: false,
    vertical: "Education"
  }
];
// =========================================================================

export default function EventsPage() {
  const upcomingEvents = events.filter(e => e.isUpcoming);
  const pastEvents = events.filter(e => !e.isUpcoming);

  return (
    <section 
      id="events-page" 
      className="relative bg-slate-50 pt-36 pb-24 px-6 overflow-hidden min-h-screen border-t border-gray-200/50"
    >
      <div className="max-w-[1360px] mx-auto relative z-10 w-full">
        
        {/* --- SECTION 1: UPCOMING EVENTS (Widescreen Highlight) --- */}
        {upcomingEvents.length > 0 && (
          <div className="mb-24">
            <div className="text-left mb-10 pl-4">
              <span className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] block mb-3 font-sans">Active Calendar</span>
              <h2 className="text-2xl md:text-4xl font-black text-[#0b192c] uppercase tracking-[0.05em] font-sans leading-tight">
                New & Upcoming Events
              </h2>
              <div className="h-[3px] w-16 bg-[#d32f2f] mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 gap-8">
              {upcomingEvents.map((ev, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row items-center transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="w-full lg:w-1/2 aspect-video bg-slate-100 overflow-hidden relative">
                    <img 
                      src={`/images/events/${ev.image}`} 
                      alt={ev.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=60";
                      }}
                    />
                  </div>

                  <div className="w-full lg:w-1/2 p-8 md:p-12 text-left space-y-4">
                    <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-widest font-['Verdana']">Upcoming • {ev.vertical}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-[#0b192c] uppercase tracking-wide leading-tight">{ev.title}</h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{ev.desc}</p>
                    <div className="pt-4 flex items-center space-x-3 text-xs font-bold text-slate-400">
                      <span>📅 {ev.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- SECTION 2: PAST EVENTS (3-Column Grid - Dates Removed) --- */}
        <div>
          <div className="text-left mb-12 pl-4">
            <span className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] block mb-3 font-sans">Archives</span>
            <h2 className="text-2xl md:text-4xl font-black text-[#0b192c] uppercase tracking-[0.05em] font-sans leading-tight">
              Past Events
            </h2>
            <div className="h-[3px] w-16 bg-[#d32f2f] mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((ev, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-150 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Image Banner */}
                <div className="h-48 w-full overflow-hidden bg-slate-200 relative">
                  <img 
                    src={`/images/events/${ev.image}`} 
                    alt={ev.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=60";
                    }}
                  />
                </div>

                {/* Details - Dates and dividing borders completely removed */}
                <div className="p-6 flex-1 flex flex-col justify-start text-left">
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-[#d32f2f] uppercase tracking-widest font-['Verdana']">{ev.vertical}</span>
                    <h3 className="text-base font-extrabold text-[#0b192c] uppercase tracking-wide leading-tight">{ev.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{ev.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}