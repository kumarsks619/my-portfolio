import React from 'react'

import './Skill.css'

const Skill = ({ name, image, stars }) => {
    return (
        <div className="skill" data-aos="fade-left">
            <div className="skill__content">
                <p>{name}</p>
                <img src={image} alt={name} />
            </div>

            <div className="skill__overlay">
                <div className="skill__starsWrapper">
                    {new Array(stars).fill(0).map((_, index) => (
                        <i key={index} className="fas fa-star"></i>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skill
