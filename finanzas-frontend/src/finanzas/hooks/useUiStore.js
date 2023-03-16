import { useDispatch, useSelector } from "react-redux";
import { onOpenDrawer, onCloseDrawer, onCloseModal, onOpenModal } from "../../store"

export const useUiStore = () => {

    const { isDrawerOpen, isModalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();

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