import { useDispatch, useSelector } from "react-redux";
import { onOpenDrawer, onCloseDrawer, onCloseModal, onOpenModal } from "../../store"
import { useMovementsStore } from "./useMovementsStore";

export const useUiStore = () => {

    const { isDrawerOpen, isModalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const { setActiveMovement } = useMovementsStore();

    const openDrawer = () => {
        dispatch( onOpenDrawer() );
    }

    const closeDrawer = () => {
        dispatch( onCloseDrawer() );
    }

    const openModal = () => {
        dispatch( onOpenModal() );
    }

    const closeModal = () => {
        setActiveMovement(null);
        dispatch( onCloseModal() );
    }

    return{
        // Propiedades
        isDrawerOpen,
        isModalOpen,

        // Metodos
        openDrawer,
        closeDrawer,
        openModal,
        closeModal,
    }
}