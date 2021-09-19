import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {

    const count = useSelector((state:any) => {
        return state.counter
    })
    const [incrementByAmount, setIncrementByAmount] =useState(0)
    const dispatch = useDispatch()
  
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
            <br/>
            <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
            <div>
                <input onChange={(e) => setIncrementByAmount(Number(e.target.value))}type="number" />
                <button onClick={() =>dispatch({type:"AMOUNT", payload:{amount:incrementByAmount}}) }>Increment By Amount</button>
            </div>
        </div>
    )
}

export default Counter
