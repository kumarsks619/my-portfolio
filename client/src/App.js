import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import CallToAction from './components/CallToAction'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

const App = () => {
    return (
        <div className="app">
            <Router>
                <Route component={Header} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/expertise" component={Expertise} />
                </Switch>
                <Route component={CallToAction} />
                <Route component={Footer} />
            </Router>
        </div>
    )
}

export default App
