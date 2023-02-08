const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Good Sans', 'sans-serif'],
        hangul: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        iron: '#CFD5E4',
        blue: {
          100: '#317BF7',
          200: '#2D72F6',
          300: '#296AF6',
          400: '#2561F5',
          500: '#2158F4',
          DEFAULT: '#2158F4',
          900: '#1A23D9',
          dark: '#0034C9',
        },
        beige: '#F4F1ED',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
};
