import React from 'react'

// menuData
const menuLinks = [
    { label: 'Главная', url: '/' },
    { label: 'О нас', url: '/about' },
    { label: 'Акции', url: '/sales' },
    { label: 'Каталог', url: '/catalog' },
    { label: 'Контакты', url: '/contacts' },
]

const Navbar = ( { containerStyle} : {containerStyle: string} ) => {
  return (
    <nav className={`${containerStyle}`}>
        <menu className='w-full flex items-center justify-center gap-4 '></menu>
    </nav>
  )
}

export default Navbar
