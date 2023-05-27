"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {setBody} from "@app/GlobalRedux/Features/sidebar/sidebarMenu"
import { motion } from 'framer-motion';

const MenuCard = ({keyMap, name, type, files}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (<div key={keyMap}>
      <div onClick={()=>{setOpen(prev=>!prev)}} className="flex flex-row items-center gap-4 cursor-pointer select-none pl-4 py-[2px] hover:bg-vs-gray-3">
        {type==="folder" && 
        <svg className="w-4 text-slate-600" width="20" height="16" viewBox="0 0 20 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H8L10 2H18C18.55 2 19.021 2.196 19.413 2.588C19.805 2.98 20.0007 3.45067 20 4V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2Z" fill="currentColor"/>
        </svg>
        }
        {type==="file" &&
        <svg className="w-3 text-yellow-500 ml-3" width="14" height="18" viewBox="0 0 14 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.875 6.3V1.35L12.6875 6.3M1.75 0C0.77875 0 0 0.801 0 1.8V16.2C0 16.6774 0.184374 17.1352 0.512563 17.4728C0.840752 17.8104 1.28587 18 1.75 18H12.25C12.7141 18 13.1592 17.8104 13.4874 17.4728C13.8156 17.1352 14 16.6774 14 16.2V5.4L8.75 0H1.75Z" fill="currnetColor"/>
        </svg>}
        <h3 className="text-sm text-vs-white-1">{name}</h3>
      </div>
      {open && files?.map((file, index) => (
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={()=>{dispatch(setBody({data:file?.content, type:"contact"}));console.log(file?.content);}}>
        <MenuCard keyMap={index} name={file.fileName} type={"file"}/>
        </motion.div>
      ))}
    </div>
  )
}

const Contact = () => {

  const folderList = useSelector((state) => state.menu.contact);

  return (
    <>
      <div className="flex flex-row items-center justify-between mx-5">
        <h3 className=" font-sans text-vs-white-1 font-light">CONTACT</h3>
        <h3 className=" font-sans text-vs-white-1 font-light mb-2 cursor-pointer">...</h3>
      </div>
      <div className="px-4">
      <input className="w-[95%] h-8 bg-vs-gray-2 my-4 focus:outline-none focus:border-none px-2 text-vs-white-2"/>
      </div>
      <div className="flex flex-col">
        {
          folderList.map((item, index) => (
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <MenuCard keyMap={index} name={item.folderName} files={item.files} type={"folder"}/>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default Contact
