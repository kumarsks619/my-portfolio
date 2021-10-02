import React from 'react'
import Moment from 'react-moment'

import './ProjectCard.css'

const ProjectCard = ({ name, image, link, duration: { start, end } }) => {
    return (
        <div className="projectCard" data-aos="slide-up">
            <div className="projectCard__img">
                <img src={image} alt={`Shubham Kumar Singh - ${name}`} />
            </div>
            <div className="projectCard__overlay">
                <h2>{name}</h2>
                <div className="projectCard__date">
                    <span>{<Moment format="MMM YYYY">{start}</Moment>}</span>
                    <span></span>
                    <span>
                        {end ? <Moment format="MMM YYYY">{end}</Moment> : 'Current'}
                    </span>
                </div>
            </div>

            <div className="projectCard__shutter">
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    title={`Shubham Kumar Singh - ${name}`}
                >
                    <p>View Project</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
