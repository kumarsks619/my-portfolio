import React from 'react'

import './Project.css'
import project1 from '../../../assets/img/1.png'

const Project = () => {
    return (
        <div className="project" id="projectItemID">
            <div className="project__imgWrapper">
                <img src={project1} alt="WanderLust" />
                <div className="project__imgOverlay">
                    <button>View Project</button>
                </div>
            </div>
            <div className="project__descWrapper">
                <h2>WanderLust</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui
                    temporibus eveniet beatae adipisci sint eaque perspiciatis veniam
                    aperiam. Sequi?
                </p>
                <h3>Technologies Used:</h3>
                <div className="project__techUsed">
                    <span>ReactJS</span>
                    <span>NodeJS</span>
                    <span>MongoDB</span>
                    <span>Material-UI</span>
                    <span>Heroku & Netlify</span>
                </div>
                <h3>Project Duration:</h3>
                <p>15 Feb 2020 - Current</p>
                <h3>Project Type:</h3>
                <p>Freelance</p>
            </div>
        </div>
    )
}

export default Project
