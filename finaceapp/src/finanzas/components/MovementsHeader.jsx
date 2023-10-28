import { Box, Button, Checkbox, FormControlLabel, Grid, List, ListItem, TextField } from '@mui/material'
import React from 'react'
import { useMovementsStore } from '../hooks'

export const MovementsHeader = () => {

  const { categories, onSetFilters, filters, onRemoveFilters } = useMovementsStore();

  const handleChange = (e) => {
    onSetFilters( {[e.target.name]: e.target.value} )
  }

  const handleCheckBox = (e) => {
    if(e.target.checked){
      onSetFilters( {[e.target.name]: e.target.value} )
    }else{
      onRemoveFilters({[e.target.name]: e.target.value})
    }
  }


  return (
    <Grid 
        item
        bgcolor="white"
        sx={{
        boxShadow: 1,
        mb:4
        }}
    >
      <Box>
        <List id="movementsHeader" sx={{display: 'flex' }}>
          <ListItem sx={{fontSize:'small'}}>
            <Button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
              Categories
            </Button>
            <List className="dropdown-menu" sx={{borderRadius:1, boxShadow: 3, px:2}}>
              {
                categories.map( category => (
                  <li key={category.category_id}><FormControlLabel control={<Checkbox name='category_id' value={category.category_id} onChange={handleCheckBox}/>} label={ category.name } /></li>
                ) )
              }
            </List>
          </ListItem>

          <ListItem sx={{fontSize:'small'}}>
            <TextField
              onChange={handleChange}
              name='start_date'
              size='small'
              type="date"
              focused
              sx={{color: 'primary.main', mr:2}}
            />
          </ListItem>
          <ListItem sx={{fontSize:'small'}}>
            <TextField
              onChange={handleChange}
              error={ filters.end_date && filters.start_date > filters.end_date ? true : false }
              name='end_date'
              size='small'
              type="date"
              focused
              sx={{color: 'primary.main'}}
              />
          </ListItem>
        </List>
      </Box>

        
  </Grid>
  )
}
