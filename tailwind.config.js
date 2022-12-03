/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          DEFAULT: '#eee',
          100: '#eee',
          200: '#ddd',
          300: '#ccc',
          400: '#bbb',
          500: '#aaa',
          600: '#999',
          700: '#888',
          800: '#777',
          900: '#666',
        },
        black: {
          DEFAULT: '#111',
          100: '#aaa',
          200: '#999',
          300: '#888',
          400: '#777',
          500: '#666',
          600: '#555',
          700: '#444',
          800: '#333',
          900: '#222',
        },
      },

      rotate: {
        30: '30deg',
        60: '60deg',
        n30: '-30deg',
        n45: '-45deg',
        n60: '-60deg',
      },
    },
  },
  plugins: [],
};
