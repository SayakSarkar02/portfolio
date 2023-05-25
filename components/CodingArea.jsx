"use client"

import { useSelector, useDispatch } from "react-redux";

import Achievements from "./Details/Achievements";
import Education from "./Details/Education";
import Contact from "./Details/Contact";
import Projects from "./Details/Projects";
import TechStacks from "./Details/TechStacks";
import WorkExperience from "./Details/WorkExperience";

const CodingArea = () => {
  const open = useSelector((state) => state.sidebar.whatOpen);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col ">
      {open===0 && <Education/>}
      {open===1 && <Achievements/>}
      {open===2 && <Contact/>}
      {open===3 && <Projects/>}
      {open===4 && <TechStacks/>}
      {open===5 && <WorkExperience/>}
    </div>
  )
}

export default CodingArea