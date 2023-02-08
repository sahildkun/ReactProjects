import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { plusOne,minusOne } from '../../trial_feature/CountSlice'


const Counter = () => {
   const count = useSelector((state) => state.counter.count)
const dispatch = useDispatch();
  return (
    <div>
    <h1>{count}</h1>
    <div>
        <button onClick={() => dispatch(plusOne())}>+</button>
        <button onClick={() => dispatch(minusOne())}>-</button>
    </div>
    </div>
   
  )
}

export default Counter