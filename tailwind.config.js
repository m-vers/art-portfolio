/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'small': { 'raw': '(max-width: 800px)' },
        // => @media (max-width: 800px) { ... }
      },
      fontFamily: {
        roboto: "roboto",
        sarabun: "sarabun",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};