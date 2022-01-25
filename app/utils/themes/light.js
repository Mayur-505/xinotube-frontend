import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#fa6165'
    },
    secondary: {
      main: '#97BC62'
    }
  },
  typography: {
    fontFamily: 'Times New Roman',
    fontSize: 15,
    h1: {
      // incase
      fontFamily: 'Roboto',
      fontSize: 15
    }
  },
  shape: {
    borderRadius: 0
  }
});