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
  const paperStyle = { padding: '20px 20px', width: 850, margin: '20px ' };
  const useStyles = makeStyles({
    typography: {
      color: '#111',
      fontSize: '27.36px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    typography1: {
      marginTop: '25px',
      color: '#71717a',
      fontSize: '19px',

      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    textField: {
      display: 'flex',
      marginTop: '20px',
      width: '100%',

      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#f3f4f6',
    },
    signUpButton: {
      marginTop: '20px',
      color: 'primary',
      fontSize: '20px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      borderRadius: '12px',
    },
    checkbox: {
      marginTop: '20px',
      color: 'primary',
      fontSize: '14px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      borderRadius: '10px',
    },
    loginButton: {
      marginTop: '20px',

      color: 'primary',
      fontSize: '20px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      marginLeft: '7px',
      fontWeight: 'bold',
    },
    img: {
      backgroundColor: '#fef1f6',
      width: '100',
    },
    root: {
      '&$focused $notchedOutline': {
        borderColor: '#bfdbfe',
        borderWidth: '4px',
      },
    },
    focused: {},
    notchedOutline: {},
  });
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container maxWidth="sm">
        <Paper elevation={2} style={paperStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography className={classes.typography}>Join</Typography>
              <Typography className={classes.typography1}>Email</Typography>
              <TextField
                className={classes.textField}
                InputProps={{
                  classes: {
                    root: classes.root,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                placeholder="yourstruly@example.com"
                variant="outlined"
              />
              <Typography className={classes.typography1}>Password</Typography>
              <TextField
                className={classes.textField}
                InputProps={{
                  classes: {
                    root: classes.root,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                type="password"
                variant="outlined"
              />
              <br />
              <Grid container>
                <Checkbox
                  className={classes.checkbox}
                  icon={<CircleUnchecked />}
                  color="primary"
                  checkedIcon={<CircleChecked />}
                />{' '}
                <Typography className={classes.typography1}>
                  Sync my Youtube channel
                </Typography>
              </Grid>
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

              <Typography className={classes.typography1}>
                By creating an account, you agree to our terms and confirm
                you&apos;re over the age of 13.
              </Typography>
              <br />
            </Grid>
            <div className={classes.img}>
              <Grid item xs={6}>
                <img
                  alt=""
                  src="https://cdn.lbryplayer.xyz/speech/odysee-sign-up:d.png"
                />
              </Grid>
            </div>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
