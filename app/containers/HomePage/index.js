/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function HomePage() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    container: {
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    spacer: {
      marginTop: 20,
      marginBottom: 20
    },
    card: {
      // maxWidth: 400,
      //  minWidth: 275
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              My React app
            </Typography>
          </Toolbar>
        </AppBar>
      <FormattedMessage {...messages.header} />
    </div>
  );
}
