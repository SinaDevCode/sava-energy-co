/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px)

      md: "768px",
      // => @media (min-width: 768px)

      lg: "1024px",
      // => @media (min-width: 1024px)

      xl: "1280px",
      // => @media (min-width: 1280px)

      "2xl": "1536px",
      // => @media (min-width: 1536px)
    },
    colors: {
      White: "rgb(255, 255, 255)",
      LightWhite: "rgb(240, 241, 243)",
      DarkBlue: "rgb(45, 50, 90)",
      Cyan: "rgb(30, 189, 184)",
      Grey: "rgb(80, 80, 80)",
      Gold: "rgb(219, 177, 59)",
      // this color is added for inactive links
      Disable: "rgba(255, 255, 255, 0.5)",
    },
    extend: {},
  },
  plugins: [],
};
