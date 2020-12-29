const tailwind = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...tailwind.fontFamily.sans],
        'mono': ['"Fira Code"', ...tailwind.fontFamily.mono]
      }
    }
  }
};
