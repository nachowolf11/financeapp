import { Divider, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { FinanceLayout } from "../layout/FinanceLayout"

export const FinancePage = () => {

  return (
    <FinanceLayout>
      <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Box textAlign="center" mb={6}>
            <Typography variant='h2' component="h1" pb={5}>Welcome to my Finance App</Typography>
            <Typography variant='body1' component="span" sx={{fontSize: '20px'}}>
              This app will help you to keep in track your dailys consumes. Also it will provide historical stadistics.
            </Typography>
            <Divider/>
            <Typography variant='body1' component="span" sx={{fontSize: '20px'}}>
              Please do not use real information, this is just a demo web app.
            </Typography>
          </Box>

        </Grid>
      </Grid>
    </FinanceLayout>
  )
}
