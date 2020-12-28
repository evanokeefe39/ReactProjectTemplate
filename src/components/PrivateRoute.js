import React, {useContext} from "react";
import { Route } from 'react-router-dom';
import {SecurityContext} from './SecurityContext';


export default function PrivateRoute(props) {
    const value = useContext(SecurityContext);
    

    return (
        <Route {...props}/>
        
        
        
    );
  }