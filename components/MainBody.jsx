"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";
import CodingArea from "./CodingArea";

import { useSelector,useDispatch } from "react-redux"
import {toggleTerminal} from "@app/GlobalRedux/Features/terminal/terminalToggle"

import Terminal from "./Terminal/Terminal"

const MainBody = () => {

  const isTerminalOpen = useSelector((state) => state.terminalToggle.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === '`') {
        dispatch(toggleTerminal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div  className=" text-vs-white-1 w-full flex flex-col justify-between h-[100vh]">
      <div className="w-full h-10 mt-10 bg-vs-gray-4"></div>
      <div className=" font-vscode text-vs-white-2 m-10 mt-5 transition-transform duration-1000 grow">
        <CodingArea/>
      </div>
      <AnimatePresence>
        {isTerminalOpen && <motion.div initial={{y:300}} animate={{y:0}} exit={{y:300}} transition={{ type: 'tween', damping: 10 }}
            ><Terminal /></motion.div> }
      </AnimatePresence>
    </div>
  )
}

export default MainBody