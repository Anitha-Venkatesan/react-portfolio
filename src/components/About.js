import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 750,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "50px"
    },
    Media: {

        width: '100%',
        objectFit: 'cover'
    }
});


function About() {
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.Media}
                        component="img"
                        alt="Profile-Picture"
                        image="images/profile.jpg"
                        title="Anitha Venkatesan"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="textPrimary" component="p">
                            Hello, I am Anitha Venkatesan - Full stack developer passionate about developing web apps,
                            with a focus on mobile first design/development, commitment to meet deadlines and work as a
                            team. Skilled at writing well-designed and testable code using best practices in web development.
                            I have good understanding on version control using GIT. Currently doing
                            coding bootcamp in university of Minnesota. I worked as Associate engineer
                            in Symantec and also I worked as an intern in Renault.
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="Large" color="primary">
                        GitHub
        </Button>
                    <Button size="Large" color="primary">
                        LinkedIn
        </Button>
                    <Button size="Large" color="primary">
                        Resume
        </Button>
                </CardActions>
            </Card>
        </div>
    );

}
export default About;