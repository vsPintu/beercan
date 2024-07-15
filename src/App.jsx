import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SideBar from "./components/common/SideBar";
import Footer from "./components/common/Footer";
import Header from "./components/homepage/Header";
import RebelCardSlider from "./components/homepage/RebelCardSlider";
import FreeShipping from "./components/common/FreeShipping";

function App() {
  return (
    <div>
      <FreeShipping />
      <Header />
      <RebelCardSlider />
      <Footer />
    </div>
  );
}

export default App;
