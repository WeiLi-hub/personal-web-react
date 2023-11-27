/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about' : "url('./image/bg_about.jpg')",
      }
    },
  },
  plugins: [],
}

