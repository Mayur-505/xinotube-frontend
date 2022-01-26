/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../App/Header';

export default function HomePage() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    container: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    spacer: {
      marginTop: 20,
      marginBottom: 20,
    },
    card: {
      // maxWidth: 400,
      //  minWidth: 275
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
}
