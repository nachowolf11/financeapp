import { Box, Typography } from '@mui/material'
import { BeatLoader } from "react-spinners"

export const LoadingPage = () => {
  return (
        <Box
          sx={{
          display:'flex',
          flexDirection:"column",
          bgcolor:'backgrounds.main',
          height:'100vh',
          justifyContent: 'center',
          alignItems: 'center'
          }}>
            <BeatLoader color="#3900B3"/>
            <Typography variant='body1' sx={{paddingTop: 2}}>Loading</Typography>
        </Box>
  )
}
