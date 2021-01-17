import React from "react";
import Navbar from './Navbar';
//import Grid from '@material-ui/core/Grid';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    height: "100vh"
  }
}));

export default function MainLayout({children}) {
  const classes = useStyles();

  return (
    <main className="cr-app bg-light">
      <div className={classes.root}>
     
        
        <Navbar/>
        
        
        {children}
        
        
        
        

      </div>
      
     
      
      
    </main>
    
  );
}