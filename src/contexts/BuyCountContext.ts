import React from "react"
import { BuyAction } from "../reducers/BuyCountReducer"

interface BuyCountType {
    buyCount:number
    dispatch: React.Dispatch<BuyAction>
}

const BuyCountContext = React.createContext<BuyCountType>({} as BuyCountType)
export default BuyCountContext