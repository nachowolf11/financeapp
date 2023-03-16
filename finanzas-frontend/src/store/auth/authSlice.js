import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated' , 'not-authenticated'
        user: {},
        errorMessage: undefined,
        isLoading: false,
    },
    reducers: {
        onSetLoading: ( state ) => {
            state.isLoading = true;
        },
        onChecking: ( state ) => {
            state.status = 'checking';
            state.user = {},
            state.errorMessage = undefined;
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: ( state ) => {
            state.errorMessage = undefined;
        },
        onGetUser: ( state, { payload } ) => {
            state.user = payload;
            state.isLoading = false;
        },
        onUpdateUser: ( state, { payload } ) => {
            state.user = payload;
            state.isLoading = false;
        },
    }
});


export const { onChecking, onLogin, onLogout, clearErrorMessage, onGetUser, onSetLoading, onUpdateUser } = authSlice.actions;