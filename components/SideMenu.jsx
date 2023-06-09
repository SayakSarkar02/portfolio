"use client"

import { useSelector, useDispatch } from "react-redux"
import EducationMenu from "./Options/EducationMenu"
import AchievementsMenu from "./Options/AchievementsMenu"
import ContactMenu from "./Options/ContactMenu"
import ProjectsMenu from "./Options/ProjectsMenu"
import TechStacksMenu from "./Options/TechStacksMenu"
import WorkExperienceMenu from "./Options/WorkExperienceMenu"

const SideMenu = () => {

  const open = useSelector((state) => state.sidebar.whatOpen);

  return (
    <div className=" bg-vs-gray-5 w-full h-[100vh] mt-8 shadow-lg py-5 transition-all ease-out duration-700">
      {open===0 && <EducationMenu/>}
      {open===1 && <AchievementsMenu/>}
      {open===2 && <ContactMenu/>}
      {open===3 && <ProjectsMenu/>}
      {open===4 && <TechStacksMenu/>}
      {open===5 && <WorkExperienceMenu/>}
    </div>
  )
}

export default SideMenu