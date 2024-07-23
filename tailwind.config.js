/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        bodyBg: `#f1f5f6`,
        textBody: `#515d66`,
        main: `#212529`,
        secondary: `#dd3842`,
        linkHover: `#2b38d1`,
        scrollbar: `#8d979e`,
        starProduct: `#ffb800`,
        btnProductHover: `#ffffff`,
        labelNew: `#008a00`,
        labelOut: `#ef262c`,
        bgStatus: `#f3f4f6`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}