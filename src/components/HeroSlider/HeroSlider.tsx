"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// stile swiper
import 'swiper/css';
import 'swiper/css/navigation';

const SlideData= [
    {
        title: "Я Никита Буянов",
        description: "Купи тарков",
    },
    {
        title: "Купи тарков ",
        description: "Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков",
    },
    {
        title: "Купи тарков ",
        description: "Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков",
    },
];

const HeroSlider = () => {
  return (
    <Swiper className='w-full h-full '>
        {SlideData.map((item, index) =>{
            return (
                <SwiperSlide key={index} className=' '>
                    <div className="w-full">
                        <h2 className="">{item.title}</h2>
                        <p className="">{item.description}</p>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default HeroSlider
