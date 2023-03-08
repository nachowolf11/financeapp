import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


export const ListCustomItem = ({text, children}) => {
  return (
    <ListItem>
    <ListItemButton>
      <ListItemIcon>
        {children}
      </ListItemIcon>
      <ListItemText primary={text}/>
    </ListItemButton>
  </ListItem>
  )
}
