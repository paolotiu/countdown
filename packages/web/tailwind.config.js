const themeSwapper = require('tailwindcss-theme-swapper');

module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',

  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },

  plugins: [
    require('tailwindcss-children'),
    themeSwapper({
      themes: [
        {
          name: 'base',
          selectors: [':root'],
          theme: {
            colors: {
              black: '#1D1D1D',
              primary: '#021C3F',
              primaryLight: '#0B3A7A',
            },
          },
        },
      ],
    }),
  ],
};
