const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Press Start 2P', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'custom-purple-100': '#4E4353',
        'custom-purple-200': '#3D3343',
        'custom-purple-300': '#322838',
        'custom-red-100': '#E45053',
        'custom-green-100': '#428D6B',
        'custom-orange-50': '#FDD599',
        'custom-orange-100': '#EEC48D',
        'custom-orange-300': '#E7B184',
      },
    },
  },
  plugins: [],
}
