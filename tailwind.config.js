/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'custom': '#dfd5d5',
      },
      height: {
        'custom': '422px',
      },
      colors: {
        mainColor: {
          DEFAULT: "#02A28F",
        },
      },
    },
  },
  plugins: [],
}

