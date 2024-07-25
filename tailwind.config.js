/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gistesy: ['Gistesy', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: {
          light: '#043B8E',
          DEFAULT: '#043B8E',
        },
        secondary: {
          light: '#FFD600',
          DEFAULT: '#FFD600',
        },
        light: {
          background: '#FAF2E9',
        },
      },
    },
    
  },
  variants: {
    extend: {
      borderColor: ['focus'],
      ringColor: ['focus'],
    },
  },
  plugins: [],
}

