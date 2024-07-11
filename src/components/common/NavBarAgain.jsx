import React, { useState } from "react";
import { ClosedIcon, MenuIcon } from "./Icons";

const NavBarAgain = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-black py-4">
      <div className="max-w-[1200px] mx-auto px-4 xl:px-0">
        <div className="flex justify-between">
          <p className="text-white text-4xl font-bold">Logo</p>
          <div className="gap-5 hidden lg:flex">
            <p className="text-white text-2xl font-bold">link</p>
            <p className="text-white text-2xl font-bold">link</p>
            <p className="text-white text-2xl font-bold">link</p>
            <p className="text-white text-2xl font-bold">link</p>
          </div>
          <div
            onClick={() => setActive(true)}
            className="lg:hidden flex justify-center items-center"
          >
            <MenuIcon />
          </div>
        </div>
        <div
          className={`${
            active ? "flex left-0" : " -left-full"
          } min-h-screen bg-black fixed top-0 z-20  justify-center items-center w-full h-full duration-500`}
        >
          <div
            onClick={() => setActive(false)}
            className="end-6 top-6 absolute"
          >
            <ClosedIcon />
          </div>
          <div className="gap-5 flex flex-col">
            <p
              onClick={() => setActive(false)}
              className="text-white text-2xl font-bold"
            >
              link
            </p>
            <p
              onClick={() => setActive(false)}
              className="text-white text-2xl font-bold"
            >
              link
            </p>
            <p
              onClick={() => setActive(false)}
              className="text-white text-2xl font-bold"
            >
              link
            </p>
            <p
              onClick={() => setActive(false)}
              className="text-white text-2xl font-bold"
            >
              link
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarAgain;
