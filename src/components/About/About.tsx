import React from 'react'

const About = () => {
  return (
    <section className=' w-full py-16 '>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
            <h2 className="h2 text-center">О нашем tarkov Клубе</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
                <div className="w-full h-full border border-zinc-700 p-5 rounded-[12px] flex flex-col items-center justify-center gap-[16px]">
                    <div className="w-[110px] h-[110px] flex items-center justify-center border-2 font-semibold border-white/70 text-accent rounded-full text-4xl">999</div>
                    <h3 className="text-3xl text-center">Читеров</h3>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
