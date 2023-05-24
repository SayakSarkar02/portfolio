"use client"

import { useSelector, useDispatch } from "react-redux"
import {arrSelect} from "@app/GlobalRedux/Features/counter/counterSlice"

const CodingArea = () => {
  const open = useSelector((state) => state.counter.isOpen);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col text-center justify-center items-center">
      Coding Area
    </div>
  )
}

export default CodingArea