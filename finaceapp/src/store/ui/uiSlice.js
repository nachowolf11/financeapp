import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDrawerOpen: false,
        isModalOpen: false,
        tutorial:{
            isFirstLogin: true,
            tutorialStep: 'account'
        }
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
        onSetTutorialStep: ( state, { payload } ) => {
            state.tutorial.tutorialStep = payload;
        },
        onSetIsFirstLogin: ( state, { payload } ) => {
            state.tutorial.isFirstLogin = payload;
        }
    }
});


export const {
    onOpenDrawer,
    onCloseDrawer,
    onOpenModal,
    onCloseModal,
    onSetIsFirstLogin,
    onSetTutorialStep
 } = uiSlice.actions;