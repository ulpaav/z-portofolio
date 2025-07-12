// tailwind.config.js
import animationDelay from 'tailwindcss-animation-delay'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-left': { '0%': { transform: 'translateX(-100%)', opacity:'0' }, '100%': { transform: 'translateX(0)', opacity: '1' }, },
        'slide-in-right': { '0%': { transform: 'translateX(100%)', opacity:'0' }, '100%': { transform: 'translateX(0)', opacity: '1' }, },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' }, },
        'fade-up': {'0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' }, },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
      animationDelay: {
      100: '100ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      700: '700ms',
      }
    },
  },
  plugins: [
    animationDelay
  ],
}
