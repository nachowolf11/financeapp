import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#3900B3',
          dark: '#240070',
          light: '#5446EA',
          contrastText: '#fff',
          background: '#F0F2A6'
        },
        secondary: {
          main: '#E90064',
          dark: '#B3004D',
          light: '#EA468D',
          contrastText: '#fff',
        },
      },
})