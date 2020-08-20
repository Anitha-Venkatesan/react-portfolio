import React from 'react';
import { Card, CardContent, Link, Typography, makeStyles } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    root: {
        maxWidth: 750,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "50px",
    },
    LinkSpacing: {
        paddingLeft: "250px"

    }
})
function Contact() {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant ="h6">
                        Thanks for visiting my profile,Please feel free to contact me, if you have any questions
                    </Typography>
                    <p className={classes.LinkSpacing} variant="h5"><MailIcon /> : <Link  variant="h6" href="mailto:anithamca68@gmail.com"
                        target="_blank">anithamca68@gmail.com</Link> </p>
                    <p className={classes.LinkSpacing} variant="h5"><CallIcon /> : <Link  variant="h6" href="tel:9803370241 ">9803370241</Link></p>
                    <p className={classes.LinkSpacing} variant="h5"><HomeIcon /> : <Link  variant="h6" href="https://goo.gl/maps/5d9Q2jA14b49ntz8A" target="_blank">
                        15721, 60th Ave N,Plymouth-55446</Link></p>
                </CardContent>

            </Card>
        </div>
    )
}

export default Contact;
