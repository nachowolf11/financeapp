import { Link as RouterLink } from 'react-router-dom'
import { useEffect } from 'react';

import { Button, Container, Grid, Link, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MuiTelInput } from 'mui-tel-input';
import Swal from 'sweetalert2';

import { useAuthStore } from '../hooks'
import { useForm } from '../../hooks';

const registerFormFields = {
  name:      '',
  email:     '',
  password:  '',
  password2: '',
}

export const RegisterPage = () => {

  const { startRegister, errorMessage } = useAuthStore();
  
  const {
    name,
    email,
    cellphone,
    birthday,
    password,
    password2,
    onInputChange,
    onHandleChangePhone,
    onHandleDateChange
  } = useForm( registerFormFields );

  const registerSubmit = ( event ) => {
    event.preventDefault();
    
    if( password !== password2 ){
        Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
        return
    }

    startRegister({ name,email,password, birthday, cellphone});
  }

useEffect(() => {
  if( errorMessage !== undefined ){
    Swal.fire('Error en la autenticación', errorMessage,'error')
  }
}, [errorMessage])

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{minHeight:'100vh'}}
      >

        <Grid item marginX={3}>
          <Box textAlign="center" mb={6}>
            <Typography variant='h4' component="h1">Welcome back</Typography>
            <Typography variant='body1' component="span">Welcome back. Please enter your details</Typography>
          </Box>

          <form onSubmit={ registerSubmit }>

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
                  value={birthday || ''}
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
              value={email || ''}
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

            <TextField
              type="password"
              fullWidth
              size='small'
              variant='outlined'
              label='Password'
              value={password || ''}
              name="password"
              onChange={onInputChange}
              sx={{mb: 3}}  
            />

            <TextField
              type="password"
              fullWidth
              size='small'
              variant='outlined'
              label='Repeat your password'
              value={password2 || ''}
              name="password2"
              onChange={onInputChange}
              sx={{mb: 3}}  
            />

            <Box textAlign="center" display="flex" flexDirection="column">

                <Button
                  type="submit"
                  sx={{ bgcolor:'primary.main', color:'primary.contrastText', mb:1,
                    ':hover':{
                        bgcolor:'primary.light'
                    }
                  }}>
                    Sign in
                </Button>

              <span className='form-text'>Already have an account?
                &nbsp;
                <Link component={ RouterLink } color="primary.dark" to="/auth/login">
                  Sign in
                </Link>
              </span>
            </Box>

          </form>

        </Grid>

      </Grid>
    </Container>
  )
}
