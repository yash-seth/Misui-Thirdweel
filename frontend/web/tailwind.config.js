module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          600:"#ea580c"
        },
        secondary:{
          700:"#292524"
        }

      },
      width:{
        md:"80vw", 
        sm:"95vw"
      }
    },
  },
  plugins: [],
}
