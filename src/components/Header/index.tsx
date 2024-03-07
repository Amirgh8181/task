import Image from 'next/image'
import React from 'react'
import NavLinks from './NavLinks'

const Header = () => {
    return (
        <header className='w-full h-auto'>
            <nav
                className='w-full h-20 bg-white/0 fixed top-0 z-40 backdrop-blur-[12px] mx-auto 
                grid place-items-center text-black '
            >
                <NavLinks />
            </nav>
            <Image
                src={'/assets/image/header/header.png'}
                alt='header-img'
                width={1300}
                height={350}
                className='w-full h-[70vh]'
            />
        </header>
    )
}

export default Header