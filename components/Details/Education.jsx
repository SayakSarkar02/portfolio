"use client"

import { useSelector, useDispatch } from "react-redux"

const Education = () => {

  const data = useSelector((state) => state.menu.body.data);
  const type = useSelector((state) => state.menu.body.type);

  return (
  <>
    {
    type==="education"? <div>
      Education
      <br />
      {data.title}
      <br />
      {data.board}
      <br />
      {data.description}
      <br />
      {data.percentage}
    </div>:
    <div className="lg:text-xl">
      {/* <span className="text-2xl">Hey There!</span>  */}
      <span className="text-2xl text-vs-yellow">Hey</span><span className=" text-vs-blue-1 text-2xl">(There)</span><span className=" text-vs-yellow text-2xl">!</span>
      <br />
      <br />
      Wanna know more about my <span className="text-vs-purple">education qualifications</span> ,
      <br />
      select what you want to know about me from the side-menu.
    </div>
    
    }</>
  )
}

export default Education
