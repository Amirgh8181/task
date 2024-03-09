import { LabelProps } from '@/types/inputs'
import React from 'react'



const Label = ({ width, icon, content, inpNumber }: LabelProps) => {
    return (
        <label
            htmlFor={`inp${inpNumber}`}
            className={`${width} text-base text-black/60 flex justify-start items-center pr-1`}
        >
            <span className='ml-1'>
                {icon}
            </span>
            <span>
                {content}
            </span>
        </label>
    )
}

export default Label