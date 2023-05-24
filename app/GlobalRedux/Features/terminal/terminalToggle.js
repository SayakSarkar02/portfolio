"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const terminalToggle = createSlice({
  name: "terminalToggle",
  initialState,
  reducers: {
    toggleTerminal: (state) => {
      state.value = !state.value;
    }
  },
});

export const { toggleTerminal } = terminalToggle.actions;

export default terminalToggle.reducer;
