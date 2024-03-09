"use client"
import Link from 'next/link'
import React from 'react'
import { FaTrash } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { useCards } from '@/stores/cardStore';
export interface ProduceCardProp {
  name: string,
  website: string,
  deleteurl: string,
  info: string,
  difficulty: string,
  keytype: string,
  priority: string,
  category: string
}

const ProduceCard = () => {
  const { renderData } = useCards()
  return (
    <>
      {
        renderData.map(item =>
          <div key={item.name}
            className='flex flex-col justify-between border 2xl:h-[30vh] h-[40vh]
                             rounded-xl'
          >
            <div id='topcard' className='m-3'>
              <div className='flex flex-wrap items-center'>
                <Link
                  href={`https://${item.website}`}
                  target='_blank'
                  className='text-base 2xl:text-2xl'>
                  {item.name}
                </Link>
                <Link
                  href="https://github.com/rtbf-ir/rtbf.ir/issues/new/choose"
                  className='text-projYello2 text-xs flex mr-2'
                  target='_blank'
                >
                  <i><FaBolt /></i>
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
                  href={`https://${item.deleteurl}`}
                  className='bg-projPink text-white text-[13px] flex justify-center 
                                        items-center px-4 py-2 rounded-lg hover:text-black transition-all duration-500'
                >
                  <i><FaTrash /></i>
                  <span>حذف حساب کاربری</span>
                </Link>
              }
            </div>
          </div>
        )
      }
    </>
  )
}

export default ProduceCard