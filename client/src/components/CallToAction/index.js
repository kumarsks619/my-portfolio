import React from 'react'
import { Link } from 'react-router-dom'

import './CallToAction.css'

const CallToAction = () => {
    return (
        <div className="callToAction">
            <span></span>
            <p>Need A Web Developer ?</p>
            <Link to="/contact">
                <h1>
                    <i className="fas fa-long-arrow-alt-right"></i>
                    Let's work together
                    <i className="fas fa-long-arrow-alt-left"></i>
                </h1>
            </Link>
        </div>
    )
}

export default CallToAction
