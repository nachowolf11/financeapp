import { useState } from "react"

export const usePagination = ( limit ) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handleChangePage = (e, value) => {
        setCurrentPage( value );
    }
    return{
        handleChangePage,
        currentPage,
        limit,
        setCurrentPage,
    }
}