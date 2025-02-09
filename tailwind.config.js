/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BA5914',
          light: '#ffedd5',
          // dark: '#8a3f10'
          dark: '#7C2D12',
          lighter: '#C2410C'
        },
        secondary: {
          DEFAULT: '#7d2d12',
          light: '#fff6ed',
          dark: '#fcbf80',
          lighter: '#FFDCB7'
        },
        graytext: '#958F80',
        lightgraytext: '#D1D5DB',
        red: '#B91C1C',
        slategray: '#475569'
      }
    }
  },
  plugins: []
};
