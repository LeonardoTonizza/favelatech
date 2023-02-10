const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#75d8ab',
          50: '#e4f7ef',
          100: '#d4f3e5',
          200: '#b5ead2',
          300: '#95e1be',
          400: '#75d8ab',
          500: '#49cc90',
          600: '#31ac74',
          700: '#248057',
          800: '#185539',
          900: '#0c291c'
        },
        yellow: {
          DEFAULT: '#fdc300',
          50: '#ffe58d',
          100: '#ffe078',
          200: '#ffd750',
          300: '#ffcd27',
          400: '#fdc300',
          500: '#c59800',
          600: '#8d6d00',
          700: '#554100',
          800: '#1d1600',
          900: '#000000'
        },
        blue: {
          DEFAULT: '#0dafc6',
          50: '#6ce4f5',
          100: '#59e1f4',
          200: '#33daf2',
          300: '#10d1ec',
          400: '#0dafc6',
          500: '#0a8091',
          600: '#06525d',
          700: '#032328',
          800: '#000000',
          900: '#000000'
        },
        red: {
          DEFAULT: '#ff5f64',
          50: '#ffeeee',
          100: '#ffd9db',
          200: '#ffb1b3',
          300: '#ff888c',
          400: '#ff5f64',
          500: '#ff272e',
          600: '#ee0007',
          700: '#b60006',
          800: '#7e0004',
          900: '#460002'
        }
      }
    },
    fontFamily: {
      display: ['BenzGroteskHeavy', ...defaultTheme.fontFamily.sans],
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
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
