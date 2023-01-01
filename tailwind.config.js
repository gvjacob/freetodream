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
      colors: {
        blue: {
          100: '#3484F5',
          300: '#296AF6',
          400: '#2561F5',
          500: '#2158F4',
          DEFAULT: '#2158F4',
          900: '#1A23D9',
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
