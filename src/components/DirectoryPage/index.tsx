"use client"

import React, { useState } from 'react'
import CardFilter from './CardFilter'
import CardContainer from './CardContainer'
import JsonData from "@/constants/data.json"

interface filterValues {
    textInpVal: string,
    selectInpVal1: string,
    selectInpVal2: string,
    selectInpVal3: string,
}
export interface renderData {
    name: string,
    website: string,
    deleteurl: string,
    info: string,
    difficulty: string,
    keytype: string,
    priority: string,
    category: string
}

const DirectoryPage = () => {
    const [renderData, setRenderDate] = useState<renderData[]>(JsonData)
    let filterValues: filterValues = {
        textInpVal: "",
        selectInpVal1: "",
        selectInpVal2: "",
        selectInpVal3: "",
    }
    const filterData = (arg: { number: string, value: string }): void => {
        console.log(arg);
        arg.number === "1" ? filterValues.textInpVal = arg.value
            : arg.number === "2" ? filterValues.selectInpVal1 = arg.value
                : arg.number === "3" ? filterValues.selectInpVal2 = arg.value
                    : filterValues.selectInpVal3 = arg.value
            console.log(filterValues);
            
        filterValues.textInpVal ? setRenderDate(JsonData.filter(q => q.name === filterValues.textInpVal))
            : filterValues.selectInpVal1 ? setRenderDate(JsonData.filter(q => q.keytype === filterValues.selectInpVal1))
                : filterValues.selectInpVal2 ? setRenderDate(JsonData.filter(q => q.category === filterValues.selectInpVal2))
                    : filterValues.selectInpVal3 && setRenderDate(JsonData.filter(q => q.priority === filterValues.selectInpVal3))
        console.log(renderData);
        
    }
    return (
        <div>
            <CardFilter filterData={filterData} />
            <CardContainer Data={renderData} />
        </div>
    )
}

export default DirectoryPage