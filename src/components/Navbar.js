import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    List,
    ListItem
} from "@material-ui/core";
import { NavLink, Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
      
    },
    title: {
      flexGrow: 1,
      fontSize: theme.typography.h5.fontSize,
      textDecoration: 'none',
      color: theme.palette.common.white
    },
    links: {
      display: 'flex',
      flexDirection: 'row'
    }
  }));

function Navbar() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <Link to="/" exact className={classes.title}>
              Anitha Venkatesan
            </Link>

            <List className={classes.links}>
              <ListItem button component={NavLink} to="/" activeClassName="Mui-selected" exact>
                About
              </ListItem>

              <ListItem button component={NavLink} to="/projects" activeClassName="Mui-selected">
                Projects
              </ListItem>

              <ListItem button component={NavLink} to="/contact" activeClassName="Mui-selected">
                Contact
              </ListItem>
            </List>

          </Toolbar>
        </AppBar>
      </div>
    );

}

export default Navbar;
