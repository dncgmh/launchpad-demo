const colors = require('tailwindcss/colors');
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr'
      },
      fontFamily: {
        heading: ['Goldman', 'sans-serif'],
        text: ['Google Sans', 'sans-serif']
      },
      colors: {
        primary: colors.blue['500'],
        secondary: colors.slate['700'],
        error: colors.red['500']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
