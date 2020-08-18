import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Link
} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  });

function Navbar() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              Anitha Venkatesan
            </Typography>
            <Link href="/" color="inherit"></Link>
            <Link href="/about" color="inherit">About</Link>
            <Link href="/projects" color="inherit">Projects</Link>
            <Link href="/contact" color="inherit">Contact</Link>
          </Toolbar>
        </AppBar>
      </div>
    );

}

export default Navbar;
