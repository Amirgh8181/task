"use client"
import { selectinpdata } from '@/constants/selectinputoption'
import { useCards } from '@/stores/cardStore'
import React from 'react'

export interface InputProps {
    label: string,
    placeholder: string,
    icon: React.JSX.Element,
    inpDetails?: selectinpdata[]
    inpNumber: number
}

const TextInput = ({ label, placeholder, icon, inpNumber }: InputProps) => {
    const { setFilterCards } = useCards()
    const changeVal = (arg: string) => {
        setFilterCards({
             num: inpNumber,
             value: arg
         })
        console.log(arg);

    }
    return (
        <div className='w-full flex flex-col items-center space-y-2'>
            <label htmlFor='textInp' className='w-[90%] text-base text-black/60 flex justify-start items-center pr-1'>
                <span className='ml-1'>
                    {icon}
                </span>
                <span>
                    {label}
                </span>
            </label>
            <input
                name='textInp'
                placeholder={placeholder}
                className='w-[90%] border focus:border-projGreen outline-none placeholder:text-sm py-2 px-2
                 rounded-md text-sm'
                onChange={e => changeVal(e.target.value)}
            />
        </div>
    )
}

export default TextInput