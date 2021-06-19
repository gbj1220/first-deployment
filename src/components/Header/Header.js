import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { UserAuthorizationContext } from "../context/AuthenticateUser";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 250,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  const authContext = useContext(UserAuthorizationContext);

  return (
    <div className={classes.root} id='header'>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Task Manager
          </Typography>
          <NavLink to='/sign-in'>
            <Typography>
              <Button>Sign In</Button>
            </Typography>
          </NavLink>
          <NavLink to='sign-up'>
            <Typography>
              <Button>Sign Up</Button>
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
