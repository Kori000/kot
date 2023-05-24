/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      // 标题
      Inter: ['Inter', 'sans-serif'],
      // 正文
      Alata: ['Alata', 'sans-serif'],
      Sans: ['sans-serif']
    },
    backgroundImage: {}
  },

  plugins: []
};
