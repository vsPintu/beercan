import React from "react";
import Slider from "react-slick";
import { HeartIcon, SquarePlusIcon } from "../common/Icons";
import { bottle } from "../common/helper";

const RebelCardSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    // speed: 2500,
    // autoplaySpeed: 0,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pouseonhover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },

      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className=" overflow-hidden py-2">
      <div className='w-full max-w-[1140px] mx-auto'>
        <div className='flex lg:justify-between lg:items-center justify-center items-center '>
            <div className='px-4'>
              <h1 className='text-4xl lg:text-5xl font-play font-semibold'>Rebel Selection!</h1>
              <p className='text-xs lg:text-lg text-black font-poppins mt-2 max-w-lg'>Aliquet commodo in vulputate ac vitae nam egestas. Dui orci aliquet hendrerit auctor augue tellus.</p>
            </div>
         </div>
      </div>
        <div className="w-full max-w-[1140px] mx-auto">
          <Slider {...settings} className="flex ">
            {bottle.map((item, index) => {
              return (
                <div className="px-2 py-6">
                  <div
                    key={index}
                    className="max-w-[600px] w-full h-[400px] flex justify-center items-start flex-col border-2 border-solid border-neutral-700 border-t-8 rounded-md p-3  group hover:bg-supernova duration-300 cursor-pointer"
                  >
                    <div className="w-full h-[250px] bg-gallery">
                      <div className="flex justify-between">
                        <p className="bg-supernova w-[70px] h-[25px] group-hover:bg-black duration-300 group-hover:text-white">
                          {item.save}
                        </p>
                        <div className="py-1 px-1">
                          <HeartIcon />
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <img src={item.image} alt="cane" />
                      </div>
                    </div>
                    <p className="font-play mt-1 text-[16px]">{item.disc}</p>
                    <p className="mt-2 font-inter h-[22px] w-[130px] items-center px-1 text-sm bg-remy rounded-sm">
                      {item.para}
                    </p>
                    <div className="w-full flex mt-3 justify-between">
                      <p className="text-xl text-supernova font-semibold group-hover:text-black duration-300">
                        {" "}
                        <span className="text-2xl font-semibold font-poppins">
                          €
                        </span>
                        {item.rating}
                      </p>
                      <SquarePlusIcon />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default RebelCardSlider;
