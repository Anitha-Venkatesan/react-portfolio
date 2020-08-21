import React from 'react';
import {
    AppBar,
    Tabs,
    Tab,
    makeStyles
} from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
});

function PortfolioTabs(props) {
    const classes = useStyles()
    return <div className={classes.root}>
        <Tabs 
            variant="fullWidth"
            value={props.currentTab}
            centered
            onChange={(event, newValue) => {
                props.setCurrentTab(newValue);
            }}>
            <Tab label="HTML CSS Javascript" />
            <Tab label="Node.js Express" />
            <Tab label="React" />
        </Tabs>
    </div>;
}

export default PortfolioTabs;