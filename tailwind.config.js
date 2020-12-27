const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal
      }
    },
    container: {
      padding: '2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
