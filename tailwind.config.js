/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      keyframes: {
        'bg-shift-1': {
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 0%' },
        },
        'bg-shift-2': {
          '0%': { 'background-position': '50% 100%' },
          '50%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '50% 100%' },
        },
        'bg-shift-3': {
          '0%': { 'background-position': '25% 75%' },
          '50%': { 'background-position': '75% 25%' },
          '100%': { 'background-position': '25% 75%' },
        },
      },
      animation: {
        'bg-shift-1': 'bg-shift-1 2s ease-in-out infinite',
        'bg-shift-2': 'bg-shift-2 1s ease-in-out infinite',
        'bg-shift-3': 'bg-shift-3 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
