/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        background: "#080604",
        foreground: "#d4c4a0",
        "gold-mid": "#c9943a",
        "gold-light": "#f0d060",
      },
    },
  },
  plugins: [],
};
