import React, {useContext} from "react";
import {Redirect } from 'react-router-dom';
import {SecurityContext} from '../components/SecurityContext';
import LoginForm from '../components/LoginForm';

import Grid from '@material-ui/core/Grid';

export default function LoginPage() {
  
  const {user} = useContext(SecurityContext);

    return (
      <div>
      {user?(
        <Redirect to="/home"/>):(<Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
          <h2>LoginPage</h2>
          <LoginForm/>
  
        </Grid>)}
        </div>
      
    )
  }