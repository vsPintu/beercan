import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import RebelCardSlider from "./components/homepage/RebelCardSlider";
import Header from "./components/homepage/Header";
import FreeShipping from "./components/common/FreeShipping";
import SideBar from "./components/common/SideBar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="max-w-[1440px] app mx-auto">
      <SideBar />
      <FreeShipping />
      <Header />
      <RebelCardSlider />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
