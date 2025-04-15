/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          600: "#D4AF37",
          700: "#C5A019",
        },
        selam: {
          light: "#EAE3D2",   // Soft beige for backgrounds
          dark: "#2E2C2F",    // Deep neutral for text
          accent: "#A88C59",  // Elegant gold-ish accent
        },
      },
    },
  },
  plugins: [],
};
