import { useDispatch, useSelector } from "react-redux";
import { onOpenDrawer, onCloseDrawer, onCloseModal, onOpenModal, onSetTutorialStep } from "../../store"
import { useMovementsStore } from "./useMovementsStore";

export const useUiStore = () => {

    const { isDrawerOpen, isModalOpen, tutorial } = useSelector( state => state.ui );
    const { tutorialStep }  = tutorial;

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

    const setTutorialStep = ( payload ) => {
        dispatch( onSetTutorialStep(payload) );
    }

    return{
        // Propiedades
        isDrawerOpen,
        isModalOpen,
        tutorialStep,

        // Metodos
        openDrawer,
        closeDrawer,
        openModal,
        closeModal,
        setTutorialStep,
    }
}