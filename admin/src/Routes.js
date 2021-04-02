import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/experience" component={Experience} />
                <Route exact path="/skills" component={Skills} />
            </Switch>
        </>
    )
}

export default Routes
