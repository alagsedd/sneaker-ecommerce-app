interface IncreaseBuyCountAction {
    type: "increaseBuyCount"
}
interface DecreaseBuyCount {
    type: "decreaseBuyCount"
}

export type BuyAction = IncreaseBuyCountAction | DecreaseBuyCount

const BuyCountReducer = (state:number,action:BuyAction):number => {
    if (action.type === "increaseBuyCount") return state + 1
    if (action.type === "decreaseBuyCount") return state - 1
    return state 
}
export default BuyCountReducer