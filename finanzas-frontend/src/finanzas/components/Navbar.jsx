import { MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'

import { useUiStore } from '../hooks/useUiStore';

export const Navbar = ({ drawerWidth }) => {

    const { openDrawer } = useUiStore();

  return (
    <AppBar 
        position="fixed"
        sx={{ 
            width: {lg: `calc(100% - ${drawerWidth}px)`},
            ml: { lg: `${ drawerWidth }px` }
        }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                onClick={openDrawer}
                sx={{ mr: 2, display: { xs: 'block', lg: 'none' } }}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid container direction="row" justifyContent='space-between' alignItems="center">
                <Typography variant="h6" noWrap component="div">Finance App</Typography>
            </Grid>

        </Toolbar>
    </AppBar>
  )
}
