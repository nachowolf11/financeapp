import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { useUiStore } from '../hooks/useUiStore';
import { DrawerChildren } from './DrawerChildren';

export const SideBar = ({drawerWidth}, props) => {

    const { isDrawerOpen, closeDrawer } = useUiStore();
    
    // const { window } = props;   
    // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
        component="nav"
        sx={{ width: { lg:drawerWidth }, flexShrink: { lg: 0 } }}
    >
        <Drawer
            // container={container}
            variant="temporary"
            open={isDrawerOpen}
            onClose={closeDrawer}
            ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
            display: { xs: 'block', lg: 'none'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            <DrawerChildren/>

        </Drawer>
        <Drawer
            variant="permanent"
            sx={{
            display: { xs: 'none', lg: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
        >
            <DrawerChildren/>
        </Drawer>
        </Box>
  )
}
