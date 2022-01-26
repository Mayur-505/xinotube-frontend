import { createTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const color = process.env.REACT_APP_PRIMARY_COLOR;

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: color,
    },
    secondary: {
      main: '#97BC62',
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
  overrides: {
    MuiListItem: {
      root: {
        '&$selected': {
          color: colors.blue[500],
          backgroundColor: colors.lightBlue[100],
        },
      },
    },
  },
});
