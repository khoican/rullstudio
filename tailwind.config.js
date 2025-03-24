const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif", ...fontFamily.sans],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        light: "#353FFF",
        primary: "#0083FF",
        secondary: "#000BD7",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
