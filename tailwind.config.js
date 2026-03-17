/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        550: "550px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        babylonica: ["Babylonica", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0D9488", // Teal-600
          light: "#2DD4BF", // Teal-400
          dark: "#0F766E", // Teal-700
        },
        secondary: {
          DEFAULT: "#FDFCF6",
          dark: "#F3F2EA",
        },
        accent: "#F59E0B", // Amber-500
        bg: {
          DEFAULT: "#FAFAFA",
          glass: "rgba(255, 255, 255, 0.7)",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
