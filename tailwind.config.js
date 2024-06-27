/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'purple': 'rgba(203,184,255,0.5)',
        'orange': 'rgba(248,163,84,0.3)',
        'darkorange': '#FF7B3A',
        'white': '#fff',
        'black': '#000',
        'darkgray': '#898989',
        'gray': '#D3D4D4',
        'blue': '#0A7ABF',
        'footer': '#9BB2D5',
      },
      fontFamily: {
        "head": '"Arimo", sans-serif',
      },
      dropShadow: {
        'text': '1px 2px 4px rgba(0, 0, 0, 0.9)',
        'bg': '1px 2px 1.5px rgba(255, 255, 255, 0.9)',
      },
      borderRadius: {
        'large': '3rem',
      }
  
    },
  },
  plugins: [],
}

