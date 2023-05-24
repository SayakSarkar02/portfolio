"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: -1
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    arrSelect: (state, action) => {
      state.isOpen === action.payload? (state.isOpen = -1) : (state.isOpen = action.payload);
    },
  },
});

export const { arrSelect } = sidebarSlice.actions;

export default sidebarSlice.reducer;
