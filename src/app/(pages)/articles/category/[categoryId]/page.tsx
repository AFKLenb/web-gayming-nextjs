'use client';
import useArticlesByCategory from '@/hooks/useArticlesByCategory';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function page({params}) {

    const getArticles = useArticlesByCategory(params.categoryId);
    
  return (
    <section className='w-full py-16'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col  gap-10">
            <div className="">
                {getArticles.attributes?.category?.data.attributes?.name ?
                    <h2 className="h2 text-center block">Категория: {getArticles.attributes?.category?.data.attributes?.name}</h2>
                :
                    <div className='w-full mt-10 flex flex-col gap-4'>
                        <div className="w-full h-12 rounded-lg bg-zinc-800 animate-pulse"></div>
                    </div>
                }
            </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {getArticles.length > 0 ? getArticles.map((item, index) => {
                        return(
                            <div key={index} className = "w-full border border-zinc-800 rounded-xl relative" >
                                <div className="w-full h-[350px] overflow-hidden rounded-xl relative">
                                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt={'Картинка записи'} width={270} height={270} className='w-full h-full object-cover object-top' />
                                    <div className="w-full flex flex-col items-start justify-betweenn absolute bottom-0 bg-zinc-700/90 p-2 ">
                                        <div className="w-full flex items-start justify-between mb-3">
                                            <Link href={'/articles/category/' + item.attributes?.category?.data.id} className='text-zinc-300 font-medium text-sm hover:text-accent transition-colors'>{item.attributes?.category?.data.attributes?.name}</Link>
                                            <span className='text-zinc-300 font-medium text-sm'>{item.attributes?.updatedAt.slice(0,10)}</span>
                                        </div>
                                        <Link href={'/articles/' + item.id} className='group'>
                                            <h3 className=" text-black text-2xl group-hover:text-accent transition-colors font-semibold">{item.attributes?.name.length > 15 ? item.attributes?.name.slice(0,15) + '...' : item.attributes?.name }</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    [1,2,3,4].map((item, index) => {
                      return (
                        <div key={index} className="w-full h-[350px] rounded-xl bg-zinc-800 animate-pulse"></div>
                      );
                    })}
                </div>
            </div>
      </div>
    </section>
  )
}
