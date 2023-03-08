import { Search } from "@mui/icons-material"
import { Grid, InputAdornment, TextField } from "@mui/material"
import { Movements, MovementsHeader } from "../components"
import { FinanceLayout } from "../layout/FinanceLayout"

export const MovementsPage = () => {
  return (
  <FinanceLayout>
      <Grid 
        container
        px={2}
        justifyContent="center"
      >
        <Grid item xs={12} md={10} lg={9} bgcolor="">
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              variant="outlined"
              size="small"
              fullWidth
              label="Search"
              sx={{mb:2}}
              InputProps={{
                startAdornment: <InputAdornment position="start"><Search/></InputAdornment>
              }}
              />
          </Grid>

          <MovementsHeader/>

          <Movements/>

        </Grid>

      </Grid>
  </FinanceLayout>
  )
}
