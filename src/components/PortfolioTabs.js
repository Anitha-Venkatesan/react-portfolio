import React from 'react';
import {
    AppBar,
    Tabs,
    Tab,
    makeStyles
} from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        maxWidth: 850,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        marginTop: "30px",
        fontSize: '18px',
        backgroundColor : "#a1887f"
    },
    
})

function PortfolioTabs(props) {
    const classes = useStyles()
    return <AppBar className={classes.root} position="static">
        <Tabs 
            value={props.currentTab}
            onChange={(event, newValue) => {
                props.setCurrentTab(newValue);
            }}>
            <Tab  className={classes.root} label="HTML CSS Javascript" />
            <Tab  className={classes.root} label="Node.js Express" />
            <Tab className={classes.root} label="React" />
        </Tabs>
    </AppBar>;
}

export default PortfolioTabs;