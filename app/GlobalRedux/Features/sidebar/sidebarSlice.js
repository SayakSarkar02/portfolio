"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  whatOpen: -1,
  isOpen: false
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    arrSelect: (state, action) => {
      // state.whatOpen === action.payload? (state.whatOpen = -1) : (state.whatOpen = action.payload);
      if(state.isOpen === false){
        state.whatOpen = action.payload;
        state.isOpen = true;
      }
      else if(state.whatOpen === action.payload && state.isOpen === true){
        state.isOpen = false;
      }
      else if(state.whatOpen !== action.payload && state.isOpen === true){
        state.whatOpen = action.payload;
      }
      else{
        state.whatOpen = action.payload;
        state.isOpen = true;
      }
    },
    toggleSideBarMenu: (state) => {
      if(state.isOpen === false){
        state.isOpen = true;
      }
      else{
        state.isOpen = false;
      }
    },
    closeSideBarMenu: (state) => {
        state.isOpen = false;
    }
  },
});

export const { arrSelect, toggleSideBarMenu, closeSideBarMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer;
