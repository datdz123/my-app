/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          pinkColor:"#F52AF5",
          blueColor:"#332FD0",
          greenColor:"#00FF57",
          redColor:"#FF0000 ",
          lightBlue:"#15BFFD",
          blackColor:"#191E35",

    },

    backgroundImage:{
     buttonBG: "linear-gradient(93deg, #F52AF5 4.14%, #DD37F5 31.35%, #219BF2 73.51%, #00ADF2 95.21%)",
    },
    fontFamily: {
      font1: ['Inter', 'sans-serif'],
      font2: ['Jura', 'sans-serif'],
      
    },
    },
    
  },
  plugins: [],
}
