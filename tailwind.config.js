/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f0f2f4',
          dark: '#0b111e'
        },
        secondary: {
          light: '#babeb4',
          dark: '#151C28'
        },
        accent: {
          light: '#d69e2e',
          dark: '#24ebac'
        },
        textColorDark: {
          primary: 'hsl(219, 4%, 55%)'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
