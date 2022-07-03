/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
      },
      screens: {
        "2xl-a": { 'raw': '(max-height: 1536px),(max-width: 1536px)' },
        'xl-a': { 'raw': '(max-height: 1280px),(max-width: 1280px)' },
        'lg-a': { 'raw': '(max-height: 1024px),(max-width: 1024px)' },
        'md-a': { 'raw': '(max-height: 768px),(max-width: 768px)' },
        'sm-a': { 'raw': '(max-height: 640px),(max-width: 640px)' },
        'xs-a': { 'raw': '(max-height: 320px),(max-width: 320px)' },

      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
