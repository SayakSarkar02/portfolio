"use client";

import { useState } from 'react';

import React from 'react'

//Components
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import MidSec from '@components/MidSec'

const Home = () => {

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