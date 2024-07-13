import React, { useState } from "react";
import siteLogo from "/src/assets/images/homepage/webp/logo.webp";
import { Link } from "react-router-dom";
import { CartIcon, SearchIcon, UserIcon } from "./Icons";
import ToggleNavBtn from "./ToggleNavBtn";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div>
      <div className="min-h-[70px] px-4 xl:px-0 flex justify-between items-center font-poppins max-w-[1140px] mx-auto sticky top-0">
        <div className="cursor-pointer hover:scale-105 transition duration-1000 h-12 w-12">
          <img src={siteLogo} alt="" className="" />
        </div>
        <div className="text-base font-normal !leading-[150%] hidden lg:flex items-center justify-center ml-44 pl-16 gap-[20px]">
          <Link to="#">All Beers</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Beer Shop</Link>
          <Link to="#">Beer Packages</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="md:flex hidden">
            <NavIcons />
          </div>
          <button className="bg-supernova py-3 px-4 rounded-md text-base font-normal font-poppins">
            Contact Us
          </button>
          <ToggleNavBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
