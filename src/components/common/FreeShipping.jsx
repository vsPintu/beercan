import React from "react";
import truck from "/src/assets/images/homepage/webp/delivery-truck 1.webp";

const FreeShipping = () => {
  return (
    <div className="py-[5px] bg-black text-cararra flex justify-center items-center gap-3 sticky top-0 z-[1]">
      <img src={truck} alt="" className="h-[30px] w-[30px]" />
      <p className="font-play text-sm leading-[115%] font-normal">
        Free Shipping Over First Order
      </p>
    </div>
  );
};

export default FreeShipping;
