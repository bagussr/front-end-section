/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#100F1A',
        secondary: '#140F1A',
        darkpurple: '#1A0554',
        lightpurple: '#664EAE',
        bgRegisTL: 'rgba(76,75,82,1)',
        bgRegisBR: 'rgba(22,18,29,1)'
      },
      content: {
        'bg-vector-left': "url('images/vectorLeft.svg')",
        'bg-vector-right': "url('images/vectorRight.svg')",
      },
      backgroundImage: {
        'left-vector': "url('images/vectorLeft.svg')",
        'right-vector': "url('images/vectorRight.svg')",
      },
      backgroundColor: {
        'main': 'background: linear-gradient(133.39deg, #100F1A -18.47%, #140F1A 111.16%)',
        // 'bgRegister': 'background: linear-gradient(135deg, rgba(76,75,82,1) 0%, rgba(22,18,29,1) 100%)',
        'gradient-first': '#100F1A',
        'gradient-second': '#140F1A'
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '50%':{
            opacity: '0.5',
            transform: 'translateY(5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '50%':{
            opacity: '0.5',
            transform: 'translateX(5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
          '50%':{
            opacity: '0.5',
            transform: 'translateX(-5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down .7s ease-out',
        'fade-in-left': 'fade-in-left .7s ease-out',
        'fade-in-right': 'fade-in-right .7s ease-out',
      }
    },
  },
  plugins: [],
}
