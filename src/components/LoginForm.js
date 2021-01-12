import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Login';
//username
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {SecurityContext} from './SecurityContext';
//password
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
//login
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '26ch',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
      },
  }));

    
export default function LoginForm() {
    const classes = useStyles();

    const {setUser} = useContext(SecurityContext);

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        isLogin: true,
        usernameMissing: false,
        passwordMissing: false,
        userNotFound: ''
        
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, 
          [prop]: event.target.value, 
          [prop+'Missing']: (event.target.value===""?true:false)
        });

    };

    const handleToggleOnOff = (prop) => (event) => {
        setValues({ ...values, [prop]: !values[prop]});
        
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {

        //setUser({"user": values.username});
        setValues({ ...values,
          ['passwordMissing']: (values.password===""?true:false), 
          ['usernameMissing']: (values.username===""?true:false) });

        if (values.username && values.password) {
          console.log({ username: values.username, password: values.password });
          Login('http://localhost:3000/api/login', { username: values.username, password: values.password })
          .then(data => {
             
            setUser(data);
          })
          .catch(error => {
            console.log('no user found');
            setValues({...values, ['userNotFound']: 'Username and password not valid'})
        });;
        }
        
    }
  
    return (
      <div>
        {/*username*/}
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField 
              error={values.usernameMissing}
              onChange={handleChange('username')} 
              className={clsx(classes.textField)} 
              id="input-with-icon-grid" 
              label="Email" />
            </Grid>
          </Grid>
        </div>
        {/*password*/}
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <VpnKeyOutlinedIcon />
            </Grid>
            <Grid item>
                <FormControl className={clsx(classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            error={values.passwordMissing}
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleToggleOnOff('showPassword')}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                </FormControl>
            </Grid>
          </Grid>
        </div>
        {/*Confirm password */}
        {values.isLogin ? (null):(
            <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <VpnKeyOutlinedIcon aria-hidden="true" />
              </Grid>
              <Grid item>
                  <FormControl className={clsx(classes.textField)}>
                      <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                          <Input
                              
                              id="standard-adornment-password"
                              type='password'
                              value={values.confirmPassword}
                              onChange={handleChange('confirmPassword')}
                              />
                  </FormControl>
              </Grid>
            </Grid>
          </div>
        )}
        {/*login + signup button*/}
        
        <Grid container direction="column" spacing={1} alignItems="flex-end">
        <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="stretch"
        >
            <Button onClick={()=>setValues({ ...values, ['isLogin']: true})} variant={values.isLogin?"contained":"outlined"} size="large" color="primary" className={classes.margin}>Log In</Button>
            <Button onClick={()=>setValues({ ...values, ['isLogin']: false})} variant={values.isLogin?"outlined":"contained"} size="large" color="primary" className={classes.margin}>Sign Up</Button>
        </Grid>
        
        <Grid
            container
            direction="row"
            justify="flex-end"
            >
            <Button onClick={handleSubmit}  size="large" color="primary" className={clsx(classes.textField, classes.margin)}>Submit</Button>
        </Grid>
        </Grid>
        
        
        
       
        
        
      
        
        
      
      
    </div>


        

      
    );
}







