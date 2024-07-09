/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'supernova':"#FFCC02",
        gallery:"#EBEBEB",
        remy:"#fde1f2",
        red:"#ff0000"
      }
    },
  },
  plugins: [],
}

