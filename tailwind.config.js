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
          light: '#f8f9fa',
          dark: '#011627'
          // dark: '#031a35'
        },
        secondary: {
          light: '#b0bec5',
          dark: '#121C2C'
        },
        accent: {
          light: '#d69e2e',
          dark: '#00bcd4'
        },
        textColorDark: {
          primary: '#cfd8dc'
        },
        textColorLight: {
          primary: '#011627'
        },
        borderColorDark: {
          primary: '#546e7a'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
