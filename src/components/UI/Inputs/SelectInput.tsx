"use client"
import React, { useState } from 'react'
import { InputProps } from './TextInput'
import { useCards } from '@/stores/cardStore';

const SelectInput = ({ label, placeholder, icon, inpDetails, inpNumber }: InputProps) => {

  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const { setFilterCards } = useCards()

  const changeVal = (arg: string) => {
    setSelectedFilter(arg)
    setFilterCards({
      num: inpNumber,
      value: arg !== "all" ? arg : ""
    })
  }

  return (
    <div className='w-full flex flex-col items-center space-y-2'>
      <label htmlFor='textInp' className='w-full text-base text-black/60 flex justify-start items-center pr-1'>
        <span className='ml-1'>
          {icon}
        </span>
        <span>
          {label}
        </span>
      </label>
      <select id="status" name="status"
        className='w-full border text-base rounded-lg py-2 px-4 focus:border-projGreen outline-none'
        value={selectedFilter}
        onChange={e => changeVal(e.target.value)}
      >
        <option value="all">{placeholder}</option>
        {
          inpDetails?.map(item =>
            <option value={item.value} key={item.value}>{item.content}</option>

          )
        }
      </select>
    </div>
  )
}

export default SelectInput