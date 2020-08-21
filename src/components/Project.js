import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, makeStyles, Button,
    CardActionArea, CardActions } from '@material-ui/core';
import { GitHub, Web } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "50px",
    },
    Media: {
        objectFit: 'cover',
        height: "40%",
        marginTop: theme.spacing(1)

    }
}));

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
            
            <CardActionArea>
                <CardActions>
                    <Box m='auto'>
                        <Box display='inline-block'>
                            <Button
                                startIcon={<GitHub />}
                                href={props.project.GitHub}
                                target="_blank"
                            >
                                Repository
                            </Button>
                        </Box>

                        {props.project.Demo && <Box display='inline-block' ml={1}>
                            <Button
                                startIcon={<Web />}
                                href={props.project.Demo}
                                target="_blank"
                            >
                                Demo
                            </Button>
                        </Box>}
                    </Box>
                </CardActions>
            </CardActionArea>
        </Card>   
    </div>
}

export default Project;