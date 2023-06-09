"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: [

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
