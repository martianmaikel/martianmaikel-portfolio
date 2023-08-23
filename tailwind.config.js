/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.tsx",
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
      'orange': '#e56135',
      'orange-lighter': '#ff793b',
      'orange-lightest': '#faa887',
      'grey-light': '#e5e5e5',
      'grad-l': '#ff1900',
      'grad-mid': '#f89b29',
      'grad-r': '#00b5fd',
      'white': '#fff',
      'twitter': '#1DA1F2',
      'linkedin': '#0e76a8',
      'instagram': '#C13584',
      'github': '#6e5494'
    },
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        pixel: 'PressStart2P, cursive',
        tektur: 'Tektur, cursive',
        pacifico: 'Pacifico, cursive',
        console: 'Fragment Mono, monospace',
        vina: ['Vina Sans', 'cursive'],
        standard: 'Poppins, sans-serif',
        orbitron: 'Orbitron, sans-serif',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-filters')],
}
