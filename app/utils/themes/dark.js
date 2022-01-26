import { createTheme } from '@material-ui/core/styles';

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 660,
      lg: 900,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fa6165',
    },
  },
  typography: {
    fontFamily: 'Times New Roman',
    fontSize: 15,
    h1: {
      // incase
      fontFamily: 'Roboto',
      fontSize: 15,
    },
  },
  shape: {
    borderRadius: 0,
  },
});
