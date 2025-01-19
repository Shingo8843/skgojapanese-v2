/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // Disables dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}', // Match all relevant files in the src folder
    './pages/**/*.{js,jsx,ts,tsx}',    // Include files in the pages directory (Next.js)
    './components/**/*.{js,jsx,ts,tsx}', // Include files in the components directory
  ],
  theme: {
    extend: {
      transitionProperty: {
        'transform': 'transform', // Add specific transform transitions
        'opacity': 'opacity', // Add specific opacity transitions
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        flip: 'flip 0.5s ease-in-out', // Custom flip animation
      },
      perspective: {
        '1000': '1000px', // Perspective for 3D animations
      },
    },
  },
  plugins: [],
};
