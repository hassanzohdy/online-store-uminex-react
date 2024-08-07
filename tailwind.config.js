/** @type {import('tailwindcss').Config} */
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

    extend: {
      clipPath: {
        triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
        circle: "circle(50% at 50% 50%)",
        ellipse: "ellipse(50% 25% at 50% 50%)",
        polygon: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 75%, 0% 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        moveAndFade: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "20%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-40px)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        moveAndFade: "moveAndFade 2s linear infinite",
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
        pink: `#ea0d42`,
        light: `#f3f4f6`,
        yellow: `#ffb800`,
        gold: `#f8ba26`,
        filterBlack: "black",
        filterBlue: "blue",
        filterDarkSeaGreen: "DarkSeaGreen",
        filterDeepSkyBlue: "DeepSkyBlue",
        filterGhostWhite: "GhostWhite",
        filterLavender: "Lavender",
        filterLightBlue: "LightBlue",
        filterMidnightBlue: "MidnightBlue",
        filterPurple: "Purple",
        aqua: `#40c1df`,
        purple: `#3c5b9b`,
        hotRed: `#eb281d`,
        hotPink: `#e92e2e`,
        black: `#000`,
        dark: `#222`,
        darkBlue: `#203864`,
        lightYellow: `#f6ea3c`,
        lightAqua: `#33b8e8`,
        overlay: `#000000b3`,
        borderLight: `#e5e8ec`,
        lightRed: `#EFEFEF`,
        lightGreen: `#EFEFEF`,
        iconColor: `#888`,
        grayColor: `#8a94ac`,
        borderGray: `#F1F5F6`,
      },

      fontSize: {
        xs: "0.75rem", // 12px
        // "xs": "0.813rem", // 13px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.688rem", // 27px
        "4xl": "1.875rem", // 30px
        "5xl": "2rem", // 32px
        "6xl": "2.25rem", // 36px
        "7xl": "3rem", // 48px
        "8xl": "3.75rem", // 60px
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      screens: {
        mobile: "450px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          /* Hide scrollbar for Firefox */
          "scrollbar-width": "none",
          /* Hide scrollbar for Chrome, Safari, and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".clip-triangle": {
          "clip-path": "polygon(50% 0%, 0% 100%, 100% 100%)",
        },
        ".clip-circle": {
          "clip-path": "circle(50% at 50% 50%)",
        },
        ".clip-ellipse": {
          "clip-path": "ellipse(50% 25% at 50% 50%)",
        },
        ".clip-polygon": {
          "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 50% 75%, 0% 100%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
