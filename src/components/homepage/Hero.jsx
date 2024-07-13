import React from "react";
import heroCanImage from "../../assets/images/homepage/webp/hero_can.webp";
import canShadow from "../../assets/images/homepage/png/can_shadow.png";

const Hero = () => {
  
  return (
    <div className="max-w-[1140px] mx-auto px-4 flex flex-col-reverse lg:flex-row">
      <div className="w-full">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="font-play font-[700] text-5xl lg:text-7xl xl:text-[94px] leading-[99.5%] pt-[86.29px] text-center lg:text-start">
            Welcome to <span>Rebel Beer</span> Cans 
          </h1>
          <p className="font-poppins text-[16px] leading-[150%] max-w-[490px] lg:max-w-[390px] xl:max-w-[527px] pt-[11px] pb-[35px] text-center lg:text-start">
            Mi posuere maecenas sed morbi non feugiat eget euismod potenti. Enim
            amet adipiscing at hac nisl massa.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="font-poppins text-[16px] bg-white px-4 py-[18px] rounded-[5px]">
              Shop the latest beers now!
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-start">
        <div className="relative">
          <img
            src={heroCanImage}
            alt="can"
            className="max-h-[232px] lg:max-h-[532px] lg:pt-[74px] lg:pl-[40px]"
          />
          <img
            src={canShadow}
            alt="can_shadow"
            className="absolute -bottom-[45px] lg:-bottom-[87px] -right-6 lg:-right-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
