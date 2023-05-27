"use client"

import { useSelector, useDispatch } from "react-redux"

const Education = () => {

  const data = useSelector((state) => state.menu.body.data);
  const type = useSelector((state) => state.menu.body.type);
  console.log("Hi data",data);

  return (
  <>
    {type==="education" && <div>
      Education
      <br />
      {data.title}
      <br />
      {data.board}
      <br />
      {data.description}
      <br />
      {data.percentage}
    </div>
    }</>
  )
}

export default Education
