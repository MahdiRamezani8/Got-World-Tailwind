/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      sd: '576px',
      md: '768px',
      lg: '987px',
      xl: '1440px'
    },
    colors: {
      colorText: '#a8abe1c2',
      dark1: '#262626',
      dark2: '#353535',
      dark3: '#555',
      dark4: '#666',
      dark5: '#888',
      dark6: '#c6c6c6',
      blue: '#1c2f40',
      blue2: '#00437ed7',
      white: '#fff',
    },
  },
  plugins: [],
}

