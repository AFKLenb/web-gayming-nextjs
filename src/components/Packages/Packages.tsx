'use client';
import usePakages from '@/hooks/usePackages';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Packages = () => {

    const packagesList = usePakages();  

    return (
      <section className='w-full py-16'>
        <div className="container mx-auto">
          <div className="w-full flex flex-col gap-10">
              <h2 className="h2 text-center">Наши тарифы</h2>
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                {packagesList.length > 0 ? packagesList.map((item, index) => {
                  return (
                    <div key={index} className="w-full h-full border border-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center gap-4">
                      <div className='w-[110px] h-[110px] flex items-center justify-center border border-white/70 text-accent rounded-full text-4xl font-semibold'>{item.attributes?.Price}₽</div>
                      <Link href={'/packages/' + item.id} className='group'>
                        <h3 className="text-white text-3xl group-hover:text-accent transition-colors  font-semibold uppercase">{item.attributes?.Name}</h3>
                      </Link>
                      <div className=" flex flex-col items-center justify-center gap-3 mt-4">
                        <div className="w-full h-[250px] overflow-hidden rounded-sm">
                            <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.Image?.data.attributes?.url ?? '')} alt='Изображение компьютера' width={150} height={250} className='roundet-sm w-full h-full object-cover object-top'/>
                        </div>
                        <div className="text-xl mt-4 text-zinc-300 leading-10">{item.attributes?.Computer}</div>
                      </div>
                    </div>
                  )
                })
                :
                [1,2,3].map((item, index) => {
                  return (
                    <div key={index} className="w-[460px] h-[630px] rounded-xl bg-zinc-800 animate-pulse"></div>
                  );
                })}
              </div>
          </div>
        </div>
      </section>
    )
}

export default Packages
