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

  ],
  projects: [

  ],
  techstacks: [

  ],
  workexperience: [

  ],
  body: [

  ]
};

export const sidebarMenu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setBody: (state, action) => {
      state.body = action.payload;
    },
  },
});

export const { setBody } = sidebarMenu.actions;

export default sidebarMenu.reducer;
