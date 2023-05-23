"use client";

import useSound from 'use-sound';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import jotunamila from '../public/assets/jotunamila.mp3';
import kharahu from '../public/assets/kharahu.mp3';

import { useDispatch } from "react-redux";
import {toggleTerminal} from "@app/GlobalRedux/Features/terminal/terminalToggle";

const Terminal = () => {

  //Redux State Handling
  const dispatch = useDispatch();

  //Music Play Settings
  const soundOptions = {
    volume: 0.3, // Set the volume level (0 to 1)
    playbackRate: 1, // Set the playback rate (default: 1)
    interrupt: false, // Allow playing multiple instances simultaneously (default: false)
  };

  //Music Play Hook
  const [play, { stop }] = useSound(kharahu, soundOptions);

  //Navigate to different pages and links
  const router = useRouter();

  //Input Reference of terminal input tag
  const inputRef = useRef(null);

  //Output Array to store used commands
  const [output, setOutput] = useState([]);

  //To check if meet Window is open or not
  const [meet, setMeet] = useState(false);
  
  //Focus on terminal when clicked
  const terminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  //Commands for terminal
  const handleTerminalRun = (e) => {
    e.preventDefault();

    const command = inputRef.current.value;
    if(command.trim() === "npm run meet"){
      const temp = [...output, {in:inputRef.current.value, out:"Taking to Sayak's Favourite Place..."}];
      setOutput(temp);
      setTimeout(() => {
        setMeet(true);
        setTimeout(() => {
          play();
        }, 1000);
      }, 2000);
      console.log("Playing Music");
    }
    else if(command.trim()==="npm meet"){
      const temp = [...output, {in:inputRef.current.value, out:"Setting up a Meet with Sayak..."}];
      setOutput(temp);
      setTimeout(() => {
        router.push('https://bit.ly/sayaksarkar');
      }, 1000);
    }
    else if(command.trim()==="npm github"){
      const temp = [...output, {in:inputRef.current.value, out:"Going to Github..."}];
      setOutput(temp);
      setTimeout(() => {
        router.push('https://github.com/sayaksarkar02');
      }, 1000);
    }
    else if(command.trim()==="clear"){
      setOutput([]);
    }
    else{
      const temp = [...output, {in:inputRef.current.value, out:"Command not found"}];
      setOutput(temp);
    }

    inputRef.current.value = "";
  }

  return (
    <div className="border-2 border-vs-gray-2 h-56 flex flex-col itsm max-sm:pl-4 max-sm:h-72 pl-8 py-3 relative bottom-6">
      <div className='flex flex-row justify-between items-center'>
      <ul className="flex flex-row gap-6 max-sm:gap-2">
        <li className="text-vs-white-2 cursor-pointer">PROBLEMS</li>
        <li className="text-vs-white-2 cursor-pointer">OUTPUT</li>
        <li className="text-vs-white-2 cursor-pointer max-sm:hidden">DEBUG CONSOLE</li>
        <li className="text-vs-white-2 cursor-pointer border-transparent border-b-vs-blue-3 border-[1px]">TERMINAL</li>
      </ul>
      <div className='px-4 cursor-pointer' onClick={()=>{dispatch(toggleTerminal())}}
      >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="svg-icon"
          style={{ width: "0.8em", height: "0.8em", verticalAlign: "middle" }}
          overflow="hidden"
          viewBox="0 0 1024 1024"
        >
          <path d="M960 170.56L869.44 80 512 437.44 154.56 80 64 170.56 421.44 528 64 885.44 154.56 976 512 618.56 869.44 976 960 885.44 602.56 528 960 170.56z"></path>
        </svg>
      </div>
      </div>

      <form onSubmit={handleTerminalRun} className="py-2 h-64 w-full overflow-y-scroll"onClick={terminalClick}>
        {output!==[]?
        output.map((comdata, index)=>(
          <div key={index}>
          <h3>{"Sayaks_Device"}<span className="text-vs-blue-3">{"/Desktop~ "}</span> $ <span className="bg-transparent w-[80%] text-vs-white-1 focus:border-none focus:outline-none" type="text">{comdata?.in}</span></h3>
          {comdata?.out}
        </div>
        ))
        :null}
        <h3 className='flex flex-row gap-2 flex-wrap'>{"Sayaks_Device"}<span className="text-vs-blue-3">{"/Desktop~ "}</span> $ <input ref={inputRef} placeholder='Try: npm github / npm meet' className=" placeholder:text-vs-gray-2 bg-transparent sm:w-[60%] md:w-[70%] w-[100%] text-vs-white-1 focus:border-none focus:outline-none" type="text" /></h3>

      </form>

      {/* Meet Easter Egg */}
      {meet &&
      <div style={{ width: window.innerWidth, height:window.innerHeight }} className='absolute bottom-0 left-0 bg-[#1f2122] flex items-center justify-center'>
        <div onClick={()=>{setMeet(false);stop();}} className='absolute top-20 right-20 w-8 h-8 bg-red-700 rounded-full text-white text-xl leading-none cursor-pointer hover:bg-red-500 text-center pb-1 flex items-center justify-center font-sans'>x</div>
        <img src="/assets/meet.png" className='h-[90%] self-end  object-cover' alt="meet"/>
      </div>}

    </div>
  )
}

export default Terminal