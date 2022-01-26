import { createTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const primary = process.env.REACT_APP_PRIMARY_COLOR;
const secondary = process.env.REACT_APP_SECONDARY_COLOR;

export const lightTheme = createTheme({
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
      main: primary,
      contrastText: secondary,
    },
    secondary: {
      main: secondary,
      contrastText: primary,
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
    borderRadius: 15,
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
