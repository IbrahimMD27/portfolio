/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // This line is key
  ],
  theme: {
    extend: {
      colors: {
        'td-pink': '#E83F6F',
        'td-green': '#22BFA0',
        'td-dark': '#3A3335',
      }
    },
  },
  plugins: [],
}