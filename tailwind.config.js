/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto"],
    },
    colors: {
      white: "#ffffff",
      light: "#f0f1f3",
      blue: "#2d325a",
      cyan: "#1ebdb8",
      lightCyan: "rgb(219, 237, 236)",
      gold: "#dbb13b",
      gray: "#505050",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
