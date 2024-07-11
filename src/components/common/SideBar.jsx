import React, { useContext } from "react";
import ToggleNavBtn from "./ToggleNavBtn";
import { Link } from "react-router-dom";
import { toggleContext } from "./Context";

const SideBar = () => {
  const { toggleNavBtn, setToggleNavBtn } = useContext(toggleContext);

  return (
    <div
      onClick={() => setToggleNavBtn(!toggleNavBtn)}
      className={`h-full bg-[#574c1d76] fixed top-0 left-[0] duration-500 right-0 z-[99] lg:hidden flex flex-col ${
        toggleNavBtn ? "translate-x-[0%]" : "translate-x-[100%]"
      }`}
    >
      <div className="flex justify-end pt-16 pr-4 z-[99]">
        <ToggleNavBtn />
      </div>
      <div className="bg-[#ffde4d] h-full py-10 px-6 fixed right-0 flex">
        <div className="text-[14px] flex flex-col gap-3 pt-28">
          <Link to="#" className="font-normal !leading-[133%] text-base">
            All Beers
          </Link>
          <Link to="#" className="font-normal !leading-[133%] text-base">
            About Us
          </Link>
          <Link to="#" className="font-normal !leading-[133%] text-base">
            Beer Shop
          </Link>
          <Link to="#" className="font-normal !leading-[133%] text-base">
            Beer Packages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
