import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CheckInPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // Parse parameters passed from the generated QR code
  const eventName = params.get('event') || 'NSS Event';
  const venueName = params.get('venue') || 'Venue';
  const targetLat = parseFloat(params.get('lat'));
  const targetLng = parseFloat(params.get('lng'));
  const googleFormLink = params.get('formLink');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [distance, setDistance] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  // Mathematical formula to calculate distance between two coordinates in meters
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Earth's radius in meters
    const phi1 = (lat1 * Math.PI) / 180;
    const phi2 = (lat2 * Math.PI) / 180;
    const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
    const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
              Math.cos(phi1) * Math.cos(phi2) *
              Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // distance in meters
  };

  useEffect(() => {
    if (isNaN(targetLat) || isNaN(targetLng)) {
      setError('Invalid venue coordinates. Please scan the official event QR code.');
      setLoading(false);
      return;
    }

    if (!navigator.geolocation) {
      setError('GPS is not supported by your browser. Please use Chrome or Safari.');
      setLoading(false);
      return;
    }

    // Request student's live GPS coordinates
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        
        const dist = getDistance(userLat, userLng, targetLat, targetLng);
        setDistance(dist);

        // Lock geofence limit to 100 meters of the venue
        if (dist <= 100) {
          setIsVerified(true);
        } else {
          setIsVerified(false);
          setError(`Access Denied: You are too far from ${venueName}.`);
        }
        setLoading(false);
      },
      (err) => {
        setError('Please enable GPS/Location access on your phone to verify attendance.');
        setLoading(false);
      },
      { enableHighAccuracy: true }
    );
  }, [targetLat, targetLng, venueName]);

  return (
    <section className="relative bg-[#0b192c] min-h-screen py-32 px-6 flex items-center justify-center text-center">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl font-sans text-center space-y-6">
        
        <div>
          <span className="text-[#d32f2f] font-bold text-xs uppercase tracking-widest block mb-1">NSS Check-In</span>
          <h3 className="text-xl font-black text-[#0b192c] tracking-tight">{eventName}</h3>
          <p className="text-gray-400 text-xs mt-1">📍 {venueName}</p>
        </div>

        {loading ? (
          <div className="py-8 space-y-4">
            <div className="h-10 w-10 border-4 border-t-[#d32f2f] border-gray-200 rounded-full animate-spin mx-auto" />
            <p className="text-xs text-gray-500 font-semibold uppercase">Verifying your GPS Location...</p>
          </div>
        ) : error ? (
          /* ACCESS DENIED */
          <div className="py-6 space-y-4 animate-fade-in">
            <div className="h-16 w-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto text-3xl">❌</div>
            <p className="text-sm font-bold text-gray-700 leading-relaxed">{error}</p>
            {distance !== null && (
              <p className="text-[11px] text-gray-400">Current distance: {Math.round(distance)} meters away.</p>
            )}
            <button onClick={() => window.location.reload()} className="text-xs font-bold text-[#d32f2f] uppercase tracking-wider underline">
              Retry GPS Scan
            </button>
          </div>
        ) : (
          /* ACCESS GRANTED */
          <div className="py-6 space-y-6 animate-fade-in">
            <div className="h-16 w-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">✅</div>
            <div className="space-y-1">
              <h4 className="text-green-600 font-black text-sm uppercase tracking-wider">Location Verified!</h4>
              <p className="text-[11px] text-gray-400">You are {Math.round(distance)}m from the venue.</p>
            </div>
            
            <a 
              href={googleFormLink}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-colors inline-block"
            >
              Complete Attendance Form ↗
            </a>
          </div>
        )}

      </div>
    </section>
  );
}