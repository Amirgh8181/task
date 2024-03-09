"use client"
import React, { useState } from 'react'
import { useCards } from '@/stores/cardStore';
import { InputProps } from '@/types/inputs';

const SelectInput = ({ placeholder, inpDetails, inpNumber }: InputProps) => {

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

    <select id={`inp${inpNumber}`} name={`inp${inpNumber}`}
      className='w-full border border-green-300 text-base rounded-lg py-2 px-4 focus:border-projGreen
         outline-none cursor-pointer'
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
  )
}

export default SelectInput