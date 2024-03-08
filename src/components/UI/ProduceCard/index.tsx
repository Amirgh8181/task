import React from 'react'

export interface ProduceCardProp{
    name: string,
    website: string,
    deleteurl:string,
    info: string,
    difficulty: string,
    keytype: string,
    priority: string,
    category: string
}

const ProduceCard = () => {
  return (
    <div>ProduceCard</div>
  )
}

export default ProduceCard