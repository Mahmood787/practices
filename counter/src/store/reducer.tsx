import { DefaultRootState } from "react-redux"
import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT } from "./actions"
interface InitailState  {
    counter:number
}
const initialState:InitailState = {
    counter: 0
}

export const counterReducer = (state=initialState, action:any) => {
    switch(action.type){
        case INCREMENT:
            return {...state, counter: state.counter + 1 }
        case DECREMENT:
            return {...state, counter: state.counter - 1}
        case INCREMENT_BY_AMOUNT:
            return {...state, counter: state.counter + action.payload.amount}
        default: 
            return state
    }
}