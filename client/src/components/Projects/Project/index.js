import React from 'react'
import Moment from 'react-moment'

import './Project.css'

const Project = ({
    image,
    name,
    description,
    technologies,
    duration: { start, end },
    type,
    link,
}) => {
    return (
        <div className="project" id="projectItemID">
            <div className="project__imgWrapper">
                <img src={image} alt={name} />
                <div className="project__imgOverlay">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            </div>
            <div className="project__descWrapper">
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>Technologies Used:</h3>
                <div className="project__techUsed">
                    {technologies.map((technology, index) => (
                        <span key={index}>{technology}</span>
                    ))}
                </div>
                <h3>Project Duration:</h3>
                <p className="project__date">
                    <span>{<Moment format="MMM YYYY">{start}</Moment>}</span>
                    <span></span>
                    <span>
                        {' '}
                        {end ? <Moment format="MMM YYYY">{end}</Moment> : 'Current'}
                    </span>
                </p>
                <h3>Project Type:</h3>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default Project
