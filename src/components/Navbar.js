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
      backgroundColor:"#a1887f"
      
    },
    title: {
      flexGrow: 1,
    },
    spacing: {
        paddingRight: "10px"
    }
  });

function Navbar() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
            <Link href="/" className={classes.spacing} variant="h5" color="inherit">Anitha Venkatesan</Link>
            </Typography>
            <Link href="/" className={classes.spacing} variant="h6" color="inherit"></Link>
            <Link href="/about" className={classes.spacing} variant="h6" color="inherit">About</Link>
            <Link href="/projects" className={classes.spacing} variant="h6" color="inherit">Projects</Link>
            <Link href="/contact" variant="h6" color="inherit">Contact</Link>
          </Toolbar>
        </AppBar>
      </div>
    );

}

export default Navbar;
