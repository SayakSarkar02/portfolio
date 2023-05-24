"use client";

import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from'./Features/sidebar/sidebarSlice';
import sidebarMenuReducer from'./Features/sidebar/sidebarMenu';
import terminalToggleReducer from'./Features/terminal/terminalToggle';

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        menu: sidebarMenuReducer,
        terminalToggle: terminalToggleReducer,
    },
});

export const AppDispatch = typeof store.dispatch;