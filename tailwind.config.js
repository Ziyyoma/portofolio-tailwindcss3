/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class', 
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0c4a6e',
        dark: '#0f172a',
        secondary: '#64748b',
        green: '#14b8a6'
      },
      screens: {
        'xl': '1920px',
      },
    },
  },
  plugins: [],
}

