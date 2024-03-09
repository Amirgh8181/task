import { RedirectBtnProps } from '@/types/redirectBtns'
import Link from 'next/link'
import React from 'react'



const RedirectBtn = ({ bgColor, textSize, iconSize, content, icon, redirectLink }: RedirectBtnProps) => {
  return (
    <Link
      href={redirectLink}
      className={`${bgColor} text-white px-2 py-1 mx-2 flex justify-center items-center rounded-md`}>
      <span className={iconSize}>{icon}</span>
      <span className={textSize}>{content}</span>
    </Link>
  )
}

export default RedirectBtn


