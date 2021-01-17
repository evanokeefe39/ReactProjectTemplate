import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';


export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[200], 
    },
  },

});