import { Divider, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { separadorMiles } from '../helpers'
import { useUiStore } from '../hooks'
import { useMovementsStore } from '../hooks/useMovementsStore'

export const MovementsItem = ({movement}) => {

    const { setActiveMovementById } = useMovementsStore();
    const { openModal } = useUiStore();

    const onClick = (e) => {
        setActiveMovementById(e.currentTarget.id)
        openModal();
    }

  return (
    <>
    <ListItem 
        id={movement.account_movement_id}
        onClick={onClick}
        sx={{
            p:1,
            ':hover':{
                bgcolor: 'backgrounds.main'
            }
        }}   
    >
        
        <Box display="flex" justifyContent="space-between" px={2} sx={{width:'100%'}}>
            
            <Box>
                <Typography variant='body1'>{movement.description}</Typography>
                <Typography variant='body2'color="grey">{movement.category}</Typography>
            </Box>
            
            
            <Box>
                <Typography 
                    variant='body1'
                    color={movement.account_movement_type_id === 1 ? 'green' : ''}
                >
                    {movement.account_movement_type_id === 1 ? '$' : '-$'} {separadorMiles(movement.amount)}
                </Typography>
                <Typography variant='body2' color="grey">
                    {movement.creation_date}
                </Typography>
            </Box>

        </Box>

    </ListItem>
    <Divider sx={{bgcolor:'#9E9E9E'}}/>
    </>
  )
}
