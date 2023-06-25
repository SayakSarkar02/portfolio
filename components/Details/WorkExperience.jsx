"use client"

import { useSelector } from "react-redux"
import { SocialIcon } from 'react-social-icons';

const WorkExperience = () => {

  const data = useSelector((state) => state.menu.body.data);
  const type = useSelector((state) => state.menu.body.type);

  return (
  <>
    {
      type==="workexperience"? 
      <div className=" flex flex-col max-sm:items-center ">
        {/* <h3>{JSON.stringify(data)}</h3> */}
        <div className="flex flex-row items-center gap-8 sm:flex-row max-sm:flex-col max-sm:text-center">
        <img src={data.logo} className="w-32" alt="" />
        <div>
        <h1 className="text-5xl max-sm:text-4xl text-vs-yellow leading-none ">{data.title}</h1>
        <h2 className="text-xl text-vs-blue-1 leading-none max-sm:text-center max-sm:mx-auto">{data.tagline}</h2>
        <div className="flex flex-row gap-2 mt-4 max-sm:flex-wrap max-sm:justify-center max-sm:mx-auto">
          {
            data.stacks.map((stack)=>(
              <div>
                <span className="text-white text-sm bg-vs-blue-3 px-2 py-1 rounded-full">{stack}</span>
              </div>
            ))
          }
        </div>
        </div>
        </div>
        <br />
        <ul className="text-xl text-vs-white-1">
          {data.description.map((list)=>(
            <li className=" list-disc my-3">{list}</li>
          ))}
        </ul>
        <div className="flex flex-row gap-2 mt-8">
          {
            data.links.map((link)=>(
              <div>
                <a href={link.link} className={`text-white font-semibold text-2xl transition-all duration-500 ease-in shadow-lg shadow-black/50 ${link.name==="Github"? " bg-[#000000] hover:bg-[#0c0c0c] text-vs-gray-6 ": " bg-blue-600 hover:bg-blue-700 "} px-8 py-2 rounded-full`}>{link.name}</a>
              </div>
            ))
          }
        </div>
        
      </div>
      : 
      <div className="">
        <h3 className="text-3xl text-vs-white-1 mb-4">Hi, wanna know about my work experiences?</h3>
        <h3 className="text-2xl text-vs-yellow">Use the <span className="text-vs-blue-2"> ( <span className="text-vs-purple"> Sidebar </span> ) </span> to navigate through all my <span className="text-vs-blue-2"> [ <span className="text-vs-white-1"> Experiences </span> ] </span></h3>
      </div>
    }
  </>
  )
}

export default WorkExperience
