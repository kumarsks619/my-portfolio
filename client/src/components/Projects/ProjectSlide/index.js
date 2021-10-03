import React from 'react'

import './ProjectSlide.css'

const ProjectSlide = ({ image, name, description, technologies, github, type, link }) => {
    return (
        <div className="projectSlide">
            <div className="projectSlide__imgWrapper">
                <img src={image} alt={`kumarsks619 ${name}`} />
                <div className="projectSlide__imgOverlay">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`kumarsks619 ${name}`}
                    >
                        View Live
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
                <h3>Project Type:</h3>
                <p>{type}</p>
                <h3>View Project:</h3>
                <div className="projectSlide__viewLinks">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        See Live
                    </a>
                    {github && (
                        <>
                            <span>or</span>
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                Code on Github
                            </a>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectSlide
