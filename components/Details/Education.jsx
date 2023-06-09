"use client"

import { useSelector, useDispatch } from "react-redux"

const Education = () => {

  const data = useSelector((state) => state.menu.body.data);
  const type = useSelector((state) => state.menu.body.type);

  return (
  <>
    {
    type==="education"?<>
    {
      data.board !=="MAKAUT"? 
    <div className="lg:text-xl">
    <span className="text-2xl text-vs-yellow">I studied </span><span className=" text-vs-blue-1 text-2xl"> {data.title} </span> <br /> from  <span className=" text-vs-purple text-2xl"> {data.description} </span>
    <br />
    <br />
    Which is an <span className="text-vs-purple"> {data.board} </span>board school,
    <br />
    {/* Where I spent the best years of my life, learning and exploring the world. */}
    <br />
    And I successfully passed with a percentage of <span className="text-vs-yellow"> {data.percentage} </span>
  </div>
    : <div className="lg:text-xl">
      <span className="text-2xl text-vs-yellow">I am studying <br /> </span><span className=" text-vs-blue-1 text-2xl"> {data.title} </span> <br /> from  <span className=" text-vs-purple text-2xl"> {data.description} </span>
      <br />
      <br />
      Which is under the <span className="text-vs-purple"> {data.board} </span> university,
      <br />
      I am currently exploring and learning about Computer Science here.
    </div>
  }</>
    :
    <div className="lg:text-xl">
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
