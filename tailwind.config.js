/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontFamily: 'Proxima Nova, sans-serif',
    container: {
      center: true,
    },
    extend: {
      colors: {
        'green': '#1DB954',
        'dark': '#121212',
        'light': '#282828',
        'lightest': '#B3B3B3',
        'darkest': '#191414'
      }
    },
  },
  plugins: [],
}
