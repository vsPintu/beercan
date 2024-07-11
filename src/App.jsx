import React from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/homepage/Hero";
import Header from "./components/homepage/Header";
import RebelCardSlider from "./components/common/RebelCardSlider";
import FreeShipping from "./components/common/FreeShipping";
import SideBar from "./components/common/SideBar";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <SideBar/>
      <FreeShipping />
      <Header />
      <RebelCardSlider />
    </div>
  );
}

export default App;
