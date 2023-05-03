module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zodiac: '#0A192F',
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
