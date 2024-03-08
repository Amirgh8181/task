import React from 'react'
import JsonData from "@/constants/data.json"
import { FaTrash } from "react-icons/fa";
import Link from 'next/link';
import { FaBolt } from "react-icons/fa";

const CardContainer = () => {


    return (
        <section id='CardContainer' className='w-full min-h-screen md:py-8 py-4 grid place-items-center'>
            <div className='container h-full  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-[90%] gap-4 px-4'>
                {
                    JsonData.map(item =>
                        <div key={item.name}
                            className='flex flex-col justify-between border 2xl:min-h-[30vh] min-h-[40vh]
                             rounded-xl'
                        >
                            <div id='topcard' className='m-3'>
                                <div className='flex flex-wrap items-center'>
                                    <Link
                                        href={item.website}
                                        target='_blank'
                                        className='text-base 2xl:text-2xl'>
                                        {item.name}
                                    </Link>
                                    <Link
                                        href="https://github.com/rtbf-ir/rtbf.ir/issues/new/choose"
                                        className='text-projYello2 text-xs flex mr-2'
                                        target='_blank'
                                    >
                                        <span><FaBolt /></span>
                                        <span>تصحیح</span>
                                    </Link>
                                </div>
                                <p className='text-xs 2xl:text-base mt-[1vh]' dangerouslySetInnerHTML={{ __html: item.info }}></p>
                            </div>
                            <div id='bottomcard' className='flex items-center'>

                                <button
                                    className={`self-start m-4 text-[13px] text-white px-4 py-2 rounded-lg
                                ${item.keytype === "hard-label" ? "bg-projRed"
                                            : item.keytype === "impossible-label" ? "bg-black"
                                                : item.keytype === "medium-label" ? "bg-projYello2"
                                                    : "bg-projGreen"}`}
                                >
                                    {item.difficulty}
                                </button>
                                {item.deleteurl !== "#" &&
                                    <Link
                                        href={item.deleteurl}
                                        className='bg-projPink text-white text-[13px] flex justify-center 
                                        items-center px-4 py-2 rounded-lg hover:text-black transition-all duration-500'
                                    >
                                        <span><FaTrash /></span>
                                        <span>حذف حساب کاربری</span>
                                    </Link>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default CardContainer
