import React from 'react'

import './Skill.css'
import reactImg from '../../../assets/img/react.png'

const Skill = () => {
    return (
        <div className="skill">
            <div className="skill__content">
                <p>ReactJS</p>
                <img src={reactImg} alt="React" />
            </div>

            <div className="skill__overlay">
                <div className="skill__starsWrapper">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </div>
    )
}

export default Skill
