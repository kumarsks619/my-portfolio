import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from './components/Footer'
import Header from './components/Header'
import CallToAction from './components/CallToAction'
import Alerts from './utils/Comp/Alerts'
import ScrollToTop from './utils/Comp/ScrollToTop'
import Cursor from './utils/Comp/Cursor'
import Routes from './Routes'
import './App.css'

const App = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="app">
            <Router>
                <Cursor />
                <Alerts />
                <ScrollToTop />
                <Route component={Header} />
                <Routes />
                <Route component={CallToAction}></Route>
                <Route component={Footer} />
            </Router>
        </div>
    )
}

export default App
