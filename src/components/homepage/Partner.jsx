import React from 'react'
import Slider from "react-slick";
import Image1 from '../../assets/images/homepage/png/Frame 167.png'
import Image2 from '../../assets/images/homepage/png/Frame 168.png'
import Image3 from '../../assets/images/homepage/png/Frame 169.png'
import Image4 from '../../assets/images/homepage/png/image 13.png'
import Image5 from '../../assets/images/homepage/png/image 15.png'
import Image6 from '../../assets/images/homepage/png/image 23.png'



const Partner = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        // speed: 2500,
        // autoplaySpeed: 0,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        pouseonhover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    };
    return (
        <>
            <section className='bg_heading bg-red'>
                <div className='relative overflow-hidden max-w-[1140px] mx-auto px-6'>
                    <div className='py-40'>
                        <Slider {...settings} className='op-hover flex items-center pt-4'>
                            <div className='px-4 flex justify-center items-center'>
                                <img className='w-full cursor-pointer' src={Image1} alt="bitcoin" />
                            </div>
                            <div className='px-4 flex justify-center items-center'>
                                <img className='w-full cursor-pointer' src={Image2} alt="bitcoin" />
                            </div>
                            <div className='px-4 flex justify-center items-center'>
                                <img className='w-full cursor-pointer' src={Image3} alt="bitcoin" />
                            </div>
                            <div className='px-4 flex justify-center items-center'>
                                <img className='w-full cursor-pointer' src={Image4} alt="bitcoin" />
                            </div>
                            <div className='px-4 flex justify-center items-center'>
                                <img className='w-full cursor-pointer' src={Image5} alt="bitcoin" />
                            </div>
                            <div className='px-4 flex justify-center items-center'>
                                <img className='w-full cursor-pointer' src={Image6} alt="bitcoin" />
                            </div>
                            <div className='px-4 flex justify-center items-center'>
                                <img className='w-full cursor-pointer' src={Image3} alt="bitcoin" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Partner