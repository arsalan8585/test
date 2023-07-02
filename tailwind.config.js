/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      screens: {
        '2xl': '1170px',
      },
    },
    fontFamily: {
      body: ["Dana"],
      display: ["Dana"],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),

  ],
}

