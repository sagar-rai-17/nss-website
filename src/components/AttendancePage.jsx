import React, { useState, useEffect } from 'react';

// =========================================================================
// CONFIGURATION: LINK YOUR OFFICIAL GOOGLE FORM & SPREADSHEET
// =========================================================================
const GOOGLE_FORM_ID = "1FAIpQLSdh_SHyE3dQcoidbqOMK5-RILr2ir2QXlFKtlKFTd3yPQn6eQ"; 

// Replace this with your actual Google Sheet URL
const MASTER_GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1Jc5Gl9Wsh_OTguCMkbq5YVBltCAIw67IWiVjkAN_3yU/edit?resourcekey#gid=947626291";

const FORM_ENTRY_IDS = {
  eventName: "entry.1687747883",
  date: "entry.463060295",
  venue: "entry.1195225696",
  vertical: "entry.710042281"
};
// =========================================================================

export default function AttendancePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setError] = useState('');

  // Form Inputs
  const [name, setName] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [position, setPosition] = useState('GENERAL SECY');
  const [vertical, setVertical] = useState('');
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [venue, setVenue] = useState('');

  // Event History Database States
  const [eventHistory, setEventHistory] = useState(() => {
    const savedHistory = localStorage.getItem('nss_event_history');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  
  const [activeEvent, setActiveEvent] = useState(null);
  const [generatedLink, setGeneratedLink] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Offline CSV Filter Upload States
  const [csvFile, setCsvFile] = useState(null);
  const [filterTargetEvent, setFilterTargetEvent] = useState('');

  useEffect(() => {
    localStorage.setItem('nss_event_history', JSON.stringify(eventHistory));
  }, [eventHistory]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'cell.secy@nss' && password === '4menot4u') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid authority credentials.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsGenerating(true);

    if (!navigator.geolocation) {
      alert("GPS is not supported by your browser. Cannot set a dynamic geofence.");
      setIsGenerating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (positionData) => {
        const organizerLat = positionData.coords.latitude;
        const organizerLng = positionData.coords.longitude;

        const preFilledFormLink = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/viewform?${FORM_ENTRY_IDS.eventName}=${encodeURIComponent(eventName)}&${FORM_ENTRY_IDS.date}=${encodeURIComponent(date)}&${FORM_ENTRY_IDS.venue}=${encodeURIComponent(venue)}&${FORM_ENTRY_IDS.vertical}=${encodeURIComponent(vertical)}`;
        const secureCheckInLink = `${window.location.origin}/check-in?event=${encodeURIComponent(eventName)}&venue=${encodeURIComponent(venue)}&lat=${organizerLat}&lng=${organizerLng}&formLink=${encodeURIComponent(preFilledFormLink)}`;
        const generatedQR = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(secureCheckInLink)}`;
        
        const newEvent = { name, enrollment, position, vertical, eventName, date, duration, venue, link: secureCheckInLink, qr: generatedQR };
        
        setActiveEvent(newEvent);
        setEventHistory([newEvent, ...eventHistory]);
        
        setGeneratedLink(secureCheckInLink);
        setQrCodeUrl(generatedQR);
        setCopied(false);
        setIsGenerating(false);
      },
      (err) => {
        alert("Please enable GPS/Location access in your browser settings to set the live geofence.");
        setIsGenerating(false);
      },
      { enableHighAccuracy: true }
    );
  };

  // MULTI-BROWSER FAILSAFE COPY METHOD: Works on all networks and insecure contexts
  const copyToClipboard = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(generatedLink)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // reset text after 2 seconds
        })
        .catch(() => fallbackCopy(generatedLink));
    } else {
      fallbackCopy(generatedLink);
    }
  };

  // Fallback text-area selection copy mechanism
  const fallbackCopy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; // prevent scrolling to bottom of screen
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failsafe copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  const downloadEventExcel = (event) => {
    const headers = ["Timestamp", "Name", "Enrollment Number", "Course", "Branch", "Year", "Organizing Event", "Date", "Venue"];
    const rows = [
      ["2026-07-31 14:05:12", "Sagar Rai", "24112090", "UG", "WEBD", "3rd Year", event.eventName, event.date, event.venue],
      ["2026-07-31 14:08:44", "Kunal Kapoor", "62021069", "UG", "Arch", "3rd Year", event.eventName, event.date, event.venue]
    ];
    
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", encodedUri);
    downloadLink.setAttribute("download", `${event.eventName.replace(/\s+/g, '_')}_${event.date}.csv`);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleCSVFilterAndDownload = (e) => {
    e.preventDefault();
    if (!csvFile || !filterTargetEvent) return;

    const reader = new FileReader();
    reader.onload = function(event) {
      const text = event.target.result;
      const rows = text.split("\n");
      const headers = rows[0].split(",");

      const filteredRows = rows.filter((row, idx) => {
        if (idx === 0) return false;
        return row.toLowerCase().includes(filterTargetEvent.toLowerCase());
      });

      const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...filteredRows].join("\n");
      const encodedUri = encodeURI(csvContent);
      const downloadLink = document.createElement("a");
      downloadLink.setAttribute("href", encodedUri);
      downloadLink.setAttribute("download", `${filterTargetEvent.replace(/\s+/g, '_')}_Attendance.csv`);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    reader.readAsText(csvFile);
  };

  return (
    <section className="relative min-h-screen py-32 px-6 flex items-center justify-center overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80')`,
            backgroundColor: '#050c1e'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0b192c] via-[#0b192c]/90 to-slate-900/70" />
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN: Authority Form */}
        <div className="lg:col-span-7 w-full">
          {!isLoggedIn ? (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl font-sans text-left">
              <h3 className="text-xl font-black text-[#0b192c] tracking-tight">Authority Portal</h3>
              <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Attendance Manager</span>
              
              <form onSubmit={handleLogin} className="mt-8 space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase">Username</label>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full mt-1.5 p-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#d32f2f]" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-1.5 p-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#d32f2f]" required />
                </div>
                {loginError && <p className="text-xs text-[#d32f2f] font-bold">{loginError}</p>}
                <button type="submit" className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-colors">
                  Authorize Log In
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl font-sans text-left space-y-8">
              <h3 className="text-xl font-black text-[#0b192c] tracking-tight">Generate Event QR</h3>

              {!generatedLink ? (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase">Organizer Name</label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase">Enrollment No.</label>
                      <input type="text" value={enrollment} onChange={(e) => setEnrollment(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase">Authority Position</label>
                      <select value={position} onChange={(e) => setPosition(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none">
                        <option value="GENERAL SECY">GENERAL SECY</option>
                        <option value="ADDITIONAL SECY">ADDITIONAL SECY</option>
                        <option value="JOINT SECY">JOINT SECY</option>
                        <option value="CELL SECY">CELL SECY</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase">Vertical Name</label>
                      <input type="text" value={vertical} onChange={(e) => setVertical(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4 space-y-5">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase">Name of Event</label>
                      <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase">Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase">Duration (Hours)</label>
                        <input type="number" step="0.1" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase">Venue</label>
                        <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} placeholder="e.g. MAC, Rajiv Bhawan" className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isGenerating}
                    className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-colors mt-2 disabled:bg-gray-400 flex items-center justify-center"
                  >
                    {isGenerating ? (
                      <span className="flex items-center space-x-2">
                        <span className="h-3 w-3 border-2 border-t-white border-white/20 rounded-full animate-spin" />
                        <span>Verifying Your Location...</span>
                      </span>
                    ) : (
                      "Set Live Geofence & Generate QR"
                    )}
                  </button>
                </form>
              ) : (
                /* QR CODE OUTPUT SCREEN */
                <div className="flex flex-col items-center justify-center space-y-6 text-center border-t border-gray-100 pt-6 animate-fade-in">
                  <div className="bg-slate-50 p-4 border border-gray-150 rounded-2xl shadow-inner">
                    <img src={qrCodeUrl} alt="Generated Attendance QR" className="h-48 w-48 object-contain" />
                  </div>
                  
                  <p className="text-xs text-gray-500 max-w-sm">
                    Display this QR on a screen. When participants scan, their browser will verify their GPS coordinates against where you are standing right now before unlocking their pre-filled attendance form.
                  </p>

                  <div className="w-full flex items-center bg-slate-50 border border-gray-200 rounded-xl overflow-hidden pl-3 py-1">
                    <input type="text" readOnly value={generatedLink} className="bg-transparent text-[10px] text-gray-500 font-mono flex-1 focus:outline-none" />
                    {/* Bounded onClick to the dynamic failsafe copy function */}
                    <button 
                      onClick={copyToClipboard} 
                      className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white transition-colors shrink-0 ${
                        copied ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                  </div>

                  <button onClick={() => { setGeneratedLink(''); setQrCodeUrl(''); }} className="text-xs font-bold text-gray-400 hover:text-gray-600 tracking-wider">
                    ← Create New Event
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Active & Past Event Archives & CSV EXPORTER */}
        {isLoggedIn && (
          <div className="lg:col-span-5 w-full space-y-8">
            
            {/* 1. Master Sheet Direct Link Button */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-2xl font-sans text-center">
              <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Live Cloud Database</span>
              <a 
                href={MASTER_GOOGLE_SHEET_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#0b192c] hover:bg-[#07111e] text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-colors inline-block"
              >
                Open Master Google Sheet ↗
              </a>
            </div>

            {/* 2. Custom Event Excel Filter/Exporter */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl font-sans text-left">
              <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-4">Export Custom Event Excel</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed mb-6">
                Download the master spreadsheet from Google Sheets as a `.csv`. Upload it below and type the event name to extract a dedicated excel sheet for that event.
              </p>

              <form onSubmit={handleCSVFilterAndDownload} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase">Select Master CSV File</label>
                  <input 
                    type="file" 
                    accept=".csv" 
                    onChange={(e) => setCsvFile(e.target.files[0])}
                    className="w-full mt-1.5 p-2 bg-slate-50 border border-gray-200 rounded-xl text-xs"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase">Target Event Name to Filter</label>
                  <input 
                    type="text" 
                    value={filterTargetEvent} 
                    onChange={(e) => setFilterTargetEvent(e.target.value)}
                    placeholder="e.g. Blood Donation Drive"
                    className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none"
                    required 
                  />
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-colors">
                  Filter & Download Event Excel
                </button>
              </form>
            </div>

            {/* 3. Generated Events Archive */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl font-sans text-left">
              <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-6">Generated Events Archive</h4>
              {eventHistory.length === 0 ? (
                <p className="text-xs text-gray-400 italic">No events generated in this session yet.</p>
              ) : (
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                  {eventHistory.map((ev, index) => (
                    <div key={index} className="p-4 border border-gray-100 rounded-xl bg-slate-50/50 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-extrabold text-[#d32f2f] uppercase tracking-wider">{ev.vertical} vertical</span>
                        <h5 className="font-extrabold text-sm text-[#0b192c] mt-0.5">{ev.eventName}</h5>
                        <div className="flex items-center space-x-3 text-[10px] text-gray-400 mt-2">
                          <span>📅 {ev.date}</span>
                          <span>📍 {ev.venue}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => { setFilterTargetEvent(ev.eventName); }}
                        className="mt-4 w-full bg-slate-100 hover:bg-slate-200 text-[#0b192c] py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors"
                      >
                        Select to Filter Above
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

// import React, { useState, useEffect } from 'react';

// // =========================================================================
// // CONFIGURATION: LINK YOUR OFFICIAL GOOGLE FORM & SPREADSHEET
// // =========================================================================
// const GOOGLE_FORM_ID = "1FAIpQLSdh_SHyE3dQcoidbqOMK5-RILr2ir2QXlFKtlKFTd3yPQn6eQ"; 

// const MASTER_GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1Jc5Gl9Wsh_OTguCMkbq5YVBltCAIw67IWiVjkAN_3yU/edit?resourcekey#gid=947626291";

// const FORM_ENTRY_IDS = {
//   eventName: "entry.1687747883",      // Mapped to "Name of Event"
//   date: "entry.463060295",           // Mapped to "Date"
//   venue: "entry.1195225696",          // Mapped to "Venue"
//   vertical: "entry.710042281"        // Mapped to "Vertical Name"
// };
// // =========================================================================

// export default function AttendancePage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setError] = useState('');

//   // Form Inputs
//   const [name, setName] = useState('');
//   const [enrollment, setEnrollment] = useState('');
//   const [position, setPosition] = useState('GENERAL SECY');
//   const [vertical, setVertical] = useState('');
//   const [eventName, setEventName] = useState('');
//   const [date, setDate] = useState('');
//   const [duration, setDuration] = useState('');
//   const [venue, setVenue] = useState('');

//   // Persistent Event Database State
//   const [eventHistory, setEventHistory] = useState(() => {
//     const savedHistory = localStorage.getItem('nss_event_history');
//     return savedHistory ? JSON.parse(savedHistory) : [];
//   });
  
//   const [activeEvent, setActiveEvent] = useState(null);

//   const [generatedLink, setGeneratedLink] = useState('');
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const [copied, setCopied] = useState(false);

//   // Offline CSV Filter Upload States
//   const [csvFile, setCsvFile] = useState(null);
//   const [filterTargetEvent, setFilterTargetEvent] = useState('');

//   useEffect(() => {
//     localStorage.setItem('nss_event_history', JSON.stringify(eventHistory));
//   }, [eventHistory]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === 'cell.secy@nss' && password === '4menot4u') {
//       setIsLoggedIn(true);
//       setError('');
//     } else {
//       setError('Invalid authority credentials.');
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
    
//     const preFilledLink = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/viewform?${FORM_ENTRY_IDS.eventName}=${encodeURIComponent(eventName)}&${FORM_ENTRY_IDS.date}=${encodeURIComponent(date)}&${FORM_ENTRY_IDS.venue}=${encodeURIComponent(venue)}&${FORM_ENTRY_IDS.vertical}=${encodeURIComponent(vertical)}`;
//     const generatedQR = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(preFilledLink)}`;
    
//     const newEvent = { name, enrollment, position, vertical, eventName, date, duration, venue, link: preFilledLink, qr: generatedQR };
    
//     setActiveEvent(newEvent);
//     setEventHistory([newEvent, ...eventHistory]);
    
//     setGeneratedLink(preFilledLink);
//     setQrCodeUrl(generatedQR);
//     setCopied(false);
//   };

//   const downloadEventExcel = (event) => {
//     const headers = ["Timestamp", "Name", "Enrollment Number", "Course", "Branch", "Year", "Organizing Event", "Date", "Venue"];
//     const rows = [
//       ["2026-07-31 14:05:12", "Sagar Rai", "24112090", "UG", "WEBD", "3rd Year", event.eventName, event.date, event.venue],
//       ["2026-07-31 14:08:44", "Kunal Kapoor", "62021069", "UG", "Arch", "3rd Year", event.eventName, event.date, event.venue]
//     ];
    
//     const csvContent = "data:text/csv;charset=utf-8," 
//       + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
      
//     const encodedUri = encodeURI(csvContent);
//     const downloadLink = document.createElement("a");
//     downloadLink.setAttribute("href", encodedUri);
//     downloadLink.setAttribute("download", `${event.eventName.replace(/\s+/g, '_')}_${event.date}.csv`);
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(generatedLink);
//     setCopied(true);
//   };

//   const handleCSVFilterAndDownload = (e) => {
//     e.preventDefault();
//     if (!csvFile || !filterTargetEvent) return;

//     const reader = new FileReader();
//     reader.onload = function(event) {
//       const text = event.target.result;
//       const rows = text.split("\n");
//       const headers = rows[0].split(",");

//       const filteredRows = rows.filter((row, idx) => {
//         if (idx === 0) return false;
//         return row.toLowerCase().includes(filterTargetEvent.toLowerCase());
//       });

//       const csvContent = "data:text/csv;charset=utf-8," 
//         + [headers.join(","), ...filteredRows].join("\n");
        
//       const encodedUri = encodeURI(csvContent);
//       const downloadLink = document.createElement("a");
//       downloadLink.setAttribute("href", encodedUri);
//       downloadLink.setAttribute("download", `${filterTargetEvent.replace(/\s+/g, '_')}_Attendance.csv`);
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//     };
//     reader.readAsText(csvFile);
//   };

//   return (
//     <section className="relative min-h-screen py-32 px-6 flex items-center justify-center overflow-hidden">
      
//       {/* BACKGROUND IMAGE WITH DEEP NAVY GRADIENT OVERLAY */}
//       <div className="absolute inset-0 z-0">
//         <div 
//           className="w-full h-full bg-cover bg-center scale-105"
//           style={{ 
//             backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80')`,
//             backgroundColor: '#050c1e'
//           }}
//         />
//         {/* Navy gradient to prevent background from distracting from forms */}
//         <div className="absolute inset-0 bg-gradient-to-tr from-[#0b192c] via-[#0b192c]/90 to-slate-900/70" />
//       </div>

//       <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
//         {/* LEFT COLUMN: Authority Form */}
//         <div className="lg:col-span-7 w-full">
//           {!isLoggedIn ? (
//             <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl font-sans text-left">
//               <h3 className="text-xl font-black text-[#0b192c] tracking-tight">Authority Portal</h3>
//               <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Attendance Manager</span>
              
//               <form onSubmit={handleLogin} className="mt-8 space-y-5">
//                 <div>
//                   <label className="block text-xs font-bold text-gray-500 uppercase">Username</label>
//                   <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full mt-1.5 p-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#d32f2f]" required />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-gray-500 uppercase">Password</label>
//                   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-1.5 p-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#d32f2f]" required />
//                 </div>
//                 {loginError && <p className="text-xs text-[#d32f2f] font-bold">{loginError}</p>}
//                 <button type="submit" className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-colors">
//                   Authorize Log In
//                 </button>
//               </form>
//             </div>
//           ) : (
//             <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl font-sans text-left space-y-8">
//               <h3 className="text-xl font-black text-[#0b192c] tracking-tight">Generate Event QR</h3>

//               {!generatedLink ? (
//                 <form onSubmit={handleFormSubmit} className="space-y-5">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-400 uppercase">Organizer Name</label>
//                       <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
//                     </div>
//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-400 uppercase">Enrollment No.</label>
//                       <input type="text" value={enrollment} onChange={(e) => setEnrollment(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-400 uppercase">Authority Position</label>
//                       <select value={position} onChange={(e) => setPosition(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none">
//                         <option value="GENERAL SECY">GENERAL SECY</option>
//                         <option value="ADDITIONAL SECY">ADDITIONAL SECY</option>
//                         <option value="JOINT SECY">JOINT SECY</option>
//                         <option value="CELL SECY">CELL SECY</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-400 uppercase">Vertical Name</label>
//                       <input type="text" value={vertical} onChange={(e) => setVertical(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
//                     </div>
//                   </div>

//                   <div className="border-t border-gray-100 pt-4 space-y-5">
//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-400 uppercase">Name of Event</label>
//                       <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
//                     </div>
//                     <div className="grid grid-cols-3 gap-4">
//                       <div>
//                         <label className="block text-[10px] font-bold text-gray-400 uppercase">Date</label>
//                         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
//                       </div>
//                       <div>
//                         <label className="block text-[10px] font-bold text-gray-400 uppercase">Duration (Hours)</label>
//                         <input type="number" step="0.1" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
//                       </div>
//                       <div>
//                         <label className="block text-[10px] font-bold text-gray-400 uppercase">Venue</label>
//                         <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none" required />
//                       </div>
//                     </div>
//                   </div>

//                   <button type="submit" className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-colors mt-2">
//                     Generate Live QR Code
//                   </button>
//                 </form>
//               ) : (
//                 /* QR CODE OUTPUT SCREEN */
//                 <div className="flex flex-col items-center justify-center space-y-6 text-center border-t border-gray-100 pt-6 animate-fade-in">
//                   <div className="bg-slate-50 p-4 border border-gray-150 rounded-2xl shadow-inner">
//                     <img src={qrCodeUrl} alt="Generated Attendance QR" className="h-48 w-48 object-contain" />
//                   </div>
                  
//                   <p className="text-xs text-gray-500 max-w-sm">
//                     Display this QR on a screen. When participants scan, the form will launch with the event details pre-filled.
//                   </p>

//                   <div className="w-full flex items-center bg-slate-50 border border-gray-200 rounded-xl overflow-hidden pl-3 py-1">
//                     <input type="text" readOnly value={generatedLink} className="bg-transparent text-[10px] text-gray-500 font-mono flex-1 focus:outline-none" />
//                     <button onClick={copyToClipboard} className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white transition-colors shrink-0 ${copied ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
//                       {copied ? 'Copied!' : 'Copy Link'}
//                     </button>
//                   </div>

//                   <button onClick={() => downloadEventExcel(activeEvent)} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-colors">
//                     Download {activeEvent.eventName} Excel (.CSV)
//                   </button>

//                   <button onClick={() => { setGeneratedLink(''); setQrCodeUrl(''); }} className="text-xs font-bold text-gray-400 hover:text-gray-600 tracking-wider">
//                     ← Create New Event
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* RIGHT COLUMN: Active & Past Event Archives & CSV EXPORTER */}
//         {isLoggedIn && (
//           <div className="lg:col-span-5 w-full space-y-8">
            
//             {/* 1. Master Sheet Direct Link Button */}
//             <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-2xl font-sans text-center">
//               <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Live Cloud Database</span>
//               <a 
//                 href={MASTER_GOOGLE_SHEET_URL} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-full bg-[#0b192c] hover:bg-[#07111e] text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-colors inline-block"
//               >
//                 Open Master Google Sheet ↗
//               </a>
//             </div>

//             {/* 2. Custom Event Excel Filter/Exporter */}
//             <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl font-sans text-left">
//               <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-4">Export Custom Event Excel</h4>
//               <p className="text-[11px] text-gray-400 leading-relaxed mb-6">
//                 Download the master spreadsheet from Google Sheets as a `.csv`. Upload it below and type the event name to extract a dedicated excel sheet for that event.
//               </p>

//               <form onSubmit={handleCSVFilterAndDownload} className="space-y-4">
//                 <div>
//                   <label className="block text-[10px] font-bold text-gray-400 uppercase">Select Master CSV File</label>
//                   <input 
//                     type="file" 
//                     accept=".csv" 
//                     onChange={(e) => setCsvFile(e.target.files[0])}
//                     className="w-full mt-1.5 p-2 bg-slate-50 border border-gray-200 rounded-xl text-xs"
//                     required 
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-[10px] font-bold text-gray-400 uppercase">Target Event Name to Filter</label>
//                   <input 
//                     type="text" 
//                     value={filterTargetEvent} 
//                     onChange={(e) => setFilterTargetEvent(e.target.value)}
//                     placeholder="e.g. Blood Donation Drive"
//                     className="w-full mt-1.5 p-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none"
//                     required 
//                   />
//                 </div>
//                 <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-colors">
//                   Filter & Download Event Excel
//                 </button>
//               </form>
//             </div>

//             {/* 3. Generated Events Archive */}
//             <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl font-sans text-left">
//               <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-6">Generated Events Archive</h4>
//               {eventHistory.length === 0 ? (
//                 <p className="text-xs text-gray-400 italic">No events generated in this session yet.</p>
//               ) : (
//                 <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
//                   {eventHistory.map((ev, index) => (
//                     <div key={index} className="p-4 border border-gray-100 rounded-xl bg-slate-50/50 flex flex-col justify-between">
//                       <div>
//                         <span className="text-[9px] font-extrabold text-[#d32f2f] uppercase tracking-wider">{ev.vertical} vertical</span>
//                         <h5 className="font-extrabold text-sm text-[#0b192c] mt-0.5">{ev.eventName}</h5>
//                         <div className="flex items-center space-x-3 text-[10px] text-gray-400 mt-2">
//                           <span>📅 {ev.date}</span>
//                           <span>📍 {ev.venue}</span>
//                         </div>
//                       </div>
//                       <button 
//                         onClick={() => { setFilterTargetEvent(ev.eventName); }}
//                         className="mt-4 w-full bg-slate-100 hover:bg-slate-200 text-[#0b192c] py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors"
//                       >
//                         Select to Filter Above
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//           </div>
//         )}

//       </div>
//     </section>
//   );
// }