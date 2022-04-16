const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      'primary': '#2930D2',
      'primary-bg': '#505ABB',
      'secondary': '#FA9746',
      'tertiary': '#64BAAA',
      ...colors
    },
    fontFamily: {
      'sans': ['Nunito', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
