module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textShadow: { // defaults to {}
      'default': '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    },
    extend: {
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { min: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { min: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      keyframes: {
        wiggle: {
          "0%": { "background-color": "#9c5ddb", "margin-top": "5px" },
          "50%": { "background-color": "#9126fc", "margin-top": "0px" },
          "100%": { "background-color": "#9c5ddb", "margin-top": "5px" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      colors: {
        gray: {
          'medio': '#34373C',
          'forte': '#2F3136',
          'fraco': '#40444B',
          'usr': '#292B2F',
          'xforte': "#202225"
        }
      }
    },
  },
  plugins: [],
};
