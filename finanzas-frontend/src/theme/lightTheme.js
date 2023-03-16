import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#3900B3',
          dark: '#240070',
          light: '#5446EA',
          contrastText: '#ffff',
        },
        secondary: {
          main: '#E90064',
          dark: '#B3004D',
          light: '#EA468D',
          contrastText: '#fff',
        },
        backgrounds: {
          main: '#F4F4A1',
          light: '#FFFFF1',
          disabled:'#9483F7'
        }
      },
})