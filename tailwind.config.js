/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '2px',
    },
    extend: {
      colors: {
        primary: '#0c4a6e',
        dark: '#0f172a',
        secondary: '#64748b'
      },
      screens: {
        'xl': '1920px',
      },
    },
  },
  plugins: [],
}

