import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

ReactDOM.render(
    <BrowserRouter>
        
        <App />
        <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
        </Switch>

    </BrowserRouter>, document.getElementById('root')
);


