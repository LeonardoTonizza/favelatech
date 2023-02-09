const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      display: ['BenzGroteskHeavy', ...defaultTheme.fontFamily.sans],
      sans: ['GilroyLight', ...defaultTheme.fontFamily.sans]
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1410px'
      }
    }
  }
};
