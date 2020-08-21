import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FooterComponent from './components/Footer';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const useStyles = makeStyles({
  root: {
    marginBottom: '30px'
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a1887f'
    }
  }
});

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar /> 
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
      <FooterComponent/> 
    </MuiThemeProvider>   
  )
}

export default App;
