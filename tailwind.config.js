// const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1536px",
        "3xl": "1920px", // Custom large screen
      },
      // colors: {},
      // spacing: {},
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
        PlayFair :["Playfair Display", 'serif'],
      },
      // fontSize: {},
      // fontWeight: {},
      // lineHeight: {},
      // opacity: {},
      // animation: {},
      // keyframes: {},
    },
  },
  darkMode: "class",
};
