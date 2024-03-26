"use client";
import useArticles from '@/hooks/useArticles'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Articles = () => {

    const articlesList = useArticles();

  return (
    <section className='w-full py-16'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
            <h2 className="h2 text-center">Новости Таркова</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {articlesList.map((item, index) =>{
                return (
                <div className="w-full border border-zinc-800 rounded-xl p-5">
                    <div className="w-full h-[270px] overflow-hidden rounded-xl">
                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt={'Картинка записи'} width={270} height={270} className='w-full h-full object-cover' />
                    </div>
                    <div className="w-full flex items-center justify-between mt-6">
                        <span className="text-zinc-500 text-sm font-medium">Акции</span>
                        <span className="text-zinc-500 text-sm font-medium">02.28.1488</span>
                    </div>
                    <Link href={''} className='group'><h3 className='text-white text-2xl group-hover:text-accent font-semibold transition-colors duration-300 '>Название записи</h3></Link>
                    <p className="mt-4 text-zinc-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit illo fuga eum culpa quibusdam accusamus rem dicta quisquam? Quibusdam doloribus ut odio. Mollitia aliquid expedita aliquam quasi odit aperiam dolores deleniti eum nobis vitae.</p>
                </div>
                )
            })}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Articles
