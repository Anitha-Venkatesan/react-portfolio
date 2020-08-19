import React from 'react';
import {
    AppBar,
    Tabs,
    Tab
} from '@material-ui/core';

function PortfolioTabs(props) {
    return <AppBar position="static">
        <Tabs 
            value={props.currentTab}
            onChange={(event, newValue) => {
                props.setCurrentTab(newValue);
            }}>
            <Tab label="HTML, CSS & Javascript" />
            <Tab label="Node.js & Express" />
            <Tab label="Node.js" />
        </Tabs>
    </AppBar>;
}

export default PortfolioTabs;