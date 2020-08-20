import React from 'react';
import Project from './Project';
import HtmlProjects from '../data/html-JS.json';
import NodeProjects  from '../data/node-express.json';
import ReactProjects from '../data/react.json';
import PortfolioTabs from './PortfolioTabs';
import { Grid } from '@material-ui/core';

function Projects() {
    const [currentTab, setCurrentTab] = React.useState(0);

    return (
        <div>
            <PortfolioTabs  
                currentTab={currentTab} 
                setCurrentTab={setCurrentTab} />
            <Grid container>
                {currentTab === 0 && HtmlProjects.map((project) => {
                    return <Grid item xs={6}>
                        <Project project={project} />
                    </Grid>
                })}
                {currentTab === 1 && NodeProjects.map((project) => {
                    return <Grid item xs={6}>
                        <Project project={project} />
                    </Grid>
                })}
                {currentTab === 2 && ReactProjects.map((project) => {
                    return <Grid item xs={6}>
                        <Project project={project} />
                    </Grid>
                })}
            </Grid>

        </div>
    );
}

export default Projects;