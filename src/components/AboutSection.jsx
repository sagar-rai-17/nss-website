import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  const verticals = [
    { name: "Sustainability", slug: "sustainability", desc: "Environmental conservation and green campus drives." },
    { name: "Operations", slug: "operations", desc: "Logistics, database tracking, and volunteer management." },
    { name: "Allied", slug: "allied-works", desc: "NGO partnerships, blood-donation coordinates, and welfare schemes." },
    { name: "Central Events", slug: "central-event", desc: "Organizing mass-awareness campaigns, summits, and drives." },
    { name: "Education", slug: "education", desc: "Primary tutoring, JEE mentorship, and rural school aid." },
    { name: "Relations", slug: "relation", desc: "PR, campus integration, and alumni correspondence." }
  ];

  // Core metrics from your official platform screenshot
  const metrics = [
    { label: "Total Members", val: "10,234", sub: "Registered AY 25-26", badge: "+12% YoY" },
    { label: "Active Members", val: "8,658", sub: "Score ≥ 50", badge: "84.6%" },
    { label: "Avg Attendance", val: "83.6%", sub: "Across all events", badge: "+6% vs last yr" },
    { label: "Volunteer Hours", val: "11,430", sub: "Total logged", badge: "1,905 avg/vertical" },
    { label: "Total Events", val: "214", sub: "Completed this year", badge: "73 upcoming" },
    { label: "Certs Issued", val: "9,841", sub: "Auto-generated", badge: "100% automated" },
    { label: "Tasks Completed", val: "3,276", sub: "92% on time", badge: "148 pending" },
    { label: "Recruitment", val: "1,840", sub: "Applications this cycle", badge: "62% selection rate" }
  ];

  // Mapped to 6 custom defined SVG gradient IDs and hex fill colors
  const performances = [
    { name: "Central Events", pct: 94, gradId: "grad-central", fill: "#d32f2f" },
    { name: "Operations", pct: 91, gradId: "grad-operations", fill: "#b7791f" },
    { name: "Education", pct: 84, gradId: "grad-education", fill: "#2b6cb0" },
    { name: "Allied Works", pct: 82, gradId: "grad-allied", fill: "#553c9a" },
    { name: "Sustainability", pct: 79, gradId: "grad-sustainability", fill: "#22543d" },
    { name: "Relations", pct: 76, gradId: "grad-relations", fill: "#702459" }
  ];

  const modules = [
    { name: "RBAC", status: "live" },
    { name: "QR Attendance", status: "live" },
    { name: "Cert automation", status: "live" },
    { name: "Task manager", status: "live" },
    { name: "Event module", status: "live" },
    { name: "Member portal", status: "live" },
    { name: "Notifications", status: "live" },
    { name: "Power BI", status: "live" },
    { name: "Alumni mgmt", status: "building" },
    { name: "Predictive ML", status: "building" },
    { name: "Recruitment AI", status: "building" }
  ];

  return (
    <section 
      id="about" 
      className="relative bg-white pt-32 pb-24 px-6 sm:px-12 md:px-24 overflow-hidden min-h-screen border-t border-gray-200/50"
    >
      {/* CUSTOM GRADIENT DEFINITIONS FOR SVG DONUTS */}
      <svg className="absolute w-0 h-0 pointer-events-none" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="grad-central" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d32f2f" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <linearGradient id="grad-operations" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b7791f" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          <linearGradient id="grad-education" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2b6cb0" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="grad-allied" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="grad-sustainability" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22543d" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="grad-relations" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#702459" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1360px] mx-auto relative z-10 w-full">
        
        {/* --- PART 1: INTRODUCTION --- */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 mb-24 border-b border-gray-100 pb-16">
          
          {/* Left Column: Clean Intro Text */}
          <div className="text-left flex-1">
            <span className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] block mb-3 font-sans">Introduction</span>
            <h2 className="text-2xl md:text-4xl font-black text-[#0b192c] uppercase tracking-[0.05em] font-sans leading-tight">
              What is NSS IIT Roorkee?
            </h2>
            <div className="h-[3px] w-16 bg-[#d32f2f] mt-4 rounded-full" />
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-6 max-w-3xl font-sans font-medium">
              NSS IIT Roorkee is the official chapter of the National Service Scheme (NSS), an initiative under the Ministry of Youth Affairs & Sports, Government of India. Our primary goal is to engage and motivate IIT Roorkee students in nation-building activities that contribute to the social welfare of the community. We strive to foster a sense of social responsibility and encourage students to make meaningful contributions towards the development of society.
            </p>
          </div>

          {/* Right Column: Large NSS Logo */}
          <div className="shrink-0">
            <div className="relative h-44 w-44 md:h-52 md:w-52 rounded-full bg-slate-50 flex items-center justify-center p-2 border border-gray-200 shadow-xl overflow-hidden">
              <img 
                src="/images/nss-logo.jpg" 
                alt="NSS Logo" 
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>

        </div>

        {/* --- PART 2: THE THREE PILLARS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 font-sans text-left">
          
          <div 
            className="relative border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col justify-start overflow-hidden bg-cover bg-center h-80 sm:h-auto min-h-[280px]"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80')` }}
          >
            <div className="absolute inset-0 bg-[#0b192c]/75 z-0" />
            <h3 className="relative z-10 text-white font-extrabold text-lg tracking-wide uppercase mb-4">Who we are?</h3>
            <p className="relative z-10 text-slate-200 text-sm leading-relaxed font-medium">
              NSS, IIT Roorkee, is a vibrant student community dedicated to creating a positive societal impact. Grounded in service, community development, and social awareness, we are a diverse group united in the pursuit of fostering volunteerism. We believe in leveraging education for transformative change.
            </p>
          </div>

          <div 
            className="relative border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col justify-start overflow-hidden bg-cover bg-center h-80 sm:h-auto min-h-[280px]"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80')` }}
          >
            <div className="absolute inset-0 bg-[#0b192c]/75 z-0" />
            <h3 className="relative z-10 text-white font-extrabold text-lg tracking-wide uppercase mb-4">What we do?</h3>
            <p className="relative z-10 text-slate-200 text-sm leading-relaxed font-medium">
              With a vision to spread social harmony across & evolve student youth as accomplished social leaders & administrators, NSS IIT Roorkee is an organization of over 1000 active & dedicated members having a common goal of ‘Striving for the betterment of our motherland by fully indulging ourselves in the service of mankind.
            </p>
          </div>

          <div 
            className="relative border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col justify-start overflow-hidden bg-cover bg-center h-80 sm:h-auto min-h-[280px]"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80')` }}
          >
            <div className="absolute inset-0 bg-[#0b192c]/75 z-0" />
            
            <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-auto text-white opacity-[0.20] pointer-events-none z-10">
              <rect x="15" y="8" width="70" height="46" rx="0.5" />
              <path d="M15 8 L30 30 L15 54 M85 8 L70 30 L85 54" />
              <path d="M15 17h70M15 26h70M15 35h70M15 44h70" strokeDasharray="1 1" />
              <path d="M25 8v46M35 8v46M45 8v46M55 8v46M65 8v46M75 8v46" strokeDasharray="1 1" />
            </svg>

            <h3 className="relative z-20 text-white font-extrabold text-lg tracking-wide uppercase mb-4">Our Goals</h3>
            <p className="relative z-20 text-slate-200 text-sm leading-relaxed font-medium">
              NSS, IIT Roorkee, strives to create a positive impact by engaging with local communities, empowering individuals through skill development, and raising awareness on social issues. Our multifaceted approach aims to foster a culture of empathy, responsibility, and social change among students, creating socially conscious leaders.
            </p>
          </div>

        </div>

        {/* --- PART 3: NSS LIVE DIGITAL PLATFORM DASHBOARD --- */}
        <div className="bg-white border border-gray-200/60 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] mb-24 font-sans text-left">
          
          {/* Dashboard Header */}
          <div className="border-b border-gray-100 pb-6 mb-8">
            <h3 className="text-xl md:text-2xl font-black text-[#0b192c] tracking-tight">NSS Digital Platform</h3>
            <div className="flex items-center space-x-2 mt-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Live Activity Tracker • AY 2025-26</span>
            </div>
          </div>

          {/* Grid of 8 Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((m, idx) => (
              <div key={idx} className="bg-slate-50/50 border border-gray-100 p-5 rounded-xl">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">{m.label}</span>
                <span className="block text-2xl font-extrabold text-[#0b192c] mt-1">{m.val}</span>
                <span className="block text-[10px] text-gray-400 mt-1">{m.sub}</span>
                <span className="inline-block mt-2 text-[9px] font-bold text-nss-red bg-red-50 px-2 py-0.5 rounded-full">{m.badge}</span>
              </div>
            ))}
          </div>

          {/* Split Performance & Modules Column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left side: Upgraded 3x2 Donut Progress Chart Grid */}
            <div>
              <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-8">Vertical Performance</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6">
                {performances.map((p, idx) => {
                  const circumference = 100.5;
                  const strokeOffset = circumference - (p.pct / 100) * circumference;

                  return (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <div className="relative w-20 h-20 flex items-center justify-center animate-fade-in">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="40" cy="40" r="16" fill={p.fill} fillOpacity="0.10" />
                          <circle cx="40" cy="40" r="16" stroke="#f1f5f9" strokeWidth="7" fill="transparent" />
                          <circle 
                            cx="40" 
                            cy="40" 
                            r="16" 
                            stroke={`url(#${p.gradId})`} 
                            strokeWidth="7" 
                            fill="transparent" 
                            strokeDasharray={circumference} 
                            strokeDashoffset={strokeOffset} 
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="text-xs font-black text-[#0b192c]">{p.pct}%</span>
                      </div>
                      <span className="block mt-3 text-[11px] font-bold text-gray-700 leading-tight">{p.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side: Module Statuses */}
            <div>
              <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-6">Module Status</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {modules.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-slate-50/30">
                    <span className="text-xs font-bold text-gray-700">{m.name}</span>
                    <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      m.status === "live" ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-600"
                    }`}>
                      {m.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* --- PART 4: OUR VERTICALS --- */}
        <div className="text-left mb-12 pl-4">
          <span className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] block mb-3 font-sans">Structure</span>
          <h2 className="text-2xl md:text-4xl font-black text-[#0b192c] uppercase tracking-[0.05em] font-sans leading-tight">
            Our Verticals
          </h2>
          <div className="h-[3px] w-16 bg-[#d32f2f] mt-4 rounded-full" />
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-['Verdana',_sans-serif]">
          {verticals.map((vert, index) => (
            <Link 
              key={index}
              to={`/cells#${vert.slug}`}
              className="bg-slate-50 hover:bg-slate-100 border border-gray-200 rounded-full py-5 px-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between group"
            >
              <span className="text-[#0b192c] font-black text-sm uppercase tracking-wider">
                {vert.name}
              </span>
              <span className="text-[#d32f2f] font-bold text-lg transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}