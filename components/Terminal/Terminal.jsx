"use client";

import useSound from 'use-sound';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
// import jotunamila from '@assets/music/jotunamila.mp3';
import kharahu from '@public/assets/music/kharahu.mp3';

import { useDispatch } from "react-redux";
import {toggleTerminal} from "@app/GlobalRedux/Features/terminal/terminalToggle";
import {closeSideBarMenu} from "@app/GlobalRedux/Features/sidebar/sidebarSlice"
import Meet from '@components/EasterEggs/test/Meet';
import Problems from './Problems';
import Output from './Output';
import Debug from './Debug';

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

  //Terminal Menu
  const [terminalMenu, setTerminalMenu] = useState(4);

  //Commands for terminal
  const handleTerminalRun = (e) => {
    e.preventDefault();

    const command = inputRef.current.value;
    if(command.trim() === "npm run meet"){
      const temp = [...output, {in:inputRef.current.value, out:"Taking to Sayak's Favourite Place..."}];
      setOutput(temp);
      setTimeout(() => {
        dispatch(closeSideBarMenu());
        setMeet(true);
        setTimeout(() => {
          play();
        }, 1000);
      }, 2000);
    }
    else if(command.trim()==="npm meet"){
      const temp = [...output, {in:inputRef.current.value, out:"Setting up a Meet with Sayak..."}];
      setOutput(temp);
      setTimeout(() => {
        router.push('https://bit.ly/sayaksarkar');
      }, 1000);
    }
    else if(command.trim()==="npm github"){
      const temp = [...output, {in:inputRef.current.value, out:"Going to Sayak's Github..."}];
      setOutput(temp);
      setTimeout(() => {
        router.push('https://github.com/sayaksarkar02');
      }, 1000);
    }
    else if(command.trim()==="npm twitter"){
      const temp = [...output, {in:inputRef.current.value, out:"Moving to Sayak's Twitter..."}];
      setOutput(temp);
      setTimeout(() => {
        router.push('https://twitter.com/SayakSarkar02');
      }, 1000);
    }
    else if(command.trim()==="npm linkedin"){
      const temp = [...output, {in:inputRef.current.value, out:"Loading Up Sayak's Linkedin..."}];
      setOutput(temp);
      setTimeout(() => {
        router.push('https://www.linkedin.com/in/sayaksarkar02/');
      }, 1000);
    }
    else if(command.trim()==="npm instagram"){
      const temp = [...output, {in:inputRef.current.value, out:"Visiting Sayak's Instagram Page..."}];
      setOutput(temp);
      setTimeout(() => {
        router.push('https://www.instagram.com/art_freak_sayak/');
      }, 1000);
    }
    else if(command.trim()==="npm mail"){
      const temp = [...output, {in:inputRef.current.value, out:"Setting you up to mail Sayak..."}];
      setOutput(temp);
      setTimeout(() => {
        router.push('mailto:sayaksarkar73@gmail.com');
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
    inputRef.current.blur();
  }

  return (
  <div>
    <div className="border-2 border-vs-gray-2 h-56 bg-vs-gray-6 flex flex-col itsm max-sm:px-4 max-sm:h-64 px-8 py-3 relative bottom-6 max-sm:text-sm">
      {/* Terminal Header Menu */}
      <div className='flex flex-row justify-between items-center'>
      <ul className="flex flex-row gap-6 max-sm:gap-2 select-none items-center">
        <li onClick={()=>{setTerminalMenu(1)}} className={"text-vs-white-2 cursor-pointer border-transparent border-[1px]" + (terminalMenu===1 && " border-b-vs-blue-3 ")}>PROBLEMS</li>
        <li onClick={()=>{setTerminalMenu(2)}} className={"text-vs-white-2 cursor-pointer border-transparent border-[1px] max-sm:hidden " + (terminalMenu===2 && " border-b-vs-blue-3 ")}>OUTPUT</li>
        <li onClick={()=>{setTerminalMenu(3)}} className={"text-vs-white-2 cursor-pointer border-transparent border-[1px] max-sm:hidden " + (terminalMenu===3 && " border-b-vs-blue-3 ")}>DEBUG-CONSOLE</li>
        <li onClick={()=>{setTerminalMenu(3)}} className={"text-vs-white-2 cursor-pointer border-transparent border-[1px] sm:hidden " + (terminalMenu===3 && " border-b-vs-blue-3 ")}>DEBUG</li>
        <li onClick={()=>{setTerminalMenu(4)}} className={"text-vs-white-2 cursor-pointer border-transparent border-[1px]" + (terminalMenu===4 && " border-b-vs-blue-3 ")}>TERMINAL</li>
      </ul>
      <div className='sm:px-4 cursor-pointer' onClick={()=>{dispatch(toggleTerminal())}}
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

      {/* Problems Body */}
      {terminalMenu===1 && <Problems/>}

      {/* Output Body */}
      {terminalMenu===2 && <Output/>}

      {/* Debug Body */}
      {terminalMenu===3 && <Debug/>}

      {/* Terminal Body */}
      { terminalMenu===4 && <form onSubmit={handleTerminalRun} className="py-2 h-64 w-full overflow-y-scroll" onClick={terminalClick}>
        {output!==[]?
        output.map((comdata, index)=>(
          <div key={index}>
          <h3 className="text-vs-blue-3">{"Sayaks_Device"}<span className="text-vs-blue-3">{"/Desktop~ "}</span> $ <span className="bg-transparent w-[80%] text-vs-white-1 focus:border-none focus:outline-none" type="text">{comdata?.in.split(' ').map((word)=>(['npm', 'run'].includes(word)?(<span className='text-yellow-300'>{word}&nbsp;</span>):(<span className='text-vs-white-1'>{word}&nbsp;</span>)))}</span></h3>
          {comdata?.out}
        </div>
        ))
        :null}
        <h3 className='flex flex-row gap-2 flex-wrap text-vs-blue-3'>{"Sayaks_Device"}<span className="text-vs-blue-3">{"/Desktop~ "}</span> $ <input ref={inputRef} placeholder='Try: npm github / npm meet' className=" placeholder:text-vs-gray-2 bg-transparent sm:w-[60%] md:w-[70%] w-[100%] text-vs-white-1 focus:border-none focus:outline-none" type="text" /></h3>

      </form>}


      

    </div>
    {/* Meet Easter Egg */}
    {meet && <Meet setMeet={setMeet} stop={stop}/>}
    </div>
  )
}

export default Terminal