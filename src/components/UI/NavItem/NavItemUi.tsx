import { NavItemsProps } from '@/types/navbar'
import Link from 'next/link'
import React from 'react'


const NavItemUi = ({ content, icon, redirectLink }: NavItemsProps) => {
    return (
        <Link href={redirectLink} className='flex justify-center items-center px-6'>
            <span className='md:text-lg text-xl pl-1'>{icon}</span>
            <p className='md:text-sm text-lg'>{content}</p>
        </Link>
    )
}

export default NavItemUi