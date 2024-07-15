// import img from "./src/assets/images/homepage/png/Footer_bg_image.png"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cararra: "#f0f0ea",
        supernova: "#ffcc02",
        silver: "#cccccc",
        gallery:"#EBEBEB",
        remy:"#fde1f2",
        mineShaft:"#333333",
        doveGray:"#666666",
        nobel:"#B6B6B6",
      },
      fontFamily: {
        poppins: "poppins",
        inter: "inter",
        roboto: "roboto",
        play: "play",
      },
      backgroundImage:{
        heroBg: "url('./assets/images/homepage/webp/hero_bg_image.webp')",
        footerImg: "url('./src/assets/images/homepage/png/Footer_bg_image.png')",
      },
    },
  },
  plugins: [],
};
