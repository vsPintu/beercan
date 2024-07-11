import React from "react";
import heroCanImage from "../../assets/images/homepage/webp/hero_can.webp";
import canShadow from "../../assets/images/homepage/png/can_shadow.png";

const Hero = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-4 flex flex-col-reverse lg:flex-row pb-10 lg:pb-0">
      <div className="w-full">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="font-play font-[700] text-5xl sm:text-6xl lg:text-[94px] leading-[99.5%] lg:pt-[86.29px] text-center lg:text-start">
            Welcome to <span>Rebel Beer</span> Cans
          </h1>
          <p className="font-poppins text-[16px] leading-[150%] max-w-[527px] pt-[11px] pb-[35px] text-center lg:text-start">
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
      <div className="w-full flex justify-center lg:block">
        <div className="lg:w-[568px] sm:w-[300px] w-[250px] h-[300px] sm:h-[350px] lg:h-[626px] relative">
          <img
            src={heroCanImage}
            alt="can"
            className="lg:w-[570px] lg:h-[532px] mt-4 lg:mt-[74px] lg:ml-10"
          />
          <img
            src={canShadow}
            alt="can_shadow"
            className="absolute top-[196px] sm:top-[230px] lg:top-[402px] left-[37px] right-[52px] lg:ml-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
