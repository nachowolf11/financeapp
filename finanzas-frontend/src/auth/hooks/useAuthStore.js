import { useDispatch, useSelector } from "react-redux"
import financeApi from "../../api/financeApi";
import { clearErrorMessage, onChecking, onGetUser, onLogin, onLogout, onSetLoading, onUpdateUser } from "../../store";

export const useAuthStore = () => {

    const { status, user, errorMessage, isLoading } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await financeApi.post('/auth',{ email, password })
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch( onLogin({ name: data.name, user_id: data.user_id }) );


        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startRegister = async({ name, email, password, birthday, cellphone }) => {
        dispatch( onChecking() );
        try {
            const { data } = await financeApi.post('/auth/new',{ name, email, password, birthday, cellphone });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch( onLogin({ name: data.name, user_id: data.user_id }) );
        } catch (error) {
            console.log(error.response.data?.msg);
            dispatch( 
                onLogout(
                    error.response.data?.msg ||
                    Object.values(error.response.data.errors)[0].msg
                    )
                );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        dispatch( onChecking() );
        const token = localStorage.getItem('token');
        if( !token ) return dispatch( onLogout() );

        try {
            const { data } = await financeApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch( onLogin({ name: data.name, user_id: data.user_id }) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }
    
    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
    }

    const startGetUser = async() => {
        try {
            dispatch(onSetLoading())
            const { data } = await financeApi.get('/users');
            dispatch( onGetUser({
                user_id: data.user_id,
                name: data.name,
                email: data.email,
                cellphone: data.cellphone,
                birthday: data.birthday,
            }) );
        } catch (error) {
            console.log('Error getting user.');
        }
    }

    const startUpdateUser = async({ name, email, birthday, cellphone }) => {
        try {
            const { data } = await financeApi.put('/users', { name, email, birthday, cellphone });
            dispatch( onUpdateUser( {
                name: data.name,
                email: data.email,
                cellphone: data.cellphone,
                birthday: data.birthday,
            } ) );
        } catch (error) {
            console.log('Error updating user.');
        }
    }

    return {
        // Propiedades
        errorMessage,
        status,
        user,
        isLoading,

        // Métodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
        startGetUser,
        startUpdateUser,
    }
}