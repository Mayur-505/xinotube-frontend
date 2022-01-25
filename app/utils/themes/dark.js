import { createTheme } from '@material-ui/core/styles';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#fa6165'
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