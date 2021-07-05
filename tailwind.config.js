/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineClamp: {
        10: '10',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      // in JIT, every variants is enabled by default
      // see more: https://tailwindcss.com/docs/just-in-time-mode
      // opacity: ['disabled'],
      // textColor: ['visited'],
      // lineClamp: ['responsive', 'hover'],
    },
  },
  plugins: [],
};
