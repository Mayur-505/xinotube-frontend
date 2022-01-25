import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

export default function RegisterPage() {
  const paperStyle = { padding: '20px 20px', width: 900, margin: '20px auto' };
  const useStyles = makeStyles({
    typography: {
      color: '#111',
      fontSize: '27.36px',
      fontWeight: 'bold',
      marginTop: '144px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    textField: {
      marginTop: '20px',
    },

    signUpButton: {
      marginTop: '20px',
      color: 'primary',
      fontSize: '16px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      borderRadius: '10px',
      fontWeight: 'bold',
    },
    checkbox: {
      marginTop: '20px',
      color: 'primary',
      fontSize: '14px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      borderRadius: '10px',
      fontWeight: 'bold',
    },
    loginButton: {
      marginTop: '20px',
      color: 'primary',
      fontSize: '16px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      marginLeft: '7px',
      fontWeight: 'bold',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container maxWidth="sm">
        <Paper elevation={8} style={paperStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography className={classes.typography}>Join</Typography>
              <TextField
                className={classes.textField}
                label="Email"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label="Password"
                type="password"
                variant="outlined"
              />
              <br />
              <Checkbox
                className={classes.checkbox}
                icon={<CircleUnchecked />}
                checkedIcon={<CircleChecked />}
              />{' '}
              <Typography>sync my youtube channel</Typography>
              <br />
              <br />
              <Button
                href="#"
                variant="contained"
                color="primary"
                className={classes.signUpButton}
              >
                Sign up
              </Button>
              <Button color="primary" className={classes.loginButton}>
                Log in
              </Button>
              <br />
              <p>
                By creating an account, you agree to our terms and confirm
                you're over the age of 13.
              </p>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.img}>
                <img
                  alt=""
                  src="https://cdn.lbryplayer.xyz/speech/odysee-sign-up:d.png"
                />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
