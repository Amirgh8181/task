import RedirectBtn from '@/components/UI/RedirectBtn';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const HeaderRedirectBtn = () => {

  return (
    <div className='hidden md:absolute top-[25%] left-[15%] 2xl:left-[25%] md:flex'>
      <RedirectBtn
        bgColor='bg-green-500'
        content='شما هم مشارکت کنید'
        icon={<FaGithub />}
        redirectLink='https://github.com/rtbf-ir/rtbf.ir/issues/new/choose'
        iconSize='text-lg 2xl:text-2xl px-1'
        textSize='text-base 2xl:text-xl px-1'
      />
      <RedirectBtn
        bgColor='bg-black'
        content='توییت کنید'
        icon={<FaTwitter />}
        redirectLink='https://twitter.com/intent/tweet?text=اگر شما هم حذف حساب‌کاربری را دغدغه‌ی خود می‌دانید از این سرویس استفاده کنید : rtbf.ir - @rtbf_ir'
        iconSize='text-lg 2xl:text-2xl px-1'
        textSize='text-base 2xl:text-xl px-1'
      />
    </div>
  )
}

export default HeaderRedirectBtn

