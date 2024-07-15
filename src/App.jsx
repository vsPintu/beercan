import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import RebelCardSlider from "./components/homepage/RebelCardSlider";
import Header from "./components/homepage/Header";
import FreeShipping from "./components/common/FreeShipping";
import SideBar from "./components/common/SideBar";
<<<<<<< HEAD
import HeroSlider from "./components/common/HeroSlider";
import OffersAndPackage from "./components/homepage/OffersAndPackage";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
=======
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="max-w-[1440px] app mx-auto">
>>>>>>> f16ca9ebce58068dafe8eda80cb034de398599c5
      <SideBar />
      <FreeShipping />
      <Header />
      <HeroSlider />
      <OffersAndPackage />
      <RebelCardSlider />
      <Footer />
    </div>
  );
}

export default App;
