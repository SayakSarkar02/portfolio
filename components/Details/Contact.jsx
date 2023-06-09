"use client"

import { useSelector } from "react-redux"

const Contact = () => {

  const data = useSelector((state) => state.menu.body.data);
  const type = useSelector((state) => state.menu.body.type);

  return (<>
    {type==="contact"?
      <div>
      Wanna have a talk with me on {data.title}?
      <br />
      <a rel="non-ferrer" target="_blank" href={data.link}><button className="text-vs-white-1 bg-vs-gray-2 px-4 py-2 rounded-lg my-2">Go to {data.title}</button></a>
      <br />
      {data.description}
      <br />
    </div>:
    <div className="lg:text-xl">
    {/* <span className="text-2xl">Hey There!</span>  */}
    <span className="text-2xl text-vs-yellow">Hey</span><span className=" text-vs-blue-1 text-2xl">(There)</span><span className=" text-vs-yellow text-2xl">!</span>
    <br />
    <br />
    Want to contact <span className="text-vs-purple"> contact me </span> ?
    <br />
    Select how you want to reach me from the side-menu.
  </div>
    }</>
  )
}

export default Contact
