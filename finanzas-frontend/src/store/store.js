import { configureStore } from "@reduxjs/toolkit";
import { authSlice, movementsSlice, uiSlice } from "./";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        movements: movementsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});