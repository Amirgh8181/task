"use client"
import { useCards } from '@/stores/cardStore'
import { InputProps } from '@/types/inputs'
import React from 'react'



const TextInput = ({  placeholder, inpNumber }: InputProps) => {
    const { setFilterCards } = useCards()
    const changeVal = (arg: string) => {
        setFilterCards({
            num: inpNumber,
            value: arg
        })

    }
    return (
            <input
                id={`inp${inpNumber}`}
                name={`inp${inpNumber}`}
                placeholder={placeholder}
                className='w-[90%] border border-green-300 focus:border-projGreen outline-none 
                placeholder:text-sm py-3 px-2 rounded-md text-sm 2xl:text-xl cursor-text'
                onChange={e => changeVal(e.target.value)}
            />
    )
}

export default TextInput