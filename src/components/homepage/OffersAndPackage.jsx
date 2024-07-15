import React from 'react'
import offerImg from "../../assets/images/homepage/webp/Frame 167.webp"
import beerPackageImg from "../../assets/images/homepage/webp/Frame 168 (1).webp"
import newBeerImg from "../../assets/images/homepage/webp/Frame 169.webp"

const OffersAndPackage = () => {
  return (
    <div className='w-full px-4 pt-[77px]'>
      <div className="max-w-[1140px] mx-auto">
        <div className="max-w-[363px] h-[400px] bg-red-300 rounded-[5px] relative">
          <img src={offerImg} alt="" />
          <button className='font-play font-bold text-[28px] leading-[110%] uppercase py-8 px-[92px] bg-white rounded-[5px] border-[2px] border-black absolute -bottom-14 left-9 right-9'>Offers</button>
        </div>
      </div>
    </div>
  )
}

export default OffersAndPackage
