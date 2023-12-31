/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about' : "url('./image/bg_about.jpg')",
        'contact' : "url('./image/bg_contact.jpg')",
      },
      boxShadow: {
        'box': '15px 15px 20px white',
      }
    },
  },
  plugins: [],
}

