import React from "react";
import truck from "/src/assets/images/homepage/webp/delivery-truck 1.webp";
import siteLogo from "/src/assets/images/homepage/webp/logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="header py-1 bg-black text-cararra flex justify-center items-center gap-2">
        <img src={truck} alt="" className="h-6" />
        <p className='font-["play"] text-xs'>Free Shipping Over First Order</p>
      </div>
      <div className="navbar py-2 px-4 lg:px-28 flex justify-between items-center font-poppins bg-red-200">
        <div className="cursor-pointer hover:scale-105 transition duration-1000">
          <img src={siteLogo} alt="" className="nav-logo h-12" />
        </div>
        <div className="nav-links text-[14px] space-x-5 hidden lg:flex items-center">
          <Link>All Beers</Link>
          <Link>About Us</Link>
          <Link>Beer Shop</Link>
          <Link>Beer Packages</Link>
        </div>
        <div className="nav-components flex items-center gap-3 bg-green-300">
          <div className="nav-icons flex items-center gap-2">
            <Link className="border border-silver rounded-full p-1"></Link>
            <Link className="border border-silver rounded-full p-1"></Link>
            <Link className="border border-silver rounded-full p-1"></Link>
          </div>
          <button className="bg-supernova px-4 py-2 rounded-md hidden lg:block">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
