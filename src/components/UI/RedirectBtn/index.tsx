import Link from 'next/link'
import React from 'react'

interface RedirectBtnProps {
    bgColor:string
    content: string,
    icon: React.JSX.Element
    redirectLink:string
}

const RedirectBtn = ({bgColor,content,icon,redirectLink}:RedirectBtnProps) => {
  return (
    <Link href={redirectLink} className={`${bgColor} text-white px-2 py-1 mx-2 flex justify-center items-center rounded-md`}>
        <span className='text-xl 2xl:text-4xl px-1'>{icon}</span>
        <span className='text-lg 2xl:text-2xl px-1'>{content}</span>
        </Link>
  )
}

export default RedirectBtn