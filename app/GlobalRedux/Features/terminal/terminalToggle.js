"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const terminalToggle = createSlice({
  name: "terminalToggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    }
  },
});

export const { toggle } = terminalToggle.actions;

export default terminalToggle.reducer;
