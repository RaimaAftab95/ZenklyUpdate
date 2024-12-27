/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lightbg: '#fff6ed',
        darkbg: '#ffedd5',
        darkbrown: '#BA5914',
        darkestbrown: '#9a4612'
      }
    }
  },
  plugins: []
};
