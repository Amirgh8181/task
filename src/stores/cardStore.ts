import { create } from "zustand";
import data from '@/constants/data.json'
import { useState } from "react";

// Define the interface of the Card state
interface cardData {
    name: string,
    website: string,
    deleteurl: string,
    info: string,
    difficulty: string,
    keytype: string,
    priority: string,
    category: string
}
interface filterObj {
    value: string
}

interface State {
    mainData: cardData[],
    renderData: cardData[],
    filterValues: filterObj[]
}
interface Action {
    setFilterCards: (arg: { num: number, value: string }) => void
}


// Initialize a default state
const INITIAL_STATE: cardData[] = data
const INITIAL_STATE_FILTER_VALUES: filterObj[] = [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
]

// Create the store with Zustand, combining the status interface and actions
export const useCards = create<State & Action>((set) => {
    return {
        mainData: INITIAL_STATE,
        renderData: INITIAL_STATE,
        filterValues: INITIAL_STATE_FILTER_VALUES,
        setFilterCards: (arg) => {
            // read filterValues from state and set user filter value in state filterValues 
            const filterValuesClone: filterObj[] = useCards.getState().filterValues
            filterValuesClone[arg.num].value = arg.value
            console.log(filterValuesClone);
            set({
                filterValues: filterValuesClone
            })
            console.log(filterValuesClone);

            // filter data with user filter values
            const cloneMainData: cardData[] = useCards.getState().mainData
            let filterCard: cardData[] = cloneMainData

            filterValuesClone[0].value ? filterCard = filterCard.filter(q => q.name.includes(filterValuesClone[0].value)) : ""
            filterValuesClone[1].value ? filterCard = filterCard.filter(q => q.keytype.includes(filterValuesClone[1].value)) : ""
            filterValuesClone[2].value ? filterCard = filterCard.filter(q => q.category.includes(filterValuesClone[2].value)) : ""
            filterValuesClone[3].value ? filterCard = filterCard.filter(q => q.priority.includes(filterValuesClone[3].value)) : ""

            set({
                renderData: [...filterCard]
            })
        }
    }
})

/*
            filterValuesClone[1].value ? filterCard = filterCard.filter(q => q.keytype.includes(filterValuesClone[0].value)) : ""
            filterValuesClone[2].value ? filterCard = filterCard.filter(q => q.category.includes(filterValuesClone[0].value)) : ""
            filterValuesClone[3].value ? filterCard = filterCard.filter(q => q.priority.includes(filterValuesClone[0].value)) : ""
*/