import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection'; 
import VisionSection from './components/VisionSection';
import PartnersTicker from './components/PartnersTicker';
import EsteemedGuests from './components/EsteemedGuests';
import TeamsPage from './components/TeamsPage'; 
import SocialSummit from './components/SocialSummit';
import AttendancePage from './components/AttendancePage'; 
import CellsPage from './components/CellsPage';
import EventsPage from './components/EventsPage';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CheckInPage from './components/CheckInPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1200);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <Router>
      {loading && <Preloader />}
      <div className={`bg-slate-50 min-h-screen flex flex-col justify-between transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <VisionSection />
              <PartnersTicker />
              <EsteemedGuests />
            </>
          } />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/social-summit" element={<SocialSummit />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/cells" element={<CellsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/check-in" element={<CheckInPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;