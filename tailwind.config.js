/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  screens: {
    xs: "480px",
    md: "768px",
    lg: "1200px",
  },

  plugins: [],
};
