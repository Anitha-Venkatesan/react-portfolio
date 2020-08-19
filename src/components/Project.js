import React from 'react';
import { Card, CardMedia, CardContent, Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 750,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "50px"
    },
    Media: {
        objectFit: 'cover',
        width: "30%",
        height: "30%",

    }
});

function Project(props) {
    const classes = useStyles()
    return <div>
        <Card>

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.project.title} - {props.project.img}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.project.description}
                </Typography>

                <CardMedia className={classes.Media}
                    component="img"
                    alt={props.project.title}
                    image={props.project.images}
                />

            </CardContent>
            <Link target="_blank" href={props.project.GitHub} variant="h6" color="inherit">GitHub</Link>

            <Link target="_blank" href={props.project.Demo} variant="h6" color="inherit">Demo</Link>

        </Card>

    </div>;
}

export default Project;