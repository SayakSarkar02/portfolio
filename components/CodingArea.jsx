"use client"

import { useSelector, useDispatch } from "react-redux"
import {increment, decrement, incrementByAmount} from "@app/GlobalRedux/Features/counter/counterSlice"

const CodingArea = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col text-center">
      <button className="" onClick={()=>{dispatch(increment())}}>Increment</button>
      <span>{count}</span>
      <button className="" onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button className="" onClick={()=>{dispatch(incrementByAmount(2))}}>Increment by 2</button>
    </div>
  )
}

export default CodingArea