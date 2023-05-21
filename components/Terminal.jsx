"use client";

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const Terminal = () => {

  const router = useRouter();
  const inputRef = useRef(null);
  const [meet, setMeet] = useState(false);
  const [output, setOutput] = useState([]);

  const terminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleTerminalRun = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    const command = inputRef.current.value;
    if(command.trim() === "npm run meet"){
      const temp = [...output, {in:inputRef.current.value, out:"Taking to Sayak's Favourite Place..."}];
      setOutput(temp);
      setTimeout(() => {
        setMeet(true);
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
    <div className="border-2 border-vs-gray-2 h-80 flex flex-col max-sm:px-4 max-sm:h-72 px-8 py-3">
      <ul className="flex flex-row gap-6 max-sm:gap-2">
        <li className="text-vs-white-2 cursor-pointer">PROBLEMS</li>
        <li className="text-vs-white-2 cursor-pointer">OUTPUT</li>
        <li className="text-vs-white-2 cursor-pointer max-sm:hidden">DEBUG CONSOLE</li>
        <li className="text-vs-white-2 cursor-pointer border-transparent border-b-vs-blue-3 border-[1px]">TERMINAL</li>
      </ul>

      <form onSubmit={handleTerminalRun} className="py-2 h-64 w-full"onClick={terminalClick}>
        {output!==[]?
        output.map((comdata)=>(
          <div>
          <h3>{"Sayaks_Device"}<span className="text-vs-blue-3">{"/Desktop~ "}</span> $ <span className="bg-transparent w-[80%] text-vs-white-1 focus:border-none focus:outline-none" type="text">{comdata?.in}</span></h3>
          {comdata?.out}
        </div>
        ))
        :null}
        <h3 className='flex flex-row gap-2 flex-wrap'>{"Sayaks_Device"}<span className="text-vs-blue-3">{"/Desktop~ "}</span> $ <input ref={inputRef} placeholder='Try: npm github / npm meet' className=" placeholder:text-vs-gray-2 bg-transparent w-[80%] max-sm:w-[100%] text-vs-white-1 focus:border-none focus:outline-none" type="text" /></h3>

      </form>



      {/* Meet Easter Egg */}
      {meet && <div className='absolute top-0 left-0 w-[95vw] h-[93vh] bg-[#1f2122] flex items-center justify-center'>
        <div onClick={()=>setMeet(false)} className='absolute top-2 right-2 w-8 h-8 bg-red-700 rounded-full text-white text-xl leading-none cursor-pointer hover:bg-red-500 text-center pb-1 flex items-center justify-center font-sans'>x</div>
          <Image src="/assets/meet.png" width={1250} height={100}></Image>
      </div>}



    </div>
  )
}

export default Terminal