/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'default': ["'Fira Code', monospace"],  
      },
      colors: {
        primary: '#3b82f6',
      },
    },
  },
  plugins: [],
}

