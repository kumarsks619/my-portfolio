import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from './components/Footer'
import Header from './components/Header'
import CallToAction from './components/CallToAction'
import About from './components/About'
import Contact from './components/Contact'
import Expertise from './components/Expertise'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Projects from './components/Projects'
import Alerts from './utils/Comp/Alerts'
import ScrollToTop from './utils/Comp/ScrollToTop'
import './App.css'
import './responsive.css'

const App = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="app">
            <Router>
                <Alerts />
                <ScrollToTop />
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
