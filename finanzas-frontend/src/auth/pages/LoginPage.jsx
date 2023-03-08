import { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import  Google  from '@mui/icons-material/Google'
import { Button, Container, Grid, Link, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { useForm } from '../../hooks'
import { useAuthStore } from '../hooks/useAuthStore'
import Swal from 'sweetalert2'

const loginFormFields = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { startLogin, errorMessage } = useAuthStore();

  const {
    email,
    password,
    onInputChange,
  } = useForm( loginFormFields );

  const onSubmit = ( event ) => {
    event.preventDefault();
    startLogin({ email, password });
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

          <form onSubmit={onSubmit}>

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

              <TextField
                fullWidth
                type="password"
                size='small'
                variant='outlined'
                label='Password'
                value={password || ''}
                name="password"
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

                <Button
                  sx={{ bgcolor: 'secondary.main', color:'secondary.contrastText',
                    ':hover':{
                      bgcolor:'secondary.light'
                  }}}
                >
                  <Google sx={{fontSize:20, color:'secondary.contrastText'}}/>
                  &nbsp;
                  Sign in with Google</Button>
              <span className='form-text'>Don´t have an account?
                &nbsp;
                <Link component={ RouterLink } color="primary.dark" to="/auth/register">
                  Sign up
                </Link>
              </span>
            </Box>

          </form>

        </Grid>

      </Grid>
      </Container>
  )
}
