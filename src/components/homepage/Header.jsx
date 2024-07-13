import React from "react";
import Navbar from "../common/Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className="min-h-[calc(100vh-40px)] app w-full flex flex-col bg_image bg-heroBg bg-no-repeat overflow-hidden">
      <Navbar />
      <div className="flex-grow-[1]">
        <Hero />
      </div>
    </div>
  );
};

export default Header;
