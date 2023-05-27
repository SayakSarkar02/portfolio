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
         {fileName: "B.Tech in CSE", content: {title: "B.Tech in Computer Science (Artificial Engineering)", university:"MAKAUT", description: "Institute of Engineering and Management, Kolkata", percentage: "---%"}},
     ]
    },
  ],
  achievements: [

  ],
  contact: [
    {folderName: "Professional",
     files: [
         {fileName: "Linkedin", content: {title: "Linkedin", link:"https://www.linkedin.com/in/sayaksarkar02/", description: "Test Linkedin Description"}},
         {fileName: "Twitter", content: {title: "Twitter", link:"https://twitter.com/SayakSarkar02", description: "Test Twitter Description"}},
         {fileName: "Github", content: {title: "Github", link:"https://github.com/SayakSarkar02", description: "Test Github Description"}},
         {fileName: "Email", content: {title: "Email", link:"mailto: sayaksarkar73@gmail.com", description: "Test Mail Description"}},
     ]
    },
    {folderName: "Non-Professional",
     files: [
      {fileName: "Instagram Art", content: {title: "Instagram: art_freak_sayak", link:"https://www.instagram.com/art_freak_sayak/", description: "Test Instagram 1 Description"}},
      {fileName: "Instagram Personal", content: {title: "Instagram: sayak_pvt", link:"https://www.instagram.com/sayak__pvt/", description: "Test Instagram 2 Description"}},
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
