"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variantsMotion';
import CustomButton from '../CustomButton/CustomButton';

// stile swiper
import 'swiper/css';
import 'swiper/css/navigation';


const HeroSlider = () => {
    
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
        description: "Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков Купи тарков",
    },
];

  return (
    <Swiper className='w-full h-full z-1 relative'>
        {SlideData.map((item, index) =>{
            return (
                <SwiperSlide key={index} className=' '>
                    <div className="w-full md:w-1/2">
                        <motion.h2 variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once:false, amount: 0.2 }} className=" mb-8 md:text-8xl z-1 relative">{item.title}</motion.h2>
                        <motion.p variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once:false, amount: 0.2 }} className=" text-base md:text-xl mb-12 z-1 relative">{`${item.description.length > 189 ? item.description.slice(0, 189) + '...' : item.description }`}</motion.p>
                        <motion.div variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once:false, amount: 0.2 }} className="z-1 relative">
                            <CustomButton containerStyle=' w-[170px] h-[50px]' text='Подробнее' />
                        </motion.div>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default HeroSlider