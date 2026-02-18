/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark1: "#0D0D0D",
        dark2: "#1A1A1A",
        dark3: "#262626",
        light1: "#F2F2F2",
        light2: "#E6E6E6",
        light3: "#999999",
        accent1: "#83BD0F",
        accent2: "#0F49BD",
        danger: "#BD0F12",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        medium: ["Roboto", "sans-serif"],
        bold: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
