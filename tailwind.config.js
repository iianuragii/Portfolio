/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      colors: {
        primary: '#ffb703',
        Secondary:'#282162',
        tertiary:'#7562e0',
        light:'#BDBDBD',
        dark: '#000036',
        white1: '#BDBDBD'
      }
    },
  },
  plugins: [],
}

