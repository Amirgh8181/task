import Image from 'next/image'
import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer className='w-full bg-projGray grid place-items-center  py-16'>
      <div className='grid grid-cols-1 md:grid-cols-3 w-[90%]  gap-4 space-y-8 md:space-y-0'>
        <div className='space-y-4 '>
          <Image src={"/assets/image/footer/footer-logo.png"} alt='footerlogo' width={753} height={954}
            className='max-w-[70%] aspect-square object-contain mx-auto'
          />
          <div className='w-full flex justify-center gap-4 text-projGray'>
            <i className='bg-white p-2 rounded-lg'><FaUsers /></i>
            <i className='bg-white p-2 rounded-lg'><FaTelegram /></i>
            <i className='bg-white p-2 rounded-lg'><FaTwitter /></i>
            <i className='bg-white p-2 rounded-lg'><FaInstagram /></i>
            <i className='bg-white p-2 rounded-lg'><FaGithub /></i>
          </div>
        </div>
        <div className='text-white space-y-4'>
          <h2 className='text-2xl'>
            این سرویس چگونه کار می کند؟
          </h2>
          <p className='text-sm leading-loose md:w-[80%] text-wrap'>
            بسیاری از سرویس های اینترنتی اینگونه عمل می کنند که امکان حذف حساب‌کاربری را به شما نمی دهند و از نظر ما کاربران این موضوع نقض حریم شخصی است. با توجه به حق فراموش شدن یا Right to be forgotten این یک تضاد می باشد.
            <br/>
            ایده ی اولیه ی این سرویس از
            <Link href={""} className='text-projYello3 font-semibold'> justdeleteme </Link>
            گرفته شده است و بعد از
            <Link href={""} className='text-projYello3 font-semibold'> این توییت </Link>
            تصمیم به راه‌اندازی آن گرفتم.
            <br/>
            اگر قصد مشارکت دارید
            <Link href={""} className='text-projYello3 font-semibold'>از گیت هاب این کار را انجام دهید.</Link>
          </p>
        </div>
        <div className='text-white space-y-4'>
          <h2 className='text-2xl'>راهنمای استفاده</h2>
          <p className='text-sm'>برچسب های رنگی زیر مقدار سختی حذف حساب‌کاربری وب‌سایت/سرویس را نمایش می دهد:</p>
          
          <div className='text-sm space-y-4'>
            <div className='flex items-center'>
              <button className='bg-projGreen w-[25%] py-2 rounded-lg'>ساده</button>
              <p> - فرآیند آسان</p>
            </div>
            <div className='flex items-center'>
              <button className='bg-projYello2 w-[25%] py-2 rounded-lg'>متوسط</button>
              <p> - به صورت چند مرحله ای</p>
            </div>
            <div className='flex items-center'>
              <button className='bg-projRed w-[25%] py-2 rounded-lg'>سخت</button>
              <p> - نیاز به ارسال پیام / تیکت به پشتیبانی</p>
            </div>
            <div className='flex items-center'>
              <button className='bg-black w-[25%] py-2 rounded-lg'>غیرممکن</button>
              <p> - غیر قابل حذف</p>
            </div>
           <p className='text-sm'>
           برای افزودن سرویس جدید
            <Link href={"/issue"} className='text-projYello3 font-semibold'> از اینحا </Link>
            شروع کنید.
           </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent