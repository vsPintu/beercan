import React from "react";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Navbar from "./components/common/Navbar";
// import NavBarAgain from "./components/common/NavBarAgain";
import RebelCardSlider from "./components/homepage/RebelCardSlider";
// import Partner from "./components/homepage/Partner";

function App() {

  return (
    <div >
    {/* <NavBarAgain/> */}
      <Navbar />
      <RebelCardSlider/>
      {/* <Partner/> */}
    </div>
  );
}

export default App;
