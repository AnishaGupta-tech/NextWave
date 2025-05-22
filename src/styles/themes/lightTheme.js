import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7c4dff',
    },
    secondary: {
      main: '#00e5ff',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});