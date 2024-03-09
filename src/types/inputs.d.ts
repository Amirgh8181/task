import { selectinpdata } from "./selectInpData"

export export interface InputProps {
    placeholder: string,
    inpDetails?: selectinpdata[]
    inpNumber: number
}

interface LabelProps {
    width: string
    icon: React.JSX.Element,
    content: string,
    inpNumber: number

}