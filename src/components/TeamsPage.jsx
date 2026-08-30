import React from 'react';

export default function TeamsPage() {
  const teamData = {
    advisor: { name: "Dr. D. P. Singh", role: "Faculty Advisor", branch: "Faculty desk", mail: "d.singh@bt.iitr.ac.in", linkedin: "https://www.linkedin.com/", phone: "", image: "advisor.jpg" },
    leaders: [
      { name: "Kunal Kapoor", role: "General Secretary", branch: "Architecture 4Y", mail: "gs.nssiitr@gmail.com", linkedin: "https://www.linkedin.com/in/kunal-kapoor-55813128b", phone: "6202106996", image: "gensec.jpg" },
      { name: "Priyanshu Maurya", role: "Additional Secretary", branch: "Civil 4Y", mail: "priyanshu_m@ce.iitr.ac.in", linkedin: "", phone: "7877961352", image: "priyanshu.jpg" }
    ],
    verticals: [
      {
        name: "Allied Works",
        js: { name: "Ayushideep", role: "Allied Works Joint Secy", branch: "Allied", mail: "", linkedin: "", phone: "", image: "Ayushideep.jpg" },
        cells: [
          { name: "Charvi", role: "Design Cell Secy", branch: "Civil 3Y", mail: "charvi1@ce.iitr.ac.in", linkedin: "https://www.linkedin.com/in/charvi-singla-49557035b/", phone: "836062232", image: "Charvi_Design.jpg" },
          { name: "Sagar Rai", role: "WebD Cell Secy", branch: "Chemical 3Y", mail: "sagar_r@ch.iitr.ac.in", linkedin: "https://www.linkedin.com/in/sagar-rai-aa29a1320/", phone: "8360101310", image: "Sagar.jpg" },
          { name: "Deepak", role: "Multimedia Cell Secy", branch: "Multimedia", mail: "", linkedin: "", phone: "", image: "Deepak_multimedia.jpg" }
        ]
      },
      {
        name: "Sustainability",
        js: { name: "Aditya Manlawat", role: "Sustainability Joint Secy", branch: "Chemical 3Y", mail: "aditya_m1@ch.iitr.ac.in", linkedin: "https://www.linkedin.com/in/aditya-manlawat-aa97b82b3/", phone: "9829571898", image: "Aditya Manlawat_Sustainability.jpg" },
        cells: [
          { name: "Madhumitha R S", role: "Env & Energy Cell Secy", branch: "BSBE 3Y", mail: "madhumitha_rs@bt.iitr.ac.in", linkedin: "https://www.linkedin.com/in/madhumitha-r-s-a32832332", phone: "8122776106", image: "Madhumitha R S_Environment and Energy.jpg" },
          { name: "Gaura", role: "Health & Hygiene Cell Secy", branch: "MnC 3Y", mail: "gaura1@ma.iitr.ac.in", linkedin: "https://www.linkedin.com/in/gaura-1518ab341", phone: "8295774702", image: "Gaura.jpg" },
          { name: "Naveed Parvaiz", role: "Socio-Innovation Cell Secy", branch: "EE 3Y", mail: "naveed_p@ee.iitr.ac.in", linkedin: "https://www.linkedin.com/in/naveed-parvaiz-49789031a", phone: "9596454093", image: "Naveed_Socio-innovation.jpg" }
        ]
      },
      {
        name: "Education",
        js: { name: "Himanshu Sejwal", role: "Education Joint Secy", branch: "BSBE 3Y", mail: "himanshu_s@bt.iitr.ac.in", linkedin: "https://www.linkedin.com/in/himanshu-sejwal-a2043a345", phone: "9460545265", image: "HimanshuSejwal_JS_Edu.jpg" },
        cells: [
          { name: "Harsh Ninania", role: "JEE Cell Secy", branch: "PNI 3Y", mail: "harsh_n1@me.iitr.ac.in", linkedin: "https://www.linkedin.com/in/harsh-ninania-593899346", phone: "", image: "Harsh_JEECELL.jpg" },
          { name: "Virender", role: "Primary Cell Secy", branch: "Physics 3Y", mail: "virender1@ph.iitr.ac.in", linkedin: "", phone: "", image: "Virender_Primary_Education.jpg" },
          { name: "Krishna Gupta", role: "Navodya Cell Secy", branch: "Chemistry 3Y", mail: "Krishna_g@cy.iitr.ac.in", linkedin: "https://www.linkedin.com/in/krishna-gupta-a0a601313", phone: "8358946698", image: "IMG_9125.jpg" },
          { name: "Sujeet Kumar", role: "RAA Cell Secy", branch: "Civil 3Y", mail: "sujeet_k@ce.iitr.ac.in", linkedin: "https://www.linkedin.com/in/sujeet-kumar-700486335", phone: "9955211217", image: "Sujeet_RAA_Cell.jpg" }
        ]
      },
      {
        name: "Central Event",
        js: { name: "Shivi Purohit", role: "Central Event Joint Secy", branch: "Chemical Sciences 3Y", mail: "", linkedin: "", phone: "", image: "event.jpg" },
        cells: [
          { name: "Neeraj Meena", role: "Event Cell Secy", branch: "Civil 3Y", mail: "neeraj_m@ce.iitr.ac.in", linkedin: "https://www.linkedin.com/in/neeraj-meena-52a353297", phone: "8955725370", image: "Neeraj.jpg" },
          { name: "Vaibhav Sharma", role: "Marketing Cell Secy", branch: "Physics 3Y", mail: "vaibhav_s2@ph.iitr.ac.in", linkedin: "https://www.linkedin.com/in/vaibhav-sharma05a2", phone: "9569672796", image: "Vaibhav_Marketing & Promotions.jpg" },
          { name: "Kaustubh Singh", role: "Documentation Cell Secy", branch: "Meta 3Y", mail: "kaustubh_s@mt.iitr.ac.in", linkedin: "https://www.linkedin.com/in/kaustubh-singh-2a2599332", phone: "7880452310", image: "Kaustubh_Documentation.jpg" },
          { name: "Anshul Verma", role: "Logistics Cell Secy", branch: "Chemical 3Y", mail: "anshul_v@ch.iitr.ac.in", linkedin: "https://www.linkedin.com/in/anshulverma07", phone: "7388465197", image: "anshul_hospitality&logistics.jpg" },
          { name: "Mudassir Ansari", role: "Reports & Doc Cell Secy", branch: "Chemical Sciences 3Y", mail: "Mudassir_a@cy.iitr.ac.in", linkedin: "https://www.linkedin.com/in/mudassir-ansari-801475334", phone: "7905623439", image: "ansari.jpg" }
        ]
      },
      {
        name: "Relation",
        js: { name: "Aditya Kumar", role: "Relation Joint Secy", branch: "Architecture 3Y", mail: "aditya_k@ar.iitr.ac.in", linkedin: "https://www.linkedin.com/in/aditya-kumar-5365612b8", phone: "620760961", image: "aditya_reations.jpg" },
        cells: [
          { name: "Aditya Singh", role: "NGO Relations Cell Secy", branch: "P&I 3Y", mail: "aditya_s1@me.iitr.ac.in", linkedin: "", phone: "9696003505", image: "Aditya_Singh_NGO_Relations.jpg" },
          { name: "Tejaswi Vesangi", role: "CSR & Sponsor Cell Secy", branch: "Civil 3Y", mail: "vesangi_t@ce.iitr.ac.in", linkedin: "https://www.linkedin.com/in/tejaswi-vesangi-b75b54386", phone: "8309144252", image: "Tejaswi_CSR&Sponsorship.jpg" },
          { name: "Chitransh Solanki", role: "Alumni Relation Cell Secy", branch: "Architecture 3Y", mail: "chitransh_s@ar.iitr.ac.in", linkedin: "https://www.linkedin.com/in/chitransh-solanki-2b3549314", phone: "9713309055", image: "Chitransh_Solanki_AlumniRelation.jpg" },
          { name: "Pratibh Raj", role: "Public Relation Cell Secy", branch: "Mech 3Y", mail: "Pratibh_r@me.iitr.ac.in", linkedin: "https://www.linkedin.com/in/pratibh-raj-7aa04b329", phone: "9023450362", image: "Pratibh_public_relations.jpg" }
        ]
      },
      {
        name: "Operations",
        js: { name: "Subhra Jyoti Das", role: "Operations Joint Secy", branch: "PNI 3Y", mail: "subhra_jd@me.iitr.ac.in", linkedin: "", phone: "6901482632", image: "Subhra_Jyoti_Das.jpg" },
        cells: [
          { name: "K Gopal", role: "Management Cell Secy", branch: "BSBE 3Y", mail: "gopal_k@bt.iitr.ac.in", linkedin: "https://www.linkedin.com/in/gopal-k-2a1256388", phone: "6302920980", image: "k.jpg" },
          { name: "Neetu", role: "Volunteer Affairs Cell Secy", branch: "Mech 3Y", mail: "neetu1@me.iitr.ac.in", linkedin: "https://www.linkedin.com/in/neetu-nivesh-90566331a", phone: "9636043002", image: "Neetu_Volunteer_Affairs.jpg" }
        ]
      }
    ]
  };

  // Helper profile card renderer with customized circular portraits and classic telephone icon 📞
  const renderProfileCard = (person) => (
    <div className="bg-white border border-blue-50/50 rounded-xl p-5 shadow-[0_10px_25px_-5px_rgba(0,128,255,0.06)] hover:shadow-[0_15px_35px_-5px_rgba(0,128,255,0.22)] hover:border-blue-400/40 w-full max-w-[250px] text-center flex flex-col items-center justify-between leading-normal relative z-30 transition-all duration-300 transform hover:-translate-y-1">
      
      {/* 1. Circular Portrait Frame */}
      <div className="relative mb-3.5">
        <div className="absolute inset-0 bg-gray-200 rounded-full blur-sm scale-95 opacity-50" />
        <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-slate-50 shadow-md bg-gray-100">
          <img 
            src={`/images/team/${person.image}`} 
            alt={person.name}
            className="h-full w-full object-cover animate-fade-in"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"; }}
          />
        </div>
      </div>

      {/* 2. Typographical Details */}
      <div className="flex-1 w-full">
        <h4 className="text-[#0b192c] font-black text-sm tracking-wide font-sans">{person.name}</h4>
        <span className="block text-[9px] text-gray-400 font-bold uppercase tracking-widest font-mono mt-1">{person.branch}</span>
        <span className="block text-[9px] text-[#d32f2f] font-extrabold uppercase mt-1.5 tracking-widest font-['Verdana']">{person.role}</span>
      </div>

      {/* 3. Action Links with Classic Telephone Receiver icon 📞 */}
      <div className="flex items-center justify-center space-x-3 mt-4 pt-3.5 border-t border-gray-100 w-full font-sans">
        {person.mail && (
          <a href={`mailto:${person.mail}`} className="text-gray-400 hover:text-[#d32f2f] transition-colors" title={person.mail}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h.01m-6.9 0h6.9M3 19h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </a>
        )}
        {person.linkedin && (
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.5-.79-1.5-1.764s.534-1.764 1.5-1.764 1.5.79 1.5 1.764-.534 1.764-1.5 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        )}
        {person.phone && (
          <a href={`tel:${person.phone}`} className="text-gray-400 hover:text-green-600 transition-colors" title={person.phone}>
            {/* Classic Telephone Receiver 📞 */}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 01-6.844-6.844c-.155-.44.011-.926.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.11-1.008H5.036a2.25 2.25 0 00-2.25 2.25v1.372z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section 
      id="teams-directory" 
      className="relative bg-slate-50 pt-36 pb-24 px-6 overflow-hidden min-h-screen border-t border-gray-200/50"
    >
      
      {/* SKEUOMORPHIC TREE VECTOR BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <svg viewBox="0 0 1000 1000" fill="none" stroke="#0b192c" strokeWidth="2" className="w-full h-full max-w-5xl">
          <path d="M500 950 L500 450" />
          <path d="M500 950 Q450 990 350 990 M500 950 Q550 990 650 990 M500 960 Q400 980 300 960 M500 960 Q600 980 700 960" />
          <path d="M500 450 Q300 350 150 300 M500 450 Q700 350 850 300" />
          <path d="M500 550 Q250 500 100 400 M500 550 Q750 500 900 400" />
          <path d="M500 650 Q200 600 80 500 M500 650 Q800 600 920 500" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-left mb-16 pl-4">
          <span className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] block mb-3 font-sans">Organization Tree</span>
          <h2 className="text-2xl md:text-4xl font-black text-[#0b192c] uppercase tracking-[0.05em] font-sans leading-tight">
            Our Active Team
          </h2>
          <div className="h-[3px] w-16 bg-[#d32f2f] mt-4 rounded-full" />
        </div>

        {/* 1. TOP LEVEL: Faculty Advisor */}
        <div className="flex justify-center mb-12">
          {renderProfileCard(teamData.advisor)}
        </div>

        {/* 2. LEVEL 2: General & Additional Secretaries */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
          {teamData.leaders.map((leader, idx) => (
            <div key={idx} className="flex justify-center w-full sm:w-auto">
              {renderProfileCard(leader)}
            </div>
          ))}
        </div>

        {/* 3. LEVEL 3: 6 Verticals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamData.verticals.map((vert, vertIdx) => (
            <div 
              key={vertIdx} 
              // FIXED: Changed 'justify-between' to 'justify-start' to collapse the empty gap in Subhra's operations vertical
              className="bg-gradient-to-b from-white via-white to-blue-50/40 border border-blue-100/50 shadow-lg rounded-3xl p-6 relative flex flex-col items-center justify-start"
            >
              <span className="absolute top-4 left-6 text-xs font-bold text-[#d32f2f] uppercase tracking-widest font-sans">
                {vert.name} Vertical
              </span>

              {/* Joint Secretary Node - Tightened top/bottom margins */}
              <div className="flex flex-col items-center mt-8 mb-4 w-full">
                {renderProfileCard(vert.js)}
                <div className="h-6 w-[2px] bg-gray-200 mt-3" />
                <div className="h-[1px] w-4/5 bg-gray-200" />
              </div>

              {/* Cell Secretaries Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full justify-items-center">
                {vert.cells.map((cell, cellIdx) => (
                  <div key={cellIdx} className="flex flex-col items-center w-full">
                    <div className="h-4 w-[2px] bg-gray-200 mb-2" />
                    {renderProfileCard(cell)}
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