import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Imported Link for routing

export default function CellsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const verticalGroups = [
    {
      verticalName: "Operations",
      slug: "operations",
      themeColor: "text-[#b7791f] border-amber-100 bg-amber-50/20",
      textColor: "text-[#b7791f]",
      cells: [
        { name: "Management Cell", desc: "Handles administrative work, logistics, database tracking, and coordination for NSS IIT Roorkee.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=60" },
        { name: "Volunteer Affairs Cell", desc: "Manages on-campus volunteer registrations, hour tracking, and coordinator allocations.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=60" }
      ]
    },
    {
      verticalName: "Allied Works",
      slug: "allied-works",
      themeColor: "text-[#553c9a] border-purple-100 bg-purple-50/20",
      textColor: "text-[#553c9a]",
      cells: [
        { name: "Design Cell", desc: "Designs creative posters, official banners, social media templates, and digital assets.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=60" },
        { name: "Web Development Cell", desc: "Develops, codes, and maintains the official NSS websites, portals, and digital registration platforms.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=60" },
        { name: "Multimedia Cell", desc: "Covers all NSS campaigns, sessions, and events through professional photography, videography, and aftermovies.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=60" }
      ]
    },
    {
      verticalName: "Sustainability",
      slug: "sustainability",
      themeColor: "text-[#22543d] border-emerald-100 bg-emerald-50/20",
      textColor: "text-[#22543d]",
      cells: [
        { name: "Environment and Energy (CEA) Cell", desc: "Spreads critical awareness about climate change, resource sustainability, and executes clean green campus drives.", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=60" },
        { name: "Health and Hygiene Cell", desc: "Promotes clean water, hygiene guidelines, sanitation awareness, and healthy lifestyle/fitness initiatives.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=60" },
        { name: "Socio-Innovation Cell", desc: "Works directly on rural development projects, technical farm innovations, and farmer welfare awareness.", image: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=400&q=60" },
        { name: "Women Empowerment Cell", desc: "Raises active awareness on gender equality, safety, and women-centric social/health issues.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=60" }
      ]
    },
    {
      verticalName: "Education",
      slug: "education",
      themeColor: "text-[#2b6cb0] border-blue-100 bg-blue-50/20",
      textColor: "text-[#2b6cb0]",
      cells: [
        { name: "JEE Cell", desc: "Provides free, structured academic coaching, study materials, and tests to underprivileged IIT-JEE aspirants.", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=60" },
        { name: "Primary Education Cell", desc: "Offers free foundational tutoring in core subjects to underprivileged students of Classes 6–10.", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=60" },
        { name: "Navodaya Cell", desc: "Prepares rural students specifically for the Jawahar Navodaya Vidyalaya entrance examinations.", image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&q=60" },
        { name: "RAA Cell", desc: "Encourages scientific curiosity, practical experiments, and mathematical logic in government schools under Rashtriya Avishkar Abhiyan.", image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=400&q=60" }
      ]
    },
    {
      verticalName: "Central Event",
      slug: "central-event",
      themeColor: "text-[#d32f2f] border-red-100 bg-red-50/20",
      textColor: "text-[#d32f2f]",
      cells: [
        { name: "Event Cell", desc: "Coordinates, schedules, and manages major NSS events, guest lectures, and conclaves smoothly.", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=60" },
        { name: "Marketing & Promotions Cell", desc: "Promotes NSS social activities, campaigns, and coordinates publicity for the National Social Summit.", image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=400&q=60" },
        { name: "Documentation (Editorial) Cell", desc: "Maintains official written records, drafts press releases, compiles session reports, and handles content updates.", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=60" },
        { name: "Logistics Cell", desc: "Manages material procurement, venue bookings, physical setups, and hospitality for campaigns.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=60" }
      ]
    },
    {
      verticalName: "Relation",
      slug: "relation",
      themeColor: "text-[#702459] border-pink-100 bg-pink-50/20",
      textColor: "text-[#702459]",
      cells: [
        { name: "NGO Relations Cell", desc: "Builds close collaborations and drives joint service projects with external non-governmental organizations.", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=60" },
        { name: "CSR & Sponsorship Cell", desc: "Builds collaborations with companies, corporate sponsors, and government agencies to secure funds for CSR initiatives.", image: "https://images.unsplash.com/photo-1712903276864-79723b184ffa?auto=format&fit=crop&w=400&q=60" },
        { name: "Alumni Relation Cell", desc: "Connects with graduated NSS IITR alumni for continuous mentorship, career guidance, and program sponsorship.", image: "https://plus.unsplash.com/premium_photo-1682974406959-7f7202c932b0?auto=format&fit=crop&w=400&q=60" },
        { name: "Public Relation Cell", desc: "Coordinates public affairs, campus-wide relations, news coverage, and institutional outreach.", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=60" }
      ]
    }
  ];

  return (
    <section 
      id="cells-directory" 
      className="relative bg-slate-50 pt-36 pb-24 px-6 overflow-hidden min-h-screen border-t border-gray-200/50"
    >
      <div className="max-w-[1360px] mx-auto relative z-10 w-full">
        
        {/* Dynamic Vertical Groups Grid */}
        <div className="space-y-16">
          {verticalGroups.map((group, groupIdx) => (
            <div 
              id={group.slug}
              key={groupIdx} 
              className="scroll-mt-32 border border-gray-200/60 rounded-3xl p-8 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.02)]"
            >
              {/* Header block with vertical color accents */}
              <div className="flex items-center space-x-3 mb-8 border-b border-gray-100 pb-5">
                <h3 className={`text-2xl font-black uppercase tracking-wide ${group.textColor}`}>{group.verticalName}</h3>
              </div>

              {/* Grid of Cells inside this Mother Vertical */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
                {group.cells.map((cell, cellIdx) => (
                  <div 
                    key={cellIdx} 
                    className="bg-slate-50/50 border border-gray-150/60 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-0.5 flex flex-col justify-between"
                  >
                    {/* Header Image Banner for each specific cell */}
                    <div className="h-36 w-full overflow-hidden bg-slate-200 relative">
                      <img 
                        src={cell.image} 
                        alt={`${cell.name} Banner`} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-[#0b192c] font-extrabold text-sm tracking-wide uppercase mb-3 leading-tight">{cell.name}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{cell.desc}</p>
                      </div>
                      
                      {/* UPDATED: Navigates directly to your separate Events Page */}
                      <Link 
                        to="/events" 
                        className="text-[#d32f2f] hover:text-[#b71c1c] font-bold text-[10px] uppercase tracking-widest mt-6 flex items-center space-x-1.5 cursor-pointer transition-colors"
                      >
                        <span>View Activities</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// import React, { useEffect } from 'react';
// import { useLocation, Link  } from 'react-router-dom';

// export default function CellsPage() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.replace('#', '');
//       const element = document.getElementById(id);
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }, 300);
//       }
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [location]);

//   const verticalGroups = [
//     {
//       verticalName: "Operations",
//       slug: "operations",
//       themeColor: "text-[#b7791f] border-amber-100 bg-amber-50/20",
//       textColor: "text-[#b7791f]",
//       cells: [
//         { name: "Management Cell", desc: "Handles administrative work, logistics, database tracking, and coordination for NSS IIT Roorkee.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80" },
//         { name: "Volunteer Affairs Cell", desc: "Manages on-campus volunteer registrations, hour tracking, and coordinator allocations.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" }
//       ]
//     },
//     {
//       verticalName: "Allied Works",
//       slug: "allied-works",
//       themeColor: "text-[#553c9a] border-purple-100 bg-purple-50/20",
//       textColor: "text-[#553c9a]",
//       cells: [
//         { name: "Design Cell", desc: "Designs creative posters, official banners, social media templates, and digital assets.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80" },
//         { name: "Web Development Cell", desc: "Develops, codes, and maintains the official NSS websites, portals, and digital registration platforms.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" },
//         { name: "Multimedia Cell", desc: "Covers all NSS campaigns, sessions, and events through professional photography, videography, and aftermovies.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=80" }
//       ]
//     },
//     {
//       verticalName: "Sustainability",
//       slug: "sustainability",
//       themeColor: "text-[#22543d] border-emerald-100 bg-emerald-50/20",
//       textColor: "text-[#22543d]",
//       cells: [
//         { name: "Environment and Energy (CEA) Cell", desc: "Spreads critical awareness about climate change, resource sustainability, and executes clean green campus drives.", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80" },
//         { name: "Health and Hygiene (WASH) Cell", desc: "Promotes clean water, hygiene guidelines, sanitation awareness, and healthy lifestyle/fitness initiatives.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80" },
//         { name: "Socio-Innovation (Pragati) Cell", desc: "Works directly on rural development projects, technical farm innovations, and farmer welfare awareness.", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80" },
//         { name: "Women Empowerment Cell", desc: "Raises active awareness on gender equality, safety, and women-centric social/health issues.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" }
//       ]
//     },
//     {
//       verticalName: "Education",
//       slug: "education",
//       themeColor: "text-[#2b6cb0] border-blue-100 bg-blue-50/20",
//       textColor: "text-[#2b6cb0]",
//       cells: [
//         { name: "JEE Cell", desc: "Provides free, structured academic coaching, study materials, and tests to underprivileged IIT-JEE aspirants.", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80" },
//         { name: "Primary Education Cell", desc: "Offers free foundational tutoring in core subjects to underprivileged students of Classes 6–10.", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80" },
//         { name: "Navodaya Cell", desc: "Prepares rural students specifically for the Jawahar Navodaya Vidyalaya entrance examinations.", image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&q=80" },
//         // UPDATED: Replaced website link with raw direct image source URL
//         { name: "RAA Cell", desc: "Encourages scientific curiosity, practical experiments, and mathematical logic in government schools under Rashtriya Avishkar Abhiyan.", image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=400&q=60" }
//       ]
//     },
//     {
//       verticalName: "Central Event",
//       slug: "central-event",
//       themeColor: "text-[#d32f2f] border-red-100 bg-red-50/20",
//       textColor: "text-[#d32f2f]",
//       cells: [
//         { name: "Event Cell", desc: "Coordinates, schedules, and manages major NSS events, guest lectures, and conclaves smoothly.", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80" },
//         { name: "Marketing & Promotions Cell", desc: "Promotes NSS social activities, campaigns, and coordinates publicity for the National Social Summit.", image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=400&q=80" },
//         { name: "Documentation (Editorial) Cell", desc: "Maintains official written records, drafts press releases, compiles session reports, and handles content updates.", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80" },
//         { name: "Logistics Cell", desc: "Manages material procurement, venue bookings, physical setups, and hospitality for campaigns.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80" }
//       ]
//     },
//     {
//       verticalName: "Relation",
//       slug: "relation",
//       themeColor: "text-[#702459] border-pink-100 bg-pink-50/20",
//       textColor: "text-[#702459]",
//       cells: [
//         { name: "NGO Relations Cell", desc: "Builds close collaborations and drives joint service projects with external non-governmental organizations.", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80" },
//         { name: "CSR & Sponsorship Cell", desc: "Builds collaborations with companies, corporate sponsors, and government agencies to secure funds for CSR initiatives.", image: "https://images.unsplash.com/photo-1712903276864-79723b184ffa?auto=format&fit=crop&w=400&q=60" },
//         { name: "Alumni Relation Cell", desc: "Connects with graduated NSS IITR alumni for continuous mentorship, career guidance, and program sponsorship.", image: "https://plus.unsplash.com/premium_photo-1682974406959-7f7202c932b0?auto=format&fit=crop&w=400&q=60" },
//         { name: "Public Relation Cell", desc: "Coordinates public affairs, campus-wide relations, news coverage, and institutional outreach.", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80" }
//       ]
//     }
//   ];

//   return (
//     <section 
//       id="cells-directory" 
//       className="relative bg-slate-50 pt-36 pb-24 px-6 overflow-hidden min-h-screen border-t border-gray-200/50"
//     >
//       <div className="max-w-[1360px] mx-auto relative z-10 w-full">
        
//         {/* Dynamic Vertical Groups Grid */}
//         <div className="space-y-16">
//           {verticalGroups.map((group, groupIdx) => (
//             <div 
//               id={group.slug}
//               key={groupIdx} 
//               className="scroll-mt-32 border border-gray-200/60 rounded-3xl p-8 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.02)]"
//             >
//               {/* Header block with vertical color accents */}
//               <div className="flex items-center space-x-3 mb-8 border-b border-gray-100 pb-5">
//                 <h3 className={`text-2xl font-black uppercase tracking-wide ${group.textColor}`}>{group.verticalName}</h3>
//               </div>

//               {/* Grid of Cells inside this Mother Vertical */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
//                 {group.cells.map((cell, cellIdx) => (
//                   <div 
//                     key={cellIdx} 
//                     className="bg-slate-50/50 border border-gray-150/60 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-0.5 flex flex-col justify-between"
//                   >
//                     {/* Header Image Banner for each specific cell */}
//                     <div className="h-36 w-full overflow-hidden bg-slate-200 relative">
//                       <img 
//                         src={cell.image} 
//                         alt={`${cell.name} Banner`} 
//                         className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                         loading="lazy"
//                       />
//                     </div>

//                     <div className="p-6 flex-1 flex flex-col justify-between">
//                       <div>
//                         <h4 className="text-[#0b192c] font-extrabold text-sm tracking-wide uppercase mb-3 leading-tight">{cell.name}</h4>
//                         <p className="text-slate-500 text-xs leading-relaxed">{cell.desc}</p>
//                       </div>
                      
//                       <div className="text-[#d32f2f] font-bold text-[10px] uppercase tracking-widest mt-6 flex items-center space-x-1.5 cursor-pointer">
//                         <span>View Activities</span>
//                         <span>→</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }