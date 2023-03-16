import { createSlice } from '@reduxjs/toolkit';

export const movementsSlice = createSlice({
    name: 'movements',
    initialState: {
        movements: [],
        isLoading: false,
        activeMovement: null,
        categories: [],
        types: [],
        filters:{
            description:"",
            category_id:[],
            start_date:"",
            end_date:"",
        }
    },
    reducers: {
        setIsLoading: ( state ) => {
            state.isLoading = true;
        },
        onSetActiveMovement: ( state, { payload } ) => {
            state.activeMovement = payload;
        },
        onGetMovements: ( state, { payload } ) => {
            payload.forEach( movement => {
                const exists = state.movements.some( dbMovement => dbMovement.account_movement_id === movement.account_movement_id );
                if( !exists ){
                    state.movements.push( movement )
                }
            });
            state.movements.sort(( a, b )=> new Date(b.creation_date) - new Date(a.creation_date));
            state.isLoading = false;
        },
        onAddNewMovement: ( state, { payload } ) => {
            state.movements.push( payload );
            state.activeMovement = null;
        },
        onUpdateMovement: ( state, { payload } ) => {
            state.movements = state.movements.map( movement => {
                if( movement.account_movement_id === payload.account_movement_id ){
                    return payload;
                }
                return movement;
            } )
        },
        setCategories: ( state, { payload } ) => {
            state.categories = payload;
        },
        setTypes: ( state, { payload } ) => {
            state.types = payload;
        },
        setFilters: ( state, {payload} ) => {
            if( payload.hasOwnProperty('category_id') ){
                state.filters.category_id.push(payload.category_id)
            }else{
            state.filters = {
                ...state.filters,
                ...payload,
            }
            }
        },
        removeFilters: ( state, { payload } ) => {
            if( payload?.hasOwnProperty('category_id') ){
                state.filters.category_id = state.filters.category_id.filter(
                    category => category != payload.category_id
                )
            }
        }
}
});


export const {
    onAddNewMovement,
    onGetMovements,
    onSetActiveMovement,
    onUpdateMovement,
    setCategories,
    setIsLoading,
    setTypes,
    orderMovements,
    setFilters,
    removeFilters,
    } = movementsSlice.actions;