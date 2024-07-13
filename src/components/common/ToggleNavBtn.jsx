import React, { useState, useContext } from "react";
import { toggleContext } from "./Context";

const ToggleNavBtn = () => {
  const { toggleNavBtn, setToggleNavBtn } = useContext(toggleContext);
  return (
    <div
      onClick={() => setToggleNavBtn(!toggleNavBtn)}
      className="block lg:hidden space-y-[6px] cursor-pointer"
    >
      <div
        className={`bg-black w-3 h-[1.5px] duration-500 rounded-full ${
          toggleNavBtn && `w-5 rotate-45 translate-y-2`
        }`}
      ></div>
      <div
        className={`bg-black w-4 h-[1.5px] duration-500 rounded-full ${
          toggleNavBtn && `w-[0px]`
        }`}
      ></div>
      <div
        className={`bg-black w-5 h-[1.5px] duration-500 rounded-full ${
          toggleNavBtn && `-rotate-45 translate-y-[-6.6px]`
        }`}
      ></div>
    </div>
  );
};

export default ToggleNavBtn;
