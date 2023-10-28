import { Button, Grid, List, ListItem, ListItemButton } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { LoadingPage } from "../../../ui"
import { Stats } from "../components"
import { useMovementsStore } from "../hooks"
import { FinanceLayout } from "../layout/FinanceLayout"

export const AnalysisPage = () => {
  const { movements, categories, startGettingMovements, getCharacteristics } = useMovementsStore();
  const [isMovementsLoaded, setIsMovementsLoaded] = useState(true);

  useEffect(() => {
    startGettingMovements();
}, [])

useEffect(() => {
  getCharacteristics();
}, [])

useEffect(() => {
  if (movements.length > 0 && categories.length > 0) {
    setIsMovementsLoaded(false);
  }
}, [movements, categories]);

  const [period, setPeriod] = useState('Current Month')

  const onClickPeriod = (e) => {
    setPeriod( e.currentTarget.id )
  }

  return (
    <FinanceLayout>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={9} justifyContent="center" sx={{width:"100%"}}>
          <Box sx={{width:"100%"}}>
            <List sx={{display:"flex", flexDirection:"row"}}>

              <ListItem>
                <ListItemButton
                  selected={ period === 'Current Month' ? true : false }
                  id="Current Month" 
                  sx={{ bgcolor:"white", boxShadow:3}}
                  onClick={onClickPeriod}
                >
                  <Box width="100%" textAlign="center">
                    Current Month
                  </Box>
                </ListItemButton>
              </ListItem>

              <ListItem>
              <ListItemButton
                selected={ period === 'Historical' ? true : false }
                id="Historical"
                sx={{ bgcolor:"white", boxShadow:3}}
                onClick={onClickPeriod}
              >
                  <Box width="100%" textAlign="center">
                    Historical
                  </Box>
                </ListItemButton>
              </ListItem>

            </List>
          </Box>
          {
            isMovementsLoaded ? <LoadingPage/>
            : <Stats period={ period }/>
          }
          
        </Grid>
      </Grid>
    </FinanceLayout>
  )
}
