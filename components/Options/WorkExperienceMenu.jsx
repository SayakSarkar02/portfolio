
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {setBody} from "@app/GlobalRedux/Features/sidebar/sidebarMenu"
import { motion } from 'framer-motion';
import { toggleSideBarMenu } from "@app/GlobalRedux/Features/sidebar/sidebarSlice"

const MenuCard = ({keyMap, desc, logo, links, stacks, title, data}) => {
  const dispatch = useDispatch();
  return(
    <div key={keyMap}
    onClick={()=>{dispatch(setBody({data, type:"workexperience"}));
    window.innerWidth<=640 && dispatch(toggleSideBarMenu());
    }}>
      <div className="flex flex-row items-center gap-4 cursor-pointer select-none pl-4 py-1 hover:bg-vs-gray-3">
        <img src={logo} alt="medbase icon" className={`w-10 rounded-full ${title}`}/>
        <div className="flex flex-col overflow-clip mr-4">
          <h3 className="text-base text-vs-white-1">{title}</h3>
          <h3 className="text-sm text-vs-white-2 overflow-hidden truncate text-ellipsis w-full">{desc}</h3>
        </div>
      </div>
    </div>
  )
}

const WorkExperience = () => {

  const projectsList = useSelector((state) => state.menu.workexperience);
  console.log(projectsList);
  return (
    <>
      <div className="flex flex-row items-center justify-between mx-5">
        <h3 className=" font-sans text-vs-white-1 font-light">WORK-EXPERIENCE</h3>
        <h3 className=" font-sans text-vs-white-1 font-light mb-2 cursor-pointer">...</h3>
      </div>

      <div className="px-4">
        <input className="w-[95%] h-8 bg-vs-gray-2 my-4 focus:outline-none focus:border-none px-2 text-vs-white-2"/>
      </div>

      <div className="flex flex-col">
        {
          projectsList.map((project) => (
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <MenuCard keyMap={project.id} desc={project.tagline} logo={project.logo} links={project.links} stacks={project.stacks} title={project.title} data={project}/>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default WorkExperience