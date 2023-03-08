import { useDispatch, useSelector } from "react-redux";
import { onOpenDrawer, onCloseDrawer } from "../../store"

export const useUiStore = () => {

    const { isDrawerOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const openDrawer = () => {
        dispatch( onOpenDrawer() );
    }

    const closeDrawer = () => {
        dispatch( onCloseDrawer() );
    }

    return{
        // Propiedades
        isDrawerOpen,

        // Metodos
        openDrawer,
        closeDrawer,
    }
}