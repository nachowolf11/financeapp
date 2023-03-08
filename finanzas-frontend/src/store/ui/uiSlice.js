import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDrawerOpen: false
    },
    reducers: {
        onOpenDrawer: ( state ) => {
            state.isDrawerOpen = true;
        },
        onCloseDrawer: ( state ) => {
            state.isDrawerOpen = false;
        },
    }
});


export const { onOpenDrawer, onCloseDrawer } = uiSlice.actions;