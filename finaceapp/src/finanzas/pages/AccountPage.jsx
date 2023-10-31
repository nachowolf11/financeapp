import { useEffect, useState } from 'react'

import { AccountCircleOutlined } from '@mui/icons-material'
import { Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { MuiTelInput } from 'mui-tel-input'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Swal from 'sweetalert2'

import { useAuthStore } from '../../auth/hooks'
import { useForm } from '../../hooks'
import { FinanceLayout } from '../layout/FinanceLayout'
import { LoadingPage } from '../../ui'

export const AccountPage = () => {

  const { errorMessage, user, startGetUser, startUpdateUser, isLoading } = useAuthStore(); 

  const [hasChanged, setHasChanged] = useState(false)

  const onHandleHasChange = () => {
    console.log(hasChanged);
    setHasChanged(true)
  }

  useEffect(() => {
    if( !user.email ){
      startGetUser();
    }
  }, [])
  
  
  const {
    name,
    email,
    cellphone,
    birthday,
    formState,
    onInputChange,
    onHandleChangePhone,
    onHandleDateChange,
  } = useForm( user );

  const updateSubmit = async(event) => {
    try {
      event.preventDefault();
      await startUpdateUser( formState );
      Swal.fire('Successfully updated','','success')
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    if( errorMessage !== undefined ){
      Swal.fire('Error en la autenticación', errorMessage,'error')
    }
  }, [errorMessage])

  return (
    <>
    {
      isLoading 
      ? (<LoadingPage/>)
      : <FinanceLayout>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{}}
        >
  
          <Grid item marginX={3}>
            <Box textAlign="center" mb={6} display="flex" flexDirection="row" justifyContent="center">
              <AccountCircleOutlined sx={{fontSize: '45px'}}/>
              <Typography ml={2} variant='h4' component="h1">{ user.name }</Typography>
            </Box>
  
            <form onSubmit={ updateSubmit } onChange={ onHandleHasChange }>
  
              <TextField
                fullWidth
                size='small'
                variant='outlined'
                label='Name'
                value={name || ''}
                name="name"
                onChange={onInputChange}
                sx={{mb: 3}}  
                />
  
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack sx={{ mb: 3 }}>
                  <DesktopDatePicker
                    label="Birthday"
                    inputFormat="DD/MM/YYYY"
                    value={birthday  || ''}
                    onChange={onHandleDateChange}
                    renderInput={(params) => <TextField {...  params} size="small" />}
                    />
                  </Stack>
              </LocalizationProvider>
  
              <TextField
                fullWidth
                size='small'
                variant='outlined'
                label='Email'
                value={email  || ''}
                name="email"
                onChange={onInputChange}
                sx={{mb: 3}}  
              />
  
              <MuiTelInput
                size='small'
                label="Phone"
                fullWidth
                name="cellphone"
                value={cellphone || ''}
                onChange={onHandleChangePhone}
                defaultCountry="AR"
                sx={{mb:3}}
              />

              <Box textAlign="center" display="flex" flexDirection="column">

              <Button
                type="submit"
                disabled={!hasChanged}
                sx={{ bgcolor:'primary.main', color:'primary.contrastText', mb:1,
                  ':hover':{
                      bgcolor:'primary.light'
                  },
                  ':disabled':{
                    bgcolor:'backgrounds.disabled',
                    color:'white'
                  }
                }}>
                  Save
              </Button>
              </Box>

            </form>
  
          </Grid>
  
        </Grid>
      </Container>
      </FinanceLayout>
    }
    
    </>
  )
}
