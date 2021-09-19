import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0 
    },
    reducers: {
        increment: (state) => state.count+=1,
        decrement: (state) => {
            state.count-=1
        },
        byAmount: (state, action) => {
            state.count = state.count + action.payload
        }
    }
})

export const {increment, decrement, byAmount} = counterSlice.actions
export const counter = counterSlice.reducer