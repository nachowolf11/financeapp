import { useDispatch, useSelector } from "react-redux";
import { onOpenDrawer, onCloseDrawer, onCloseModal, onOpenModal, onSetIsFirstLogin, onSetTutorialStep } from "../../store"
import { useMovementsStore } from "./useMovementsStore";

export const useUiStore = () => {

    const { isDrawerOpen, isModalOpen, tutorial } = useSelector( state => state.ui );
    const { isFirstLogin, tutorialStep }  = tutorial;

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

    const setIsFirstLogin = ( payload ) => {
        dispatch( onSetIsFirstLogin(payload) );
    }

    const setTutorialStep = ( payload ) => {
        dispatch( onSetTutorialStep(payload) );
    }

    return{
        // Propiedades
        isDrawerOpen,
        isModalOpen,
        isFirstLogin,
        tutorialStep,

        // Metodos
        openDrawer,
        closeDrawer,
        openModal,
        closeModal,
        setIsFirstLogin,
        setTutorialStep,
    }
}