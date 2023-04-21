/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      // 标题
      AXSA: ['AXSA', 'sans-serif'],
      // 正文
      Avoidance: ['Avoidance', 'sans-serif'],
      Sans: ['sans-serif']
    },
    backgroundImage: {}
  },

  plugins: []
};
