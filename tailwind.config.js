module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  variants: {
    extend: {
      width: ['focus'],
    },
  },
  theme: {
    fontFamily: {
      describe: ['Montserrat', 'Hind', 'Roboto', 'sans-serif'],
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { 'background-color': '#9c5ddb', 'margin-top': '5px' },
          '50%': { 'background-color': '#9126fc', 'margin-top': '0px' },
          '100%': { 'background-color': '#9c5ddb', 'margin-top': '5px' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        primary: '#975AFF',
        secondary: '#2F2F2F',
        'primary-bg': '#24252a',
        'secondary-bg': '#232324',
        'border-color': '#191919',
        'separate-color': '#383838',
        'status-warning': '#EDE63A',
        'status-error': '#ED3A3A',
        'status-success': '#975AFF',
        describe: '#CDCDCD',
      },
    },
  },
  plugins: [],
};
