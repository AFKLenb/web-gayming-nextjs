"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variantsMotion';
import CustomButton from '../CustomButton/CustomButton';

// stile swiper
import 'swiper/css';
import 'swiper/css/navigation';
import useArticlesBanner from '@/hooks/useArticlesBanner';


const HeroSlider = () => {
    
    const articles = useArticlesBanner();

  return (
    <Swiper className='w-full h-full z-1 relative'>
        {articles.map((item, index) =>{
            return (
                <SwiperSlide key={index} className=' '>
                    <div className="w-full md:w-1/2">
                        <motion.h2 variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once:false, amount: 0.2 }} className=" mb-8 md:text-5xl z-1 relative">{`${item.attributes?.name.length > 40 ? item.attributes?.name.slice(0, 40) + '...' : item.attributes?.name }`}</motion.h2>
                        <motion.p variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once:false, amount: 0.2 }} className=" text-base md:text-xl mb-12 z-1 relative">{`${item.attributes?.smallText.length > 189 ? item.attributes?.smallText.slice(0, 189) + '...' : item.attributes?.smallText }`}</motion.p>
                        <motion.div variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once:false, amount: 0.2 }} className="z-1 relative">
                            <CustomButton containerStyle=' w-[170px] h-[50px]' text='Подробнее' href={'/articles/' + item.attributes?.slug} />
                        </motion.div>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default HeroSlider