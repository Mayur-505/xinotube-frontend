import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2C5F2D'
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