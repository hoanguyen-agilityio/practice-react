/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      padding: {
        '17px': '17px',
        '100px': '100px',
        '110px': '110px',
        '204px': '204px',
      },
      borderRadius: {
        '10px': '10px',
      },
      transform: {
        0.95: '0.95',
      },
      boxShadow: {
        '3xl': '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  plugins: [],
};
