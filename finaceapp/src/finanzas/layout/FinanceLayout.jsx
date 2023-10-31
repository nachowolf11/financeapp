import { Box, Toolbar } from "@mui/material"
import { Navbar, SideBar, TutorialComponent } from "../components";
import { useUiStore } from "../hooks";

const drawerWidth = 220;

export const FinanceLayout = ({children}) => {

  const { isFirstLogin } = useUiStore();

  return (
    <>
    <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">

      <Navbar drawerWidth={ drawerWidth } />

      <SideBar drawerWidth={ drawerWidth }/>


      <Box
          component='main'
          sx={{ flexGrow: 1, bgcolor: 'backgrounds.light', minHeight: '100vh'}}
      >
          <Toolbar sx={{marginBottom: 8}}/>

          { children }
          
      </Box>
    </Box>
    {
      isFirstLogin ? <TutorialComponent/> : ''
    }
    </>
  )
}
