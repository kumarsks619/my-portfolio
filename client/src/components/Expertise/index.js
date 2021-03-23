import React from 'react'
import Exp from './Exp'

import './Expertise.css'
import Skill from './Skill'

const Expertise = () => {
    return (
        <div className="expertise">
            <div className="expertise__expSection">
                <h1>Experience</h1>

                <div className="expertise__expWrapper">
                    <Exp />
                    <Exp />
                    <Exp />
                </div>
            </div>

            <div className="expertise__skillsSection">
                <h1>Skills</h1>

                <div className="expertise__skillsWrapper">
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                </div>
            </div>
        </div>
    )
}

export default Expertise
