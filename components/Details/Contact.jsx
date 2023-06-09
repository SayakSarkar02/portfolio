"use client"

import { useSelector } from "react-redux"
import { SocialIcon } from 'react-social-icons';


const Contact = () => {

  const data = useSelector((state) => state.menu.body.data);
  const type = useSelector((state) => state.menu.body.type);

  return (<>
    {type==="contact"?
      <div>
        <div className="flex flex-row items-center gap-4 flex-wrap">
          {data.title==="Github"? <SocialIcon fgColor="" bgColor="white" url={data.link} />:
          <SocialIcon fgColor="transparent" url={data.link} />}
        
          <h3 className="text-2xl">Wanna have a talk with me on <span className="text-vs-yellow"> (<a rel="non-ferrer" target="_blank" href={data.link} className="text-vs-blue-2 hover:text-vs-blue-1">{data.title}</a>) </span> ?</h3>
          </div>
      <br />
      <br />
      <span className="text-lg lg:text-xl">{data.description}</span>
      <br />
    </div>:
    <div className="lg:text-xl">
    <span className="text-2xl text-vs-yellow">Hey</span><span className=" text-vs-blue-1 text-2xl">(There)</span><span className=" text-vs-yellow text-2xl">!</span>
    <br />
    <br />
    Want to contact <span className="text-vs-purple"> contact me </span> ?
    <br />
    Select how you want to reach me from the side-menu.
    <br />
    <br />
    <span className=""> You can also try <span className="text-vs-blue-1"> commands </span> in terminal like </span>
    <br />
    <span className="text-yellow-200"> npm </span> github / <span className="text-yellow-200"> npm </span> linkedin / <span className="text-yellow-200"> npm </span> instagram / <span className="text-yellow-200"> npm </span> twitter
  </div>
    }</>
  )
}

export default Contact
