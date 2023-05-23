"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from'./Features/counter/counterSlice';
import terminalToggleReducer from'./Features/terminal/terminalToggle';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        terminalToggle: terminalToggleReducer,
    },
});

export const AppDispatch = typeof store.dispatch;