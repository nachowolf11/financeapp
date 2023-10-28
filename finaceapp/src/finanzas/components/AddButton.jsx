import { Add } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import dayjs from 'dayjs'
import React, { useMemo } from 'react'
import { useMovementsStore, useUiStore } from '../hooks'

export const AddButton = () => {

  const { setActiveMovement } = useMovementsStore();
  const { openModal } = useUiStore();


  const onClick = () => {
    const fecha = dayjs().format('YYYY/MM/DD');
  setActiveMovement({
    description: '',
    amount: 0,
    category_id: null,
    creation_date: fecha,
    account_movement_type_id: 3,
  });
  openModal();
  }

  return (
    <IconButton
      onClick={ onClick }
      sx={{
        position: 'fixed',
        bottom:'40px',
        right: '40px',
        boxShadow:1,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        ':hover':{
            bgcolor:'primary.light'
        }
    }}>
        <Add sx={{fontSize: '40px'}}/>
    </IconButton>
  )
}
