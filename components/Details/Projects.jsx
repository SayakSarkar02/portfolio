"use client"

import { useSelector } from "react-redux"
import { SocialIcon } from 'react-social-icons';

const Projects = () => {

  const data = useSelector((state) => state.menu.body.data);
  const type = useSelector((state) => state.menu.body.type);

  return (
  <>
    {
      type==="projects"? 
      <div>
        {/* <h3>{JSON.stringify(data)}</h3> */}
        <div className="flex flex-row items-center gap-8">
        <img src={data.logo} className="w-32" alt="" />
        <div>
        <h1 className="text-5xl text-vs-yellow leading-none">{data.title}</h1>
        <h2 className="text-xl text-vs-blue-1 leading-none">{data.tagline}</h2>
        <div className="flex flex-row gap-2 mt-4">
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
        <h3 className="text-xl text-vs-white-1">{data.description}</h3>
        <div className="flex flex-row gap-2 mt-8">
          {
            data.links.map((link)=>(
              <div>
                <a href={link.link} className={`text-white font-semibold text-2xl transition-all duration-500 ease-in shadow-lg shadow-black/50 ${link.name==="Github"? " bg-[#e2e2e2] hover:bg-[#a0a0a0] text-vs-gray-6 ": " bg-blue-600 hover:bg-blue-700 "} px-8 py-2 rounded-full`}>{link.name}</a>
              </div>
            ))
          }
        </div>
        
      </div>
      : 
      <div>Default Projects</div>
    }
  </>
  )
}

export default Projects
