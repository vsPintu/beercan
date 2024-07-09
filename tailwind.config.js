/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cararra: "#f0f0ea",
        supernova: "#ffcc02",
        silver: "#cccccc",
      },
      fontFamily: {
        poppins: "poppins",
        inter: "inter",
        roboto: "roboto",
        play: "play",
      },
    },
  },
  plugins: [],
};
