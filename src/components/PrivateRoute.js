import React, {useContext} from "react";
import { Route, Redirect } from 'react-router-dom';
import {SecurityContext} from './SecurityContext';


export default function PrivateRoute(props) {
    const {user} = useContext(SecurityContext);
    
    return (
        <div>
            {user? (
            <Route {...props}/>
            ):(
            <Route {...props}>
                <Redirect to="/login"/>
            </Route>
            )}
        </div>
    );
  }