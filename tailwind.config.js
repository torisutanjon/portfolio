/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBG: "#ECECEC",
        lightPrimary: "#2B2B2B",
        darkBG: "#000217",
        darkPrimary: "#FFFFFFD9",
        orange: "#FFA500",
      },
    },
  },
  plugins: [],
};
