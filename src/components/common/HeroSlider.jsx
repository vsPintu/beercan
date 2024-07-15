import React from "react";
import img from "../../assets/images/homepage/webp/logo.webp";
import { heroSliderLogo } from "./helper";
import Marquee from "react-fast-marquee";

const HeroSlider = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="px-[1px] py-[1px]">
        <Marquee speed={20} className="z-[-1]">
          {heroSliderLogo.map((logo, index) => (
            <div className="w-60 h-52 sm:w-72 border border-silver sm:h-60 flex justify-center items-center">
              <img
                src={logo}
                alt=""
                className="w-[143px] h-[143px] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HeroSlider;
