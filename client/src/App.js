import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import CallToAction from './components/CallToAction'
import About from './components/About'
import Contact from './components/Contact'
import Expertise from './components/Expertise'
import NotFound from './components/NotFound'
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
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
                <Route component={CallToAction} />
                <Route component={Footer} />
            </Router>
        </div>
    )
}

export default App
