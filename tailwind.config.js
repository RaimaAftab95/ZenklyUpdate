/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BA5914',
          light: '#ffedd5',
          dark: '#8a3f10'
        },
        secondary: {
          DEFAULT: '#7d2d12',
          light: '#fff6ed',
          dark: '#fcbf80'
        },
        graytext: '#958F80'
      }
    }
  },
  plugins: []
};
