import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FooterComponent from './components/Footer';
import { makeStyles } from '@material-ui/core';
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const useStyles = makeStyles({
  root: {
    marginBottom: '30px'
  }
});

function App() {
  const classes = useStyles();

  return (
    <div>
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
    </div>   
  )
}

export default App;
