import React from "react";
import { CartIcon, SearchIcon, UserIcon } from "./Icons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
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
  );
};

export default NavIcons;
