"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Games = ({ getGames }) => {


    return (
        <section className='w-full py-16'>
            <div className="container mx-auto">
                <div className="w-full flex flex-col gap-10">
                    <h2 className="h2 text-center">Игры клуба</h2>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                        {getGames.length > 0 ? getGames.map((item, index) => {
                            return (
                                <div key={index} className = "w-full border border-zinc-800 rounded-xl p-5" >
                                <div className="w-full h-[270px] overflow-hidden rounded-xl">
                                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt={'Картинка записи'} width={270} height={270} className='w-full h-full object-cover object-top' />
                                </div>
                                <div className="w-full flex items-center justify-between mt-6 mb-5">
                                    <Link href={''} className='text-zinc-500 font-medium text-sm'>{item.attributes?.genre}</Link>
                                    <span className='text-zinc-500 font-medium text-sm'>{item.attributes?.date.slice(0,10)}</span>
                                </div>
                                <Link href={'/games/' + item.id} className='group'>
                                    <h3 className="text-white text-2xl group-hover:text-accent transition-colors font-semibold">{item.attributes?.name.length > 15 ? item.attributes?.name.slice(0,15) + '...' : item.attributes?.name }</h3>
                                </Link>
                            </div>
                            ) 
                          })
                          :
                          [1,2,3,4].map((item, index) => {
                            return (
                              <div key={index} className="w-[340px] h-[400px] rounded-xl bg-zinc-800 animate-pulse"></div>
                            );
                          })}
                </div>
            </div>
        </div>
    </section >
  )
}

export default Games
