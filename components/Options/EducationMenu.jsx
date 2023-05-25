"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {setBody} from "@app/GlobalRedux/Features/sidebar/sidebarMenu"

const MenuCard = ({keyMap, name, type, files}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (<div key={keyMap}>
      <div onClick={()=>{setOpen(prev=>!prev)}} className="flex flex-row items-center gap-4 cursor-pointer select-none pl-4 py-[2px] hover:bg-vs-gray-3">
        {type==="file" && <div className="w-2 h-2 ml-2 rounded-lg bg-gray-600"></div>}
        {type==="folder" && <div className="w-2 h-2 rounded-lg bg-yellow-400"></div>}
        <h3 className="text-sm text-vs-white-1">{name}</h3>
      </div>
      {open && files?.map((file, index) => (
        <div onClick={()=>{dispatch(setBody(file?.content));console.log(file?.content);}}>
        <MenuCard keyMap={index} name={file.fileName} type={"file"}/>
        </div>
      ))}
    </div>
  )
}

const Education = () => {

  const folderList = useSelector((state) => state.menu.education);

  return (
    <>
      <div className="flex flex-row items-center justify-between mx-5">
        <h3 className=" font-sans text-vs-white-1 font-light">EDUCATION: QUALIFICATION</h3>
        <h3 className=" font-sans text-vs-white-1 font-light mb-2 cursor-pointer">...</h3>
      </div>
      <div className="px-4">
      <input className="w-[95%] h-8 bg-vs-gray-2 my-4 focus:outline-none focus:border-none px-2 text-vs-white-2"/>
      </div>
      <div className="flex flex-col">
        {
          folderList.map((item, index) => (
            <>
            <MenuCard keyMap={index} name={item.folderName} files={item.files} type={"folder"}/>
            </>
          ))
        }
      </div>
    </>
  )
}

export default Education
