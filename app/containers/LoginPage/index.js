import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React,{ useState  } from 'react';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';
import { loginData } from './action';
import Link from '@material-ui/core/Link';
import Forgot from './Forgot';
import { login } from '../../utils/xino-api';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function LoginPage(props) {
  const [values, setvalues] = React.useState({});
  const [isForget, setisForget] = React.useState(false);
  const [state,setstate]= useState({
    email:'admin123456789xyzuhn7uyhnj',
    password:'',
    
  })
  const paperStyleinner = {
    justifyContent: 'space-between',
  };
  const useStyles = makeStyles( theme =>({
    typography: {
      color: '#111',
      marginTop: '15px',
      fontSize: '27.66px',
      fontWeight: 'bold',
      fontFamily:
      'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    typography1: {
      color: '#71717a',
      marginTop: '15px',
      fontSize: '16px',
      fontFamily:
      'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    textField: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: 'none',
      outline: 'none',
    },
    signUpButton: {
      marginTop: '20px',
      fontSize: '16px',
      fontFamily:
      'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 'bold',
      color: 'primary',
    },
    loginButton: {
      marginTop: '20px',
      background: 'secondry',
      color: 'primary',
      fontSize: '16px',
      fontFamily:
      'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      borderRadius: '10px',
      boxShadow:'none',
      marginLeft: '7px',
      fontWeight: 'bold',

    },
    img: {
      backgroundColor: '#fef1f6',
      borderTopRightRadius:'15px',
      borderBottomRightRadius:'15px',
    },
    input: {
      padding : '0px'
    },
    root: {
      '&$focused $notchedOutline': {
        borderColor: '#bfdbfe',
        borderWidth: '4px',
      },
    },
    paperStyle: {
      width: '850px',
      boxShadow: 'none',
      margin: '0',
      border:'1px solid #ededed',
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      [theme.breakpoints.down('sm')]: {
        width: '550px'
      },
    },
    focused: {},
    notchedOutline: {},
  }));
  const classes = useStyles();
  const styles = theme => ({
    textField: {
      width: '94%',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'white',
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500
    },
    input: {
      color: 'orange',
      padding: '0px !important'
    },

  });

  console.info("props ",props)
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    // dispatch(loginData(values))
  }
  const handleOnChange = (e) => {
    e.persist()
    setvalues((value) => ({ ...value, [e.target.name]: e.target.value }));
    
  }
  let history = {useHistory};
  const loginData = async(e)=>{
    // const data = { 
      //   username : state.email,
      //   password : state.password,
      //   server_key: '1312a113c58715637a94437389326a49'
      // }
      const formData = new FormData()
      formData.append('v', '1.0');
      formData.append('server_key', '1312a113c58715637a94437389326a49');
      formData.append('username', state.email);
      
      formData.append('password', state.password);
      
      
      
      
      try {
        const reg = login(formData)
        history.push('/')
      }
      catch (err) {
        history.push("/");
        console.error(err)
      }
      
    }
    
  if(!isForget){
    return (
      <div>
        <div className={classes.main}>
          <Container maxWidth="sm">
            <Paper className={classes.paperStyle}>
              <Grid container style={paperStyleinner}>
                <Grid item xs={12} lg={6} style={{ padding:'16px' }}>
                  <Typography className={classes.typography}>
                    Log in to Xinotube
                  </Typography>
                  <form onSubmit={(e) => handleOnSubmit(e)}>
                    <Typography className={classes.typography1}>Email</Typography>
                    <TextField
                      className={classes.textField}
                      placeholder="yourstruly@gmail.com"
                      name="email"
                      onChange={(e)=>{setstate({...state,email:e.target.value})}}
                      InputProps={{
                        classes: {
                          root: classes.root,
                          focused: classes.focused,
                          notchedOutline: classes.notchedOutline,
                        },
                        style: {
                          padding: 0
                        }
                      }}
                      variant="outlined"
                    />
                       <Typography className={classes.typography1}>Password</Typography>
                       <TextField
                      className={classes.textField}
                     type="password"
                      name="password"
                      onChange={(e)=>{setstate({...state,password:e.target.value})}}
                      InputProps={{
                        className: classes.input,
                        
                        classes: {
                          root: classes.root,
                          focused: classes.focused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                      variant="outlined"
                    />
                    <br/>
                    <div onClick={() => setisForget(!isForget)}>
                      <Link>Forgot Password?</Link>                   
                      </div>
                    <br/>
  
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.loginButton}
                      onClick={loginData}
                    >
                      Log in
                    </Button>
                    <Button color="primary" className={classes.signUpButton}>sign Up</Button>
                  </form>
                </Grid>
                <Grid item xs={12} lg={6}>
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
      </div>
    );
  }
  else{
    return <Forgot />
  }
  
}
