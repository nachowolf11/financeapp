import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';

/*
#Ejemplo de validaciones:

formValidations = {
    email: [ (value) => value.includes('@'),'El correo debe tener una @.' ],
    password: [ (value) => value.length >= 6,'El password debe tener mas de 6 letas.' ],
    displayName: [ (value) => value.length >= 1,'El nombre es obligatorio.' ]
  
  }
*/

export const useMovementForm = ( initialForm = {}, formValidations = {} ) => {

  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false)
    

    useEffect(()=>{
        if(formState){
            createValidators();
        }
    }, [ formState ]);

    useEffect(() => {
            setFormState( initialForm );
    }, [ initialForm ])
    

    const isFormValid = useMemo( () => {
        
        for (const formValue of Object.keys( formValidation )) {
            if( formValidation[formValue] !== null ) return false;
        }
        return true;
    }, [ formValidation ])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage; 
        }
        setFormValidation( formCheckedValues );
    }

    //Date Managment
    const onHandleDateChange = (event) => {
      setFormState({
        ...formState,
        creation_date: dayjs(event).format('YYYY/MM/DD')
      })
    };

    return {
        ...formState,
        formState,
        onInputChange,

        ...formValidation,
        isFormValid,

        formSubmitted,
        setFormSubmitted,

        onHandleDateChange,
    }
}