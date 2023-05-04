module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#fff',
          hover: '#0e2444',
          dark: '#0A192F',
        },
        hover: '#203354',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
