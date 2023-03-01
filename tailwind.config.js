/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'red': '#ef3125',
      'white': '#fbfbfb',
      'gray-dark': '#3e3e3e',
      'gray-light': '#f1f1f1',
      'green': '#46cc8d',
      'black': '#000',
      'purewhite':'#FFF'

    },

    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
      display: ['Pridi', 'serif']
    },

    }
  },
  plugins: [],
}