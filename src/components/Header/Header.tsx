import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaBars } from 'react-icons/fa6'

const Header = () => {
  return (
    <header className=' w-full h-[70px] items-center border-b border-zinc-800 bg-zinc-950 '>
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between ">
          <Link href="/" className=' w-[100px] h-[50px]'>
            <Image className='w-full h-full rounded-md bg-white' src='/assets/image/logo.png' width={200} height={50} alt='Логотип сайта'  />
          </Link>
          <Navbar  containerStyle='hidden md:flex' />
          <div className="">
            <button className=' text-white text-xl w-[45px] h-[45px] flex items-center justify-center border border-zinc-500 rounded-md md:hidden'>
              <FaBars/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
