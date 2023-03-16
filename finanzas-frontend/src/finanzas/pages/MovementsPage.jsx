import { Search } from "@mui/icons-material"
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material"
import { Movements, MovementsHeader, AddButton, MovementModal } from "../components"
import { FinanceLayout } from "../layout/FinanceLayout"
import { useMovementsStore } from "../hooks"

export const MovementsPage = () => {
  const { onSetFilters, filters } = useMovementsStore();

  const handleSearch = (e) => {
    e.preventDefault();
    onSetFilters( {description: e.target['searchfilter'].value.toLowerCase()} )
  }

  return (
  <FinanceLayout>
      <Grid 
        container
        px={2}
        justifyContent="center"
      >
        <Grid item xs={12} md={10} lg={9} bgcolor="">
          <Grid item xs={12} md={6} lg={3}>
            <form onSubmit={handleSearch}>
            <TextField
              id="searchfilter"
              variant="outlined"
              size="small"
              fullWidth
              label="Search"
              sx={{mb:2}}
              InputProps={{
                endAdornment: <InputAdornment position="end"><IconButton type="submit"><Search/></IconButton></InputAdornment>
              }}
              />
              </form>
          </Grid>

          <MovementsHeader/>

          <Movements/>

        </Grid>

      </Grid>

      <MovementModal/>
      <AddButton/>
      
  </FinanceLayout>
  )
}
