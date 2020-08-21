import React from 'react';
import { Card, CardContent, Button, Typography, makeStyles } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    root: {
        maxWidth: 680,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "50px",
    },
    LinkSpacing: {
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"

    }
})
function Contact() {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography>
                        Thanks for visiting my profile. Please feel free to contact me, if you have any questions.
                    </Typography>
                    <p className={classes.LinkSpacing} >
                        <Button
                            href="https://goo.gl/maps/5d9Q2jA14b49ntz8A" 
                            target="_blank"
                            startIcon={<HomeIcon />}>
                            15721 60th Ave N, Plymouth, MN - 55446
                        </Button>
                    </p>
                    <p className={classes.LinkSpacing} >
                        <Button
                            href="mailto:anithamca68@gmail.com"
                            target="_blank"
                            startIcon={<MailIcon />}>
                            anithamca68@gmail.com
                        </Button>
                    </p>
                    <p className={classes.LinkSpacing} >
                        <Button
                            href="tel:9803370241"
                            startIcon={<CallIcon />}>
                            9803370241
                        </Button>
                    </p>
                    
                </CardContent>

            </Card>
        </div>
    )
}

export default Contact;
