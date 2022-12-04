/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
      },
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
        brown: {
          DEFAULT: '#814d2e',
          500: '#9c441a',
          600: '#624c2b',
          700: '#cc9c7c',
          800: '#a15c2a',
          900: '#814d2e',
        },
        fire: {
          red: '#ff0000',
          orange: '#ff5a00',
          'dark-yellow': '#ff9a00',
          yellow: '#ffce00',
          'light-yellow': '#ffe808',
        },
      },

      rotate: {
        30: '30deg',
        60: '60deg',
        135: '135deg',
        210: '210deg',
        235: '235deg',
        n30: '-30deg',
        n45: '-45deg',
        n60: '-60deg',
        n135: '-135deg',
      },
    },
  },
  plugins: [],
};
