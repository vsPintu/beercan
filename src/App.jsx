import React from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/homepage/Hero";
import Header from "./components/homepage/Header";
import RebelCardSlider from "./components/common/RebelCardSlider";
import FreeShipping from "./components/common/FreeShipping";
import SideBar from "./components/common/SideBar";
import HeroSlider from "./components/common/HeroSlider";
import OffersAndPackage from "./components/homepage/OffersAndPackage";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <SideBar />
      <FreeShipping />
      <Header />
      <HeroSlider />
      <OffersAndPackage />
      <RebelCardSlider />
    </div>
  );
}

export default App;
