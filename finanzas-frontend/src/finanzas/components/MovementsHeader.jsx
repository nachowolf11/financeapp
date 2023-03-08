import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Grid, List, ListItem, ListItemButton } from '@mui/material'
import React from 'react'

export const MovementsHeader = () => {
  return (
    <Grid 
        item 
        bgcolor="white"
        sx={{
        boxShadow: 1,
        mb:4
        }}
    >
      <Box display="flex" justifyContent="space-between" flexDirection="row">
        <List sx={{display:'inline-flex'}}>
          <ListItem sx={{fontSize:'small'}}>
            Periodo
            <KeyboardArrowDown fontSize="10px"/>
          </ListItem>
          <ListItem sx={{fontSize:'small'}}>
            Categoria
            <KeyboardArrowDown fontSize="10px"/>
          </ListItem>
        </List>
      
        <List>
          <ListItemButton disabled sx={{fontSize:'small'}}>
            Reset filters
          </ListItemButton>
        </List>
      </Box>

        
  </Grid>
  )
}
