import React from 'react'
// import { ChevronLeft } from 'lucide-react';
// import { ChevronRight } from 'lucide-react';
import { Heart } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import { bottle } from '../helper/index';
import { HeartIcon } from './Icons';

const RebelCardSlider = () => {
  return (
    <>
      <div className='w-full'>
         
        <div className='w-full mt-8 lg:px-6 flex flex-wrap lg:flex-wrap gap-6 lg:gap-6 items-center pb-10 lg:pb-10 justify-center'>

         {bottle.map((item,index)=>{
           return <div key={index} className='w-[285px] h-[400px] flex justify-center items-start flex-col border-2 border-solid border-neutral-700 border-t-8 rounded-md p-3 group hover:bg-supernova duration-300 cursor-pointer'>
            <div className='w-[255px] h-[250px] bg-gallery'>
              <div className='flex justify-between'>
                <p className='bg-supernova w-[70px] h-[25px] group-hover:bg-black duration-300 group-hover:text-white'>{item.save}</p>
                {/* <Heart className='w-[24px] h-[24px] bg-white p-1 m-1 rounded-full group-hover:bg-red duration-300' /> */}
                {/* <div className='h-6 w-6 rounded-full bg-white flex justify-center items-center'> */}
                <HeartIcon/>
             
              </div>
              <div className='flex justify-center items-center'>
                 <img src={item.image} alt='cane'/>
             </div>
           </div>
           <p className='font-["play"] mt-1 text-[16px]'>{item.disc}</p>
           <p className='mt-2 font-["inter"] h-[22px] w-[130px] items-center px-1 text-sm bg-remy rounded-sm'>{item.para}</p>
           <div className='w-full flex mt-3 justify-between'>
            <p className='text-xl text-supernova font-semibold group-hover:text-black duration-300'> <span className='text-2xl font-semibold font-["poppins"]'>€</span>{item.rating}</p>
            <SquarePlus className='text-neutral-700' />
           </div>
           </div>

    })}
  
</div>
      </div>
    </>
  )
}

export default RebelCardSlider
