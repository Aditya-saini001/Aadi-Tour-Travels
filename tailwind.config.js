/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
    './app/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          dark: '#0F1E35',
          light: '#2D4170',
        },
        gold: {
          DEFAULT: '#C9A227',
          dark: '#A8861E',
          light: '#E8C547',
        },
        cream: {
          DEFAULT: '#FDF8F0',
          dark: '#F5EDD8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
