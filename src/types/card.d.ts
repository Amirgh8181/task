export interface cardData {
    name: string,
    website: string,
    deleteurl: string,
    info: string,
    difficulty: string,
    keytype: string,
    priority: string,
    category: string
}
export interface filterObj {
    value: string
}

export interface State {
    mainData: cardData[],
    renderData: cardData[],
    filterValues: filterObj[]
}
export interface Action {
    setFilterCards: (arg: { num: number, value: string }) => void
}
