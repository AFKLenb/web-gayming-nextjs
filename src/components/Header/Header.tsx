"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { FaBars } from 'react-icons/fa6'
import NavbarMobile from '../NavbarMobile/NavbarMobile'

const Header = () => {

  const [ openNav, setOpenNav] = useState(false);

  return (
    <header className=' w-full h-[70px]  border-b border-zinc-800 bg-zinc-950 '>
      <div className="container mx-auto flex items-center h-full">
        <div className="w-full h-full relative flex items-center justify-between ">
          <Link href="/" className=' w-[100px] h-[50px]'>
            <Image className='w-full h-full rounded-md bg-white' src='/assets/image/logo.png' width={200} height={50} alt='Логотип сайта'  />
          </Link>
          <NavbarMobile containerStyle={` ${openNav ? 'max-h-max border-b border-zinc-800 p-[15px]' : 'max-h-0 overflow-hidden py-0 px-[15px] border-zinc-800/0'} fixed w-full left-0 right-0 top-[71px] transition-all duration-400 bg-zinc-900 md:hidden`}/>
          <Navbar  containerStyle='hidden md:flex' />
          <div className="">
            <button onClick={ () => setOpenNav(!openNav)} className=' text-white text-xl w-[45px] h-[45px] flex items-center justify-center border border-zinc-500 rounded-md md:hidden'>
              <FaBars/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
