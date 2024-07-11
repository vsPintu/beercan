import React from "react";
import Navbar from "../common/Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className="max-h-[calc(100vh-40px)] w-full flex flex-col bg_image bg-heroBg bg-no-repeat">
      <Navbar />
      <div className="flex-grow-[1]">
        <Hero />
      </div>
    </div>
  );
};

export default Header;
