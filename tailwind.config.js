/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          generalsans: ['General Sans', 'sans-serif'],
        },
        colors: {
            black: {
                DEFAULT: '#000',
                100: '#010103',
                200: '#0E0E10',
                300: '#1C1C21',
                500: '#3A3A49',
                600: '#1A1A1A',
            },
            white: {
                DEFAULT: '#FFFFFF',
                800: '#E4E4E6',
                700: '#D6D9E9',
                600: '#AFB0B6',
                500: '#62646C',
            },
            floral_white : { 
                DEFAULT: '#fffcf2', 
                100: '#634c00', 
                200: '#c69800', 
                300: '#ffcd2a', 
                400: '#ffe48d', 
                500: '#fffcf2', 
                600: '#fffcf3', 
                700: '#fffdf6', 
                800: '#fffef9', 
                900: '#fffefc' 
                }, 
            timberwolf : { 
                DEFAULT: '#ccc5b9', 
                100: '#2d2821', 
                200: '#5a5141', 
                300: '#877962', 
                400: '#ab9f8b', 
                500: '#ccc5b9', 
                600: '#d6d0c6', 
                700: '#e0dcd4', 
                800: '#eae8e3', 
                900: '#f5f3f1' 
            }, 
            black_olive : { 
                DEFAULT: '#403d39', 
                100: '#0d0c0c', 
                200: '#1a1917', 
                300: '#272523', 
                400: '#34312e', 
                500: '#403d39', 
                600: '#6a655e', 
                700: '#928c84', 
                800: '#b6b2ad', 
                900: '#dbd9d6' 
            }, 
            eerie_black: { 
                DEFAULT: '#252422', 
                100: '#070707', 
                200: '#0f0e0e', 
                300: '#161615', 
                400: '#1e1d1b', 
                500: '#252422', 
                600: '#53514c', 
                700: '#807d76', 
                800: '#aba8a4', 
                900: '#d5d4d1' 
            }, 
            celestial_blue : { 
                DEFAULT: '#3694d3', 
                100: '#0a1e2b', 
                200: '#133c57', 
                300: '#1d5a82', 
                400: '#2678ae', 
                500: '#3694d3', 
                600: '#5eaadc', 
                700: '#87bfe5', 
                800: '#afd4ed', 
                900: '#d7eaf6' 
            },
            flame: { 
                DEFAULT: '#eb5e28', 
                100: '#321205', 
                200: '#652309', 
                300: '#97350e', 
                400: '#ca4713', 
                500: '#eb5e28', 
                600: '#ef7f53', 
                700: '#f39f7e', 
                800: '#f7bfa9', 
                900: '#fbdfd4' 
            }
        },
        backgroundImage: {
          terminal: "url('/assets/terminal.png')",
        },
      },
    },
    plugins: [],
  };