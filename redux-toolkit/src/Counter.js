import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { byAmount, decrement, increment } from './store/counterSlice'
const Counter = () => {
    const dispatch = useDispatch()  
    const [value, setValue] = useState()
    const counter = useSelector((state) => {
        return state.counter
    })
    return (
        <div>
            <div>Counter : {counter}</div>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
            <input type="number" onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => dispatch(byAmount(Number(value)))}>Increment By Amount</button>
        </div>
    )
}


export default Counter
