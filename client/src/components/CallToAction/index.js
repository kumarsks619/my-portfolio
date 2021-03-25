import React from 'react'
import { HashLink } from 'react-router-hash-link'

import './CallToAction.css'

const CallToAction = () => {
    return (
        <div className="callToAction">
            <span></span>
            <p>Need A Web Developer ?</p>
            <HashLink to="/contact/#formID">
                <h1>
                    <i className="fas fa-long-arrow-alt-right"></i>
                    Let's work together
                    <i className="fas fa-long-arrow-alt-left"></i>
                </h1>
            </HashLink>
        </div>
    )
}

export default CallToAction
