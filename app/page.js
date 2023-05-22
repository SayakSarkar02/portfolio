"use client";

import { useState } from 'react';

import React from 'react'

//Components
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import MidSec from '@components/MidSec'

const Home = () => {

  // const myinfo = [
  //   {
  //     name: "Sayak Sarkar",
  //     age: 21,
  //     gender: "Male",
  //     address: "83/5, Suren Sarkar Road Kolkata-700010",
  //     phone: "8420310125",
  //     email: "sayaksarkar73@gmail.com",
  //     linkedin: "https://www.linkedin.com/in/sayaksarkar02/",
  //     twitter: "https://twitter.com/SayakSarkar02",
  //     github: "https://github.com/SayakSarkar02",
  //     instagram: "https://www.instagram.com/sayak__pvt/",
  //   }
  // ]

  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  const toggleTerminal = () => {
    setIsTerminalOpen(prev=>!prev)
  }
  return (
    <>
      <Navbar toggleTerminal={toggleTerminal} isTerminalOpen={isTerminalOpen}/>
      <MidSec toggleTerminal={toggleTerminal} isTerminalOpen={isTerminalOpen} setIsTerminalOpen={setIsTerminalOpen}/>
      <Footer/>
    </>
  )
}

export default Home