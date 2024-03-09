"use client"
import { useParams, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ShowRoute = () => {
    const [routeName, setRouteName] = useState<string>("")
    const pathname = usePathname()
    console.log(pathname);
    useEffect(() => {
        setRouteName(
            pathname === "/" ? "خانه"
                : pathname === "/directory" ? "دایرکتوری سرویس ها"
                    : pathname === "/collabrator" ? "مشارکت کنندگان"
                        : pathname === "/banners" ? "بنرها"
                            : pathname === "/blog" ? "وبلاگ"
                                : pathname === "/donate" ? "حمایت مالی"
                                    : pathname === "/faq" ? "سوالات متداول"
                                        : "صفحه مورد نظر یافت نشد"
        )
    }, [pathname])
    return (
        <section id='showRoute' className='w-full flex justify-center items-center h-auto'>
            <div className='container mx-auto md:text-sm text-xs xl:text-base  mt-[3vh]'>
                <span className='text-black/70 mx-1'>حق فراموش شدن</span>
                <span className='text-black/70 mx-1'>{">"}</span>
                <span className='text-black/90 font-bold mx-1'>{routeName}</span>
            </div>
        </section>
    )
}

export default ShowRoute