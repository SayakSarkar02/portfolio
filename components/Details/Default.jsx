"use client"

import dp from "@public/assets/sayakDP.png"
import Image from "next/image"

const Default = () => {

  return (
    <div className="lg:text-xl">
      <div className="flex flex-row max-sm:flex-col items-center gap-10">
      <Image src={dp} alt="profile" className="w-40 rounded-full my-10 max-sm:mb-0" />
    <div>
    <div className="max-sm:text-center">
    <span className=""><span className="text-2xl">Hey</span><span className=" text-vs-blue-1 text-2xl">(There)</span><span className=" text-yellow-200 text-2xl">!</span></span>
    <br className="sm:hidden"/>
    
    <span className="text-2xl max-sm:text"> My name is <span className="text-yellow-200 text-3xl"> Sayak</span>, <br /> <br /> </span>
      I am a CSE undergrad in my <span className="text-vs-blue-1"> junior(<span className="text-yellow-200">3rd</span>)  </span> year <br /> at <span className="text-vs-purple"> Institute of Engineering & Management, Kolkata. </span>
    </div>
    </div>
    </div>
    <span className="max-sm:hidden">
    As a <span className="text-vs-blue-2"> full-stack web developer</span> and <span className="text-vs-blue-2"> graphic designer </span>, I bring a unique blend of technical expertise and creativity to my work. I am a <span className="text-yellow-200"> national award winner in poster design </span>. I am passionate about crafting engaging and user-friendly web experiences while creating visually stunning designs. With a strong foundation in coding and design principles, I strive to deliver high-quality solutions that meet client's needs and exceed their expectations. I am a proactive and driven individual, always seeking opportunities to expand my knowledge and skill set. 
    </span>
    <span className="sm:hidden pb-40">
      <br />
      As a <span className="text-vs-blue-2">full-stack web developer</span> and <span className="text-vs-blue-2"> graphic designer </span> , I bring together technical expertise and creativity. I love crafting captivating user experiences and visually stunning designs. I am a national award winner in poster design. I'm always seeking opportunities to learn and grow in the ever-changing world of technology. Let's make a positive impact together!
    </span>
  </div>
  )
}

export default Default