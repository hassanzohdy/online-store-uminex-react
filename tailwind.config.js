/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  extend: {
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    colors: {
      lightGray: `#f1f5f6`,
      gray: `#515d66`,
      primary: `#212529`,
      secondary: `#dd3842`,
      blue: `#2b38d1`,
      darkGray: `#8d979e`,
      white: `#ffffff`,
      green: `#008a00`,
      red: `#ef262c`,
      darkRed: `#ef262c`,
      orange: `#ff6128`,
      pink:`#ea0d42`,
      light: `#f3f4f6`,
      yellow: `#ffb800`,
      gold:`#f8ba26`,
      filterBlack: "black",
      filterBlue: "blue",
      filterDarkSeaGreen: "DarkSeaGreen",
      filterDeepSkyBlue: "DeepSkyBlue",
      filterGhostWhite: "GhostWhite",
      filterLavender: "Lavender",
      filterLightBlue: "LightBlue",
      filterMidnightBlue: "MidnightBlue",
      filterPurple: "Purple",
      aqua:`#40c1df`,
      purple: `#3c5b9b`,
      hotRed:`#eb281d`,
      hotPink:`#e92e2e`,
      black:`#000`,
      dark:`#222`,
      darkBlue:`#203864`,
      lightYellow: `#f6ea3c`,
      darkRed:`#fa001a`,
      lightAqua: `#33b8e8`,
      overlay:`#000000b3`,
      borderLight: `#e5e8ec`,
      lightRed:`#EFEFEF`,
      lightGreen:`#EFEFEF`,


    },
    fontSize: {
      "xs": "0.75rem", // 12px
      // "xs": "0.813rem", // 13px
      "sm": "0.875rem", // 14px
      "base": "1rem", // 16px
      "lg": "1.125rem", // 18px
      "xl": "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.688rem", // 27px
      "4xl": "1.875rem", // 30px
      "5xl": "2rem", // 32px
      "6xl": "2.25rem", // 36px
      "7xl": "3rem", // 48px
      "8xl": "3.75rem", // 60px
    
    },
  },
};
export const plugins = [require("tailwindcss-animate")];