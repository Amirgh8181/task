import Link from 'next/link'
import React from 'react'

interface NavItemsProps {
    content: string,
    icon: React.JSX.Element
    redirectLink:string
}
const NavItem = ({ content, icon,redirectLink }: NavItemsProps) => {
    return (
        <Link href={redirectLink} className='flex justify-center items-center px-6'>
            <span className='text-lg pl-1'>{icon}</span>
            <span className='text-sm'>{content}</span>
        </Link>
    )
}

export default NavItem