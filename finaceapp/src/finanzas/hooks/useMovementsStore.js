import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import financeApi from "../../api/financeApi";
import { useAuthStore } from "../../auth/hooks";
import { onAddNewMovement, onGetMovements, onUpdateMovement, setIsLoading, onSetActiveMovement, setCategories, setTypes, setFilters, removeFilters, onDeleteMovement } from "../../store";

export const useMovementsStore = () => {

    const { user } = useAuthStore();
    const { movements, isLoading, activeMovement, categories, types, filters } = useSelector( state => state.movements );
    const dispatch = useDispatch();

    const startGettingMovements = async() => {
        try {
            dispatch( setIsLoading() )
            const { data } = await financeApi.get('/movements');
            dispatch( onGetMovements( data.movements ) );
        } catch (error) {
            console.log('Error getting movements');
        }
    }

    const startSavingMovement = async( movement ) => {
        try {
            if( movement.account_movement_id ){
                await financeApi.put(`movements/${ movement.account_movement_id }`, movement);

                dispatch( onUpdateMovement({ ...movement }) );
                return
            }
            const  { data } = await financeApi.post( '/movements', movement );
            dispatch( onAddNewMovement({ ...movement, account_movement_id: data.account_movement_id, user_id: user.user_id }) )
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data?.msg, 'error');
        }
    }

    const setActiveMovementById = ( id ) => {
        if( activeMovement?.account_movement_id === parseInt(id)) return
        const movement = movements.find( movement => movement.account_movement_id === parseInt(id) );
        dispatch( onSetActiveMovement( movement ) );
    }

    const setActiveMovement = ( movement ) => {
        dispatch( onSetActiveMovement( movement ) );
    }

    const getCharacteristics = async() => {
        try {
            dispatch( setIsLoading() )
            const { data: categories } = await financeApi.get('/movements/categories');
            const { data: types } = await financeApi.get('/movements/types');
            dispatch( setCategories( categories.categories ) );
            dispatch( setTypes( types.account_movement_type ) );
        } catch (error) {
            console.log('Error getting categories or types.');
        }
    }

    const onSetFilters = (filter) => {
        dispatch( setFilters( filter ) );
    }

    const onRemoveFilters = (filter) => {
        dispatch( removeFilters( filter ) );
    }

    const startDeletingMovement = async() => {
        try {
            await financeApi.delete(`/movements/${activeMovement.account_movement_id}`);
            dispatch( onDeleteMovement() );
        } catch (error) {
          console.log(error);  
        }
    }

    return{
        isLoading,
        movements,
        activeMovement,
        categories,
        types,
        filters,

        ...categories,
        ...types,
        ...filters,

        startGettingMovements,
        startSavingMovement,
        setActiveMovement,
        setActiveMovementById,
        getCharacteristics,
        onSetFilters,
        onRemoveFilters,
        startDeletingMovement,
    }
}