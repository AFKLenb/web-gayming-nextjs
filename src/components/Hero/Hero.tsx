import React from 'react'
import HeroSlider from '../HeroSlider/HeroSlider'

const Hero = () => {
  return (
    <section className='w-full bg-hero bg-cover bg-center bg-no-repeat z-[-100]' id='hero'>
      <div className="container mx-auto">
        <div className="w-full py-16 cursor-pointer">
            <HeroSlider />
        </div>
      </div>
    </section>
  )
}

export default Hero