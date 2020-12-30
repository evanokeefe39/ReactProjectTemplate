import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {SecurityContext} from '../SecurityContext';

import { fade, makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const {user, setUser} = useContext(SecurityContext);

  const [profileMenuAnchor, setProfileMenuAnchor] = React.useState(null);
  const [drawerMenuAnchor, setDrawerMenuAnchor] = React.useState(null);
  

  const isMenuOpen = Boolean(profileMenuAnchor);
  const isDrawerMenuOpen = Boolean(drawerMenuAnchor);
  
  

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleDrawerMenuOpen = (event) => {
    setDrawerMenuAnchor(event.currentTarget);
  };

  

  const handleMenuClose = () => {
    setProfileMenuAnchor(null);
    setDrawerMenuAnchor(null);
    };

  const handleMenuCloseLogOut = () => {
    setProfileMenuAnchor(null);
    setDrawerMenuAnchor(null);
    setUser(null);
    };

  

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={profileMenuAnchor}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      {user? (
      <MenuItem onClick={handleMenuCloseLogOut}>Log Out</MenuItem>
      ):(
      <MenuItem component={Link} to='/login' onClick={handleMenuClose}>Log in</MenuItem>)}
      
    </Menu>
  );

  const drawerMenuId = 'primary-search-drawer-menu';
  const renderDrawerMenu = (
    <Menu
      anchorEl={drawerMenuAnchor}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={drawerMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isDrawerMenuOpen}
      onClose={handleMenuClose}
    >
    
    {user?(
      <div>
        <MenuItem component={Link} to='/home' onClick={handleMenuClose}>
          Home
        </MenuItem>
        <MenuItem component={Link} to='/Test2' onClick={handleMenuClose}>
          Test2
        </MenuItem>
        <MenuItem component={Link} to='/Test3' onClick={handleMenuClose}>
          Test3
        </MenuItem>
    </div>
    ):(
      <MenuItem component={Link} to='/' onClick={handleMenuClose}>
        Home
      </MenuItem>
  )}
        
      
      
    </Menu>
  );

  
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-controls = {drawerMenuId}
            aria-haspopup="true"
            onClick={handleDrawerMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            My App
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
            {user ? (
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </div>
              ):(
                null
              )}
            
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
              <AccountCircle />
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
      {renderDrawerMenu}
      {renderMenu}
    </div>
  );
}
