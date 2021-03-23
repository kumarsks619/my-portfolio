import React from 'react'

import './ProjectCard.css'
import projectImg from '../../../assets/img/1.png'

const ProjectCard = () => {
    return (
        <div className="projectCard">
            <div className="projectCard__img">
                <img src={projectImg} alt="WanderLust" />
            </div>
            <div className="projectCard__overlay">
                <h2>WanderLust</h2>
                <div className="projectCard__date">
                    <span>15 Jan 2021</span>
                    <span></span>
                    <span>Current</span>
                </div>
            </div>
            <a
                href="https://google.com"
                className="projectCard__backfaceOverlay"
                target="_blank"
                rel="noreferrer noopener"
            >
                <p>View Project</p>
            </a>
        </div>
    )
}

export default ProjectCard
