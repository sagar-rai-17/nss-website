// import React from 'react';

// export default function InstagramReels() {
//   const reels = [
//     { id: "DBTfTa6MTsM" },
//     { id: "C52sJKEojY0" },
//     { id: "DAizKKLoQIr" }
//   ];

//   return (
//     <section 
//       id="gallery" 
//       // Flowing seamlessly from the bottom of the Vision section
//       className="relative bg-gradient-to-b from-[#4e1b6d] to-[#3c1053] pb-24 pt-4 px-6 sm:px-12 md:px-24 overflow-hidden border-t border-white/5"
//     >
//       <div className="max-w-[1536px] mx-auto relative z-10 w-full">
        
//         {/* 3-Column Reels Grid - Side-by-side */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
//           {reels.map((reel, index) => (
//             <div 
//               key={index} 
//               // Shorter aspect ratio to force-slice the bottom icons completely out of view
//               className="relative w-full aspect-[9/12.1] bg-[#e6ddff]/20 rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/25 transition-all duration-300 transform hover:-translate-y-1"
//             >
//               {/* Aggressive cropping viewport */}
//               <div className="absolute -top-14 left-0 right-0 h-[152%] overflow-hidden">
//                 <iframe
//                   title={`NSS Reel ${index + 1}`}
//                   src={`https://www.instagram.com/reel/${reel.id}/embed/`}
//                   className="absolute top-0 left-0 w-full h-full border-0"
//                   allowFullScreen={true}
//                   scrolling="no"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
