/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nss: {
          navy: '#0b192c',        // New Deep Navy Blue
          navyHover: '#06101e',   // Darker Navy for hover
          red: '#d32f2f',         // Crimson Red
          redHover: '#b71c1c',    // Darker Red
          slate: '#2d3748',       // Body text
        }
      }
    },
  },
  plugins: [],
}