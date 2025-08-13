// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
 // tailwind.config.js
theme: {
  extend: {
    animation: {
      fadeInUp: 'fadeInUp 0.7s ease-out',
    },
    keyframes: {
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
  },
},



  plugins: [],
}
