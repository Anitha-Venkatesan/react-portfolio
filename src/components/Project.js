import React from 'react';
import { Card, CardMedia, CardContent, Typography, Link, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "50px",
    },
    Media: {
        objectFit: 'cover',
        width: "60%",
        height: "40%",
        paddingLeft: "50px"

    },
    spacingLeft: {
        paddingLeft: "100px"
    },
    fontSizing: {
        fontWeight: "500"
    }

});

function Project(props) {
    const classes = useStyles()
    return <div>
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.project.title}
                </Typography>
                <Typography  className ={classes.fontWeight} color="textPrimary" component="p">
                    {props.project.description}
                </Typography>
                <CardMedia className={classes.Media}
                    component="img"
                    alt={props.project.title}
                    image={props.project.images}
                />
            </CardContent>
            <Link target="_blank" href={props.project.GitHub} className={classes.spacingLeft} variant="h6" color="inherit">GitHub</Link>
            {props.project.Demo && <Link target="_blank" href={props.project.Demo} className={classes.spacingLeft} variant="h6" color="inherit">Demo</Link>}
        </Card>   
    </div>
}

export default Project;