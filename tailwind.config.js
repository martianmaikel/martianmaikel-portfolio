/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'text-dark': '#1f2937',
      'bg-dark': '#293952',
      'bg-darker': '#1f2937',
      'text-light': '#ecf0f3',
      'bg-light': '#ecf0f3',
      'bg-lighter': '#e9eef2',
      'space-blue': '#14213d',
      'light-blue': '#004D6F',
      'orange': '#fca311',
      'orange-lighter': '#FFC640',
      'grey-light': '#e5e5e5',
      'grad-l': '#ff1900',
      'grad-mid': '#f89b29',
      'grad-r': '#00b5fd',
      'white': '#fff',
      'twitter': '#1DA1F2',
      'linkedin': '#0e76a8',
      'instagram': '#C13584'
    },
    fontFamily: {

    },
    extend: {
      animation: {
        border: 'border 6s ease infinite'
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backgroundSize: {
        'size-300': '300% 300%'
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
