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
  const paperStyle = { padding: '10px 10px', width: 850, margin: '20px ' };
  const useStyles = makeStyles({
    typography: {
      color: '#111',
      fontSize: '27.36px',
      fontWeight: 'bold',
      marginTop: '144px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    typography1: {
      color: '#71717a',
      fontSize: '17px',

      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    textField: {
      display: 'flex',
      marginTop: '20px',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
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
    img: {
      backgroundColor: '#fef1f6',
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
          <Typography className={classes.typography}>Join</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                InputProps={{
                  classes: {
                    root: classes.root,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                variant="outlined"
              />
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
              <Checkbox
                className={classes.checkbox}
                icon={<CircleUnchecked />}
                checkedIcon={<CircleChecked />}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />{' '}
              <Typography className={classes.typography1}>
                Sync my Youtube channel
              </Typography>
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
              <br />
              <Typography className={classes.typography1}>
                By creating an account, you agree to our terms and confirm
                you're over the age of 13.
              </Typography>
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
