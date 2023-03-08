import { Divider, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { separadorMiles } from '../helpers'

const movement = {
    description: 'Remera de Los Andes',
    account_movement_type_id: 1,
    amount: 50000,
    category_id: 3,
    creation_date: '2023-02-02'
}

export const MovementsItem = () => {
  return (
    <>
    <ListItem sx={{p:2}}>
        
        <Box display="flex" justifyContent="space-between" sx={{width:'100%'}}>
            
            <Typography variant='body1'>{movement.description}</Typography>
            
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
