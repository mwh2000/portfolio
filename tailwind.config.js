/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        550: "550px",
      },
      fontFamily: {
        babylonica: ["Babylonica", "sans-serif"],
      },
      colors: {
        primary: "#286f6c",
        secondary: "#fffefa",
        bg: "#f8f7f1",
      },
    },
  },
  plugins: [],
};
