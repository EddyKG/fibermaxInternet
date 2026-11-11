/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        'primary-dark': '#3730a3',
        'primary-light': '#6366f1',
        secondary: '#10b981',
        'secondary-dark': '#059669',
        dark: '#1f2937',
        'dark-text': '#f3f4f6'
      }
    },
  },
  plugins: [],
}