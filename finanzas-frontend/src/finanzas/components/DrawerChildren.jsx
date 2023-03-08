import { Link as RouterLink } from 'react-router-dom'

import { Divider, IconButton, Link, List, Toolbar, Typography } from "@mui/material"
import { AccountBox, Home, LogoutOutlined, QueryStats, Timeline } from "@mui/icons-material";
import { Box } from "@mui/system";

import { useAuthStore } from "../../auth/hooks";
import { ListCustomItem } from "./ListCustomItem";


export const DrawerChildren = () => {

  const { user, startLogout } = useAuthStore();
  

  return (
      <Box sx={{display: 'flex', flexDirection: "column", flexGrow: 1, bgcolor: 'backgrounds.light'}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
              { user.name }
          </Typography>
        </Toolbar>

        <Divider/>

        <List sx={{flexGrow: 1}}>

          <Link component={ RouterLink } color="inherit" to="/">
            <ListCustomItem text="Home">
              <Home fontSize="medium" color="secondary"/>
            </ListCustomItem>
          </Link>

          <Link component={ RouterLink } color="inherit" to="/account">
            <ListCustomItem text="Account">
              <AccountBox fontSize="medium" color="secondary"/>
            </ListCustomItem>
          </Link>

          <Link component={ RouterLink } color="inherit" to="/movements">
            <ListCustomItem text="Movements">
              <Timeline fontSize="medium" color="secondary"/>
            </ListCustomItem>
          </Link>

          <Link component={ RouterLink } color="inherit" to="/analysis">
            <ListCustomItem text="Analysis">
              <QueryStats fontSize="medium" color="secondary"/>
            </ListCustomItem>
          </Link>

        </List>

        <Divider />


        <IconButton 
          color="error" 
          onClick={ startLogout }
          sx={{}}
        >
          Logout &nbsp;
          <LogoutOutlined />
        </IconButton>
      </Box>
  )
}
