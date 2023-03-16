import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Grid, IconButton, List, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LoadingPage } from '../../../ui'
import { usePagination } from '../../hooks'
import { useMovementsStore } from '../hooks/useMovementsStore'
import { MovementsItem } from './'


export const Movements = () => {

    const { isLoading, movements, startGettingMovements, getCharacteristics, filters } = useMovementsStore();
    const { currentPage, handleChangePage, limit } = usePagination( 15 );

    useEffect(() => {
        startGettingMovements();
    }, [movements])    

    useEffect(() => {
        getCharacteristics();
    }, [])

    const shouldDisplay = ( movement ) => {
        let matchesDescription = filters.description === '' ? true : movement.description.toLowerCase().includes(filters.description);
        let matchesCategory = filters.category_id.length === 0 ? true : filters.category_id.some( category => category == movement.category_id );
        let matchesStartDate = filters.start_date === '' ? true : filters.start_date <= movement.creation_date ? true : false;
        let matchesEndDate = filters.end_date === '' ? true : filters.end_date >= movement.creation_date ? true : false;

        return matchesCategory && matchesDescription && matchesEndDate && matchesStartDate
    }
    
  return (
    <>
    {
        isLoading 
        ?   <LoadingPage/>
        :
            <Grid item>
                <Box
                    bgcolor="white"
                    mb={5}
                    sx={{
                    boxShadow: 1
                    }}
                >
                    <List sx={{p:0}}>

                        {
                            movements.filter( movement => shouldDisplay(movement) ).slice((currentPage - 1) * limit, currentPage * limit).map( movement => (<MovementsItem id={movement.account_movement_id} key={movement.account_movement_id} movement={movement}/>) )
                        }

                    </List>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                    <Pagination count={Math.ceil(movements.filter( movement => shouldDisplay(movement) ).length / limit)} page={currentPage} onChange={handleChangePage}/>
                </Box>
            </Grid>
    }
    </>

  )
}
