/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'purple': 'rgba(203,184,255,0.5)',
        'orange': 'rgba(248,163,84,0.7)',
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
    },
  },
  plugins: [],
}

