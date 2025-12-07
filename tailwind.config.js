/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terra: {
          50: '#f2f9ed',
          100: '#e1f2d6',
          200: '#c5e6b3',
          300: '#9ed385',
          400: '#75bd56',
          500: '#559e2a',
          600: '#417d1f',
          700: '#34631b',
          800: '#2d4f1b',
          900: '#264219',
        },
        gray: {
          850: '#1f2937',
          900: '#111827',
          950: '#030712',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
