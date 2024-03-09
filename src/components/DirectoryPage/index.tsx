import React from 'react'
import CardFilter from './CardFilter'
import CardContainer from './CardContainer'

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
    return (
        <div>
            <CardFilter />
            <CardContainer />
        </div>
    )
}

export default DirectoryPage