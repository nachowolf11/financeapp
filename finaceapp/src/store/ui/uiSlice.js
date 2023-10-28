import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDrawerOpen: false,
        isModalOpen: false,
    },
    reducers: {
        onOpenDrawer: ( state ) => {
            state.isDrawerOpen = true;
        },
        onCloseDrawer: ( state ) => {
            state.isDrawerOpen = false;
        },
        onOpenModal: ( state ) => {
            state.isModalOpen = true;
        },
        onCloseModal: ( state ) => {
            state.isModalOpen = false;
        },
    }
});


export const {
    onOpenDrawer,
    onCloseDrawer,
    onOpenModal,
    onCloseModal,
 } = uiSlice.actions;