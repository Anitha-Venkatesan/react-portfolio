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
import { GitHub, LinkedIn, PictureAsPdf } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        maxWidth: 750,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "50px",
    },
    Media: {
        objectFit: 'cover',
        width: "30%",
        height: "30%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
    },
    LinkSpacing: {
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
    }
});

function About() {
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <div>
                    <CardMedia className={classes.Media}
                        component="img"
                        alt="Profile-Picture"
                        image="images/profile.jpg"
                        title="Anitha Venkatesan"
                    />
                </div>

                <CardContent>
                    <Typography>
                        Hello, I am Anitha Venkatesan - Full stack developer passionate about developing web apps,
                        with a focus on mobile first design/development, commitment to meet deadlines and work as a
                        team. Skilled at writing well-designed and testable code using best practices in web development.
                        I have good understanding on version control using GIT. Currently doing
                        coding bootcamp in university of Minnesota. I worked as Associate engineer
                        in Symantec and also I worked as an intern in Renault.
                    </Typography>
                </CardContent>
                <CardActionArea>
                    <CardActions>
                        <Button 
                            size="Large" 
                            className={classes.LinkSpacing} 
                            target="_blank" href="https://github.com/Anitha-Venkatesan" 
                            startIcon={<GitHub />}>
                             GitHub
                        </Button>
                        <Button size="Large" 
                            className={classes.LinkSpacing} target="_blank" 
                            href="https://www.linkedin.com/in/anitha-venkatesan-6aba58142/"
                            startIcon={<LinkedIn />}>
                            LinkedIn
                        </Button>
                        <Button size="Large" 
                            className={classes.LinkSpacing} target="_blank" 
                            href="https://anitha-venkatesan.github.io/anitha-portfolio/assets/docs/resume.pdf"
                            startIcon={<PictureAsPdf />}>
                            Resume
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </div>
    );

}
export default About;