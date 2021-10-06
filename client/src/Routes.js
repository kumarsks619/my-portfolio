import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import LottieComp from './utils/Comp/LottieComp'
import loaderLottie from './assets/lotties/loader.json'

const HomePage = React.lazy(() => import('./components/Home'))
const ProjectsPage = React.lazy(() => import('./components/Projects'))
const ExpertisePage = React.lazy(() => import('./components/Expertise'))
const AboutPage = React.lazy(() => import('./components/About'))
const ContactPage = React.lazy(() => import('./components/Contact'))
const NotFoundPage = React.lazy(() => import('./components/NotFound'))

const Routes = () => {
    return (
        <Suspense
            fallback={<LottieComp lotteData={loaderLottie} height={200} width={200} />}
        >
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/expertise" component={ExpertisePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Suspense>
    )
}

export default Routes
