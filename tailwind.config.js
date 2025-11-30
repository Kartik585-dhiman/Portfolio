/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Critical for the toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6', // Blue-500
        secondary: '#8b5cf6', // Violet-500
        dark: '#0f172a', // Slate-900
      }
    },
  },
  plugins: [],
}
