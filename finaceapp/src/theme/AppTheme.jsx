import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from "./"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ lightTheme }>
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}