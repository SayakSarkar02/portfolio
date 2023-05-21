"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";

import Terminal from "./Terminal"

const MainBody = ({toggleTerminal, isTerminalOpen, setIsTerminalOpen}) => {

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === '`') {
        setIsTerminalOpen((prevOpen) => !prevOpen);
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
      <div></div>
      <AnimatePresence>
        {isTerminalOpen && <motion.div initial={{y:300}} animate={{y:0}} exit={{y:300}} transition={{ type: 'tween', damping: 10 }}
            ><Terminal toggleTerminal={toggleTerminal}/></motion.div> }
      </AnimatePresence>
    </div>
  )
}

export default MainBody