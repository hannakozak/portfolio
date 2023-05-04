module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#fff',
          hover: '#203354',
          dark: '#0A192F',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '10rem',
        },
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
