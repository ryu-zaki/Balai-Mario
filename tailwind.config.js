/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '930px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

     colors: {
      "dark": "#0c0403",
      "darkBrown": "#2e2517",
      "darkRed": "#3b1c10",
      "brown": "#90591a",
      "gray": "#555",
      "lightOrange": "#c46e24",
      "darkOverlay": "rgba",
      "pureWhite": "#fff",

      /* Overlay */
      "darkOverlay": "rgba(46,37,23, .7)",
      "imgOverlay": "rgba(46,37,23, .4)"
     }
  },
  plugins: [],
}
