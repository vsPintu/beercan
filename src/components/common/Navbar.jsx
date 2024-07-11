import React, { useState } from "react";
import siteLogo from "/src/assets/images/homepage/webp/logo.webp";
import { Link } from "react-router-dom";
import { CartIcon, SearchIcon, UserIcon } from "./Icons";
import ToggleNavBtn from "./ToggleNavBtn";

const Navbar = () => {

  return (
    <div>
      <div className="py-2 px-4 xl:px-0 flex justify-between items-center font-poppins max-w-[1140px] mx-auto sticky top-0">
        <div className="cursor-pointer hover:scale-105 transition duration-1000 h-12 w-12">
          <img src={siteLogo} alt="" className="" />
        </div>
        <div className="text-[14px] space-x-5 hidden lg:flex items-center flex-grow justify-center ml-44 pl-16">
          <Link to="#" className="text-base font-normal !leading-[133%] ">
            All Beers
          </Link>
          <Link to="#" className="text-base font-normal !leading-[133%]">
            About Us
          </Link>
          <Link to="#" className="text-base font-normal !leading-[133%]">
            Beer Shop
          </Link>
          <Link to="#" className="text-base font-normal !leading-[133%]">
            Beer Packages
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Link className="border border-silver rounded-full h-8 w-8 sm:h-9 sm:w-9 flex justify-center items-center">
              <SearchIcon />
            </Link>
            <Link className="border border-silver rounded-full h-8 w-8 sm:h-9 sm:w-9 flex justify-center items-center">
              <UserIcon />
            </Link>
            <Link className="border border-silver rounded-full h-8 w-8 sm:h-9 sm:w-9 flex justify-center items-center">
              <CartIcon />
            </Link>
          </div>
          <button className="bg-supernova py-3 px-4 rounded-md text-base font-normal font-poppins">
            Contact Us
          </button>
          <ToggleNavBtn/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
