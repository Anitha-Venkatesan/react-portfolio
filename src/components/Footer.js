import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#a1887f",
        color: "white",
        textAlign: "center",

    }

})
function FooterComponent() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>Anitha Venkatesan</footer>
    )

}

export default FooterComponent;