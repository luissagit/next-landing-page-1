module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        transparent: {
          '0%' : { opacity: 0 },
          '100%': { opacity: 1 }
        },
        scaleHeight: {
          '0%': { transform: 'scale-y-0' },
          '100%': { transform: 'scale-y-100' }
        }
      },
      animation: {
        fadeIn: 'transparent 0.3s ease-in-out',
        scaleTheHeight: 'scaleHeight 0.3s ease-in-out'
      },
      colors: {
        primary: {
          "100": "#282E63",
          "200": "#303669",
          "300": "#393F6F"
        },
        secondary: {
          "100": "#3A88EC",
          "200": "#78C2FF"
        },
        pink: "#FF3E81",
        bg: "#FBFBFB",
        bg2: "#F9F9F9"
      },
      fontFamily: {
        round: ['Varela Round', 'sans serif'],
        body: ['Rubik', 'sans serif']
      },
    },
  },
  variants: {},
  plugins: [],
}
