import React from 'react'
import Moment from 'react-moment'

import './ProjectSlide.css'

const ProjectSlide = ({
    image,
    name,
    description,
    technologies,
    duration: { start, end },
    type,
    link,
}) => {
    return (
        <div className="projectSlide">
            <div className="projectSlide__imgWrapper">
                <img src={image} alt={`Shubham Kumar Singh - ${name}`} />
                <div className="projectSlide__imgOverlay">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Shubham Kumar Singh - ${name}`}
                    >
                        View Project
                    </a>
                </div>
            </div>
            <div className="projectSlide__descWrapper">
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>Technologies Used:</h3>
                <div className="projectSlide__techUsed">
                    {technologies.map((technology, index) => (
                        <span key={index}>{technology}</span>
                    ))}
                </div>
                <h3>Project Duration:</h3>
                <p className="projectSlide__date">
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

export default ProjectSlide
