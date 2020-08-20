import React from 'react';
import Project from './Project';
import HtmlProjects from '../data/html-JS.json';
import NodeProjects  from '../data/node-express.json';
import ReactProjects from '../data/react.json';
import PortfolioTabs from './PortfolioTabs';

function Projects() {
    const [currentTab, setCurrentTab] = React.useState(0);

    return (
        <div>
            <PortfolioTabs  
                currentTab={currentTab} 
                setCurrentTab={setCurrentTab} />
            {currentTab === 0 && <div value={currentTab}>
                {HtmlProjects.map((project) => {
                    return <Project project={project} />;
                })}
            </div>}
            {currentTab === 1 && <div value={currentTab}>
                {NodeProjects.map((project) => {
                    return <Project project={project} />;
                })}
            </div>}
            {currentTab === 2 && <div value={currentTab}>
                {ReactProjects.map((project) => {
                    return <Project project={project} />;
                })}
            </div>}
        </div>
    );
}

export default Projects;