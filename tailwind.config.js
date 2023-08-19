/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    fontFamily: {
      Pacifico: ['Pacifico', 'cursive'],
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },

      fontSize: {
        'xxs': '10px',
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '42px',
        '7xl': '48px',
        'hero-heading': '60px',
        'primary-heading': '32px',
        'secondary-heading': '24px',
        'paragraph': '14px',
      },
      colors: {
        'darkgray': '#5B6873',
        'Stroke': '#E2E2E2',
        'header': '#FF515B',
        'footer': '#08847B',
        'primary': '#FF515B',
        'secondary': '#000'
      },
      padding: {
        'xs': '10px',
        'sm': '16px',
        'md': '24px',
        'lg': '36px',
        'xl': '42px',
        'xxl': '70px',
      },
      margin: {
        'xs': '10px',
        'sm': '16px',
        'md': '24px',
        'lg': '36px',
        'xl': '42px',
        'xxl': '70px',
      },
      fontFamily: {
        'poppins':'Poppins',
        'montserrat': 'Montserrat',
        
      },

      fontWeight: {
        'medium':'500',
        'semibold': '700',
      },
    },
  },
  plugins: [],
}

