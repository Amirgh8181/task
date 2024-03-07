import Link from 'next/link'
import React from 'react'

interface NavItemsProps {
    content: string,
    icon: React.JSX.Element
    redirectLink:string
}
const NavItemUi = ({ content, icon,redirectLink }: NavItemsProps) => {
    return (
        <Link href={redirectLink} className='flex justify-center items-center px-6'>
            <span className='md:text-lg text-xl pl-1'>{icon}</span>
            <span className='md:text-sm text-lg'>{content}</span>
        </Link>
    )
}

export default NavItemUi