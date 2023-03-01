import { Link as RouterLink } from 'react-router-dom'

import { Button, Container, Grid, Link, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDate } from '../hooks'
import { PhoneInput } from '../components/PhoneInput';

export const RegisterPage = () => {

  const { date, onHandleDateChange} = useDate();

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

          <form>

            <TextField
              fullWidth
              size='small'
              variant='outlined'
              label='Name'
              sx={{mb: 3}}  
              />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack sx={{ mb: 3 }}>
                <DesktopDatePicker
                  label="Birthday"
                  inputFormat="DD/MM/YYYY"
                  value={date}
                  onChange={(event) => onHandleDateChange(event)}
                  renderInput={(params) => <TextField {...  params} size="small" />}
                  />
                </Stack>
            </LocalizationProvider>

            <TextField
              fullWidth
              size='small'
              variant='outlined'
              label='Email'
              sx={{mb: 3}}  
            />

            <PhoneInput/>

            <TextField
              fullWidth
              size='small'
              variant='outlined'
              label='Password'
              sx={{mb: 3}}  
            />

            <TextField
              fullWidth
              size='small'
              variant='outlined'
              label='Repeat your password'
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
