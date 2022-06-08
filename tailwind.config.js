module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // purge: [],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myLightPurple: '#8E2DE2',
        myDarkPurple: '#4A00E0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
