"use client"

import { useDispatch } from "react-redux"
import {toggleTerminal} from "@app/GlobalRedux/Features/terminal/terminalToggle"

import Image from "next/image";
const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <div className="z-20 bg-vs-gray-2 text-vs-white-1 font-sans w-screen h-10 absolute top-0 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <Image className="cursor-pointer ml-2" src="/assets/logo.png" alt="logo" width={35} height={35} />
        <ul className="list-none flex flex-row max-sm:hidden">
          <li className="px-3 h-10 hover:bg-white/5 cursor-pointer flex items-center justify-center">
            File
          </li>
          <li className="px-3 h-10 hover:bg-white/5 cursor-pointer flex items-center justify-center">
            Edit
          </li>
          <li onClick={()=>{dispatch(toggleTerminal())}} className="px-3 h-10 hover:bg-white/5 cursor-pointer flex items-center justify-center">
            Terminal
          </li>
          <li className="px-3 h-10 hover:bg-white/5 cursor-pointer flex items-center justify-center">
            View
          </li>
          {/* <li className="px-3 h-10 hover:bg-white/5 cursor-pointer flex items-center justify-center">
            Selection
          </li>
          <li className="px-3 h-10 hover:bg-white/5 cursor-pointer flex items-center justify-center">
            Go
          </li>
          <li className="px-3 h-10 hover:bg-white/5 cursor-pointer flex items-center justify-center">
            Debug
          </li>
          <li className="px-3 h-10 hover:bg-white/5 cursor-pointer flex items-center justify-center">
            Help
          </li> */}
        </ul>
      </div>

      <div className="max-md:hidden flex items-center justify-center cursor-pointer">
        Sayak_Sarkar - Full_Stack.developer
      </div>

      <div className="md:hidden flex items-center justify-center cursor-pointer">
        Sayak_Sarkar.dev
      </div>

      <div>
        <ul className="list-none flex flex-row font-sans">
          <li className="px-5 h-10 hover:bg-white/5 cursor-pointer flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon"
              style={{ width: "1em", height: "1em", verticalAlign: "middle" }}
              fill="currentColor"
              overflow="hidden"
              viewBox="0 0 1024 1024"
            >
              <path d="M65.239 456.152H958.76v111.696H65.24V456.152z"></path>
            </svg>
          </li>
          <li className="px-5 h-10 hover:bg-white/5 cursor-pointer flex items-center justify-center">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon"
              style={{ width: "1em", height: "1em", verticalAlign: "middle" }}
              fill="currentColor"
              overflow="hidden"
              viewBox="0 0 1024 1024"
            >
              <path d="M910.933 96H113.067A17.067 17.067 0 0096 113.067v797.866C96 920.32 103.68 928 113.067 928h797.866A17.067 17.067 0 00928 910.933V113.067A17.067 17.067 0 00910.933 96zM864 168.533v686.934a8.533 8.533 0 01-8.533 8.533H168.533a8.533 8.533 0 01-8.533-8.533V168.533c0-4.693 3.84-8.533 8.533-8.533h686.934c4.693 0 8.533 3.84 8.533 8.533z"></path>
            </svg>
          </li>
          <li className="px-5 h-10 hover:bg-red-700/60 cursor-pointer flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="svg-icon"
              style={{ width: "1em", height: "1em", verticalAlign: "middle" }}
              overflow="hidden"
              viewBox="0 0 1024 1024"
            >
              <path d="M960 170.56L869.44 80 512 437.44 154.56 80 64 170.56 421.44 528 64 885.44 154.56 976 512 618.56 869.44 976 960 885.44 602.56 528 960 170.56z"></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
