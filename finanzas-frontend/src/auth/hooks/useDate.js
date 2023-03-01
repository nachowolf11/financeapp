import { useState } from "react";

export const useDate = () => {

    const [date, setDate] = useState();

    const onHandleDateChange = (event) => {
      setDate(event);
    };

    return{
        date, setDate, onHandleDateChange
    }
}