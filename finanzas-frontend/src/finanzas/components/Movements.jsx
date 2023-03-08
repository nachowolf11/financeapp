import { Box, Divider, Grid, List, ListItem } from '@mui/material'
import React from 'react'
import { MovementsItem } from './'

const movements = [ 1, 2, 3, 4, 5, 6, 7 ]

export const Movements = () => {
  return (
    <Grid 
    item 
    bgcolor="white"
    sx={{
      boxShadow: 1
    }}
    >
      <Box>
        <List sx={{p:0}}>

        {
            movements.map( movement => (<MovementsItem key={movement}/>) )
        }

        </List>
      </Box>
  </Grid>
  )
}
