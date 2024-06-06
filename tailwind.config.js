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
          dark: '#23d59d'
        }
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: []
}
