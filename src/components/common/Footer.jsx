import React from "react";
import footerlogo from "../../assets/images/homepage/png/FooterLogo.png";
import {
  FooterInstaIcon,
  FooterFacebookIcon,
  FooterTeligramIcon,
} from "./Icons";
const Footer = () => {
  return (
    <>
      <div className="bg-footerImg text-white">
        <div className="max-w-[1140px] w-full mx-auto flex justify-between pt-[70px]">
          <div className="flex flex-col  w-[152px] h-[122px]">
            <img className="w-[152px] h-[122px] object-contain text-white" src={footerlogo} alt="footerlogo" />
            <div className=" flex justify-start items-center gap-[15px] w-[152px] h-[217px] ml-5 mt-5">
              <FooterInstaIcon className="w-44 h-44" />
              <FooterFacebookIcon className="w-44 h-44" />
              <FooterTeligramIcon className="w-44 h-44" />
            </div>
          </div>

          <div className="lg:w-[743px] lg:h-[204px] max-w-full max-h-full w-full h-full flex flex-col lg:flex-wrap gap-[44px]">
             <div className="w-[237px] h-[204px] ">
                <h1 className="font-play font-bold-[18px]">Contact</h1>
                <p className="font-poppins text-xs py-2 text-nobel">Rebelbeercans</p>
                <p className="font-poppins text-xs py-2 text-nobel">Achterberghstraat 23</p>
                <p className="font-poppins text-xs py-2 text-nobel">5281 AB Boxtel</p>
                <p className="font-poppins text-xs py-2 text-nobel">Contac @rebelbeercans.nl</p>
             </div>
             <div className="w-[237px] h-[204px] ">
                <h1 className="font-play font-bold-[18px]">Information</h1>
                <p className="font-poppins text-xs py-2 text-nobel">Returns</p>
                <p className="font-poppins text-xs py-2 text-nobel">Payment options</p>
                <p className="font-poppins text-xs py-2 text-nobel">My Account</p>
                <p className="font-poppins text-xs py-2 text-nobel">Responsible alcohol consumption</p>
             </div>
             <div className="w-[237px] h-[204px] ">
                <h1 className="font-play font-bold-[18px]">Conditions(nl)</h1>
                <p className="font-poppins text-xs py-2 text-nobel">Remove cookies</p>
                <p className="font-poppins text-xs py-2 text-nobel">Cookies statement rebelbeercan</p>
                <p className="font-poppins text-xs py-2 text-nobel">Disclaimer rebelbeercan</p>
                <p className="font-poppins text-xs py-2 text-nobel">General terms and conditions rebelbeercans</p>
                <p className="font-poppins text-xs py-2 text-nobel">Privacy policy rebelbeercans</p>
             </div>
          </div>
        </div>
        <p className="border-t-[2px] max-w-full w-full h-[62px] font-poppins py-4 text-center border-mineShaft  text-doveGray">2022 Rebelbeerscans.All rights reserved. / Ontwikkeld: Robin -Roeslofs.nl</p>
      </div>
    </>
  );
};

export default Footer;
