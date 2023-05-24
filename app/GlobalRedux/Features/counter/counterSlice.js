"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isOpen: -1
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    arrSelect: (state, action) => {
      state.isOpen === action.payload? (state.isOpen = -1) : (state.isOpen = action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount, arrSelect } = counterSlice.actions;

export default counterSlice.reducer;
