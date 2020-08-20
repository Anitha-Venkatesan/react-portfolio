import React from 'react';
import {
    AppBar,
    Tabs,
    Tab,
    makeStyles
} from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        maxWidth: 750,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "50px",
        backgroundColor : "#a1887f"
    }
})

function PortfolioTabs(props) {
    const classes = useStyles()
    return <AppBar className={classes.root} position="static">
        <Tabs 
            value={props.currentTab}
            onChange={(event, newValue) => {
                props.setCurrentTab(newValue);
            }}>
            <Tab variant="h5" label="HTML CSS Javascript" />
            <Tab variant="h5" label="Node.js Express" />
            <Tab variant="h5" label="React" />
        </Tabs>
    </AppBar>;
}

export default PortfolioTabs;