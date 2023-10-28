import { Delete, Edit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'

export const MovButtons = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });

    const handleClick = (e) => {
        console.log(e.currentTarget.name);
    }
    
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom:'40px',
                left: ( windowWidth > 1200 ? '300px' : '40px'),
            }}
        >
            <IconButton
            name="delete"
            onClick={ handleClick }
            sx={{
                mr:2,
                boxShadow:1,
                bgcolor: 'secondary.main',
                color: 'secondary.contrastText',
                ':hover':{
                    bgcolor:'secondary.light'
                }
            }}>
                <Delete sx={{fontSize: '40px'}}/>
            </IconButton>
            <IconButton
            name="update"
            onClick={ handleClick }
            sx={{
                boxShadow:1,
                bgcolor: 'secondary.main',
                color: 'secondary.contrastText',
                ':hover':{
                    bgcolor:'secondary.light'
                }
            }}>
                <Edit sx={{fontSize: '40px'}}/>
            </IconButton>
        </Box>
      )
}
