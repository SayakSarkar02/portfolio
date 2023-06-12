"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: [
    {
      name: "Sayak Sarkar",
      year: "junior (3rd) year",
      college: "Institute of Engineering and Management, Kolkata",
      profession: "Full-Stack Web-Developer",
      aboutDesktop: "As a full-stack web developer and graphic designer, I bring a unique blend of technical expertise and creativity to my work. I am a national award winner in poster design. I am passionate about crafting engaging and user-friendly web experiences while creating visually stunning designs. With a strong foundation in coding and design principles, I strive to deliver high-quality solutions that meet client's needs and exceed their expectations. I am a proactive and driven individual, always seeking opportunities to expand my knowledge and skill set. I thrive on the excitement of learning new things and meeting new people in the ever-evolving world of technology. I am thrilled to embrace the future with enthusiasm, as I continue to grow and make a positive impact through my work.",
      aboutMobile: "I'm Sayak, a sophomore CSE undergrad at the Institute of Engineering & Management, Kolkata. As a full-stack web developer and graphic designer, I bring together technical expertise and creativity. I love crafting captivating user experiences and visually stunning designs. I am a national award winner in poster design. I'm always seeking opportunities to learn and grow in the ever-changing world of technology. Let's make a positive impact together!"
    }
  ],
  education: [
    {folderName: "School - Qualification",
     files: [
         {fileName: "Class-X", content: {title: "Class-X", board:"ICSE", description: "St.Augustine's Day School, Kolkata", percentage: "95.80%"}},
         {fileName: "Class-XII", content: {title: "Class-XII", board:"ISC", description: "St.Augustine's Day School, Kolkata", percentage: "97.25%"}},
     ]
    },
    {folderName: "College - Qualification",
     files: [
         {fileName: "B.Tech in CSE", content: {title: "B.Tech in Computer Science (Artificial Engineering)", board:"MAKAUT", description: "Institute of Engineering and Management, Kolkata", percentage: "---%"}},
     ]
    },
  ],
  achievements: [

  ],
  contact: [
    {folderName: "Professional",
     files: [
         {fileName: "Linkedin", content: {title: "Linkedin", link:"https://www.linkedin.com/in/sayaksarkar02/", description: "Check my Linkedin Profile to get a gimpse of what I am upto professionally."}},
         {fileName: "Twitter", content: {title: "Twitter", link:"https://twitter.com/SayakSarkar02", description: "Check my Twitter Profile to get my point of vision and my takes on trending topics."}},
         {fileName: "Github", content: {title: "Github", link:"https://github.com/SayakSarkar02", description: "Check out my Github profile to see what projects I am currently working on."}},
         {fileName: "Email", content: {title: "Email", link:"mailto: sayaksarkar73@gmail.com", description: "Email me to get my attetion directly, no worries I read my emails daily."}},
     ]
    },
    {folderName: "Non-Professional",
     files: [
      {fileName: "Instagram Art", content: {title: "Instagram: art_freak_sayak", link:"https://www.instagram.com/art_freak_sayak/", description: "This Instagram Profile is made for nurturing my creative side, visit check out my latest artworks."}},
      {fileName: "Instagram Personal", content: {title: "Instagram: sayak_pvt", link:"https://www.instagram.com/sayak__pvt/", description: "Get to know me up and close, only specific people are allowed here. So send me a request if you wanna know me personally."}},
     ]
    },
  ],
  projects: [
    {
      id: 1,
      title: "Medbase",
      isComplete: true,
      description: "lorem30 hi this is a test description",
      tagline: "All your Mmdical documents under one roof.",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1686422544/MedBase_immhyy.png",
      img: "",
      stacks: ["React","NodeJS", "MongoDB", "LightHouse", "IPFS", "HTML", "CSS"],
      links: [
        {
          name: "Github",
          link: ""
        },
        {
          name: "Visit",
          link: "https://medbase-ii.firebaseapp.com/"
        }
      ]
    },
    {
      id: 2,
      title: "Ed360",
      isComplete: true,
      description: "This is another test is a test description",
      tagline: "One stop solution to unorganised learning.",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1686423152/Screenshot_2023-06-11_at_12.22.24_AM_uc8oel.png",
      img: "",
      stacks: ["NextJS","NodeJS", "MongoDB", "StoryBloc", "Tailwind"],
      links: [
        {
          name: "Github",
          link: ""
        },
        {
          name: "Visit",
          link: "https://ed360-teacher-frontend.vercel.app/dashboard"
        }
      ]
    },
  ],
  techstacks: [

  ],
  workexperience: [

  ],
  body: [

  ],
  about: [

  ],
};

export const sidebarMenu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setBody: (state, action) => {
      state.body = {
        type: action.payload.type,
        data:action.payload.data};
    },
  },
});

export const { setBody } = sidebarMenu.actions;

export default sidebarMenu.reducer;
