import React from 'react'
import { HashLink } from 'react-router-hash-link'

import Project from './Project'
import ProjectCard from './ProjectCard'

import './Projects.css'

const Projects = () => {
    const handlePrevNav = () => {
        const projectItem = document.getElementsByClassName('project')[0]
        const prevScrollPosition = document.getElementById('projectsWrapperID').scrollLeft
        if (prevScrollPosition === 0)
            document.getElementById(
                'projectsWrapperID'
            ).scrollLeft = document.getElementById('projectsWrapperID').scrollWidth
        else
            document.getElementById('projectsWrapperID').scrollLeft =
                prevScrollPosition - projectItem.offsetWidth
    }

    const handleNextNav = () => {
        const projectItem = document.getElementsByClassName('project')[0]
        const prevScrollPosition = document.getElementById('projectsWrapperID').scrollLeft
        if (
            prevScrollPosition >=
            document.getElementById('projectsWrapperID').scrollWidth - 1600
        )
            document.getElementById('projectsWrapperID').scrollLeft = 0
        else
            document.getElementById('projectsWrapperID').scrollLeft =
                prevScrollPosition + projectItem.offsetWidth
    }

    return (
        <div className="projects">
            <div className="projects__projectsSection">
                <div className="projects__projectsWrapper" id="projectsWrapperID">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
                <div className="projects__projectNavBtns">
                    <button onClick={handlePrevNav}></button>
                    <button onClick={handleNextNav}></button>
                </div>
            </div>

            <div className="projects__viewAll">
                <HashLink smooth to="/projects#allProjectsID">
                    View All
                </HashLink>
            </div>

            <div className="projects__allProjectsHeader" id="allProjectsID">
                <span></span>
                <h2>Have a look at my work!</h2>
                <span></span>
            </div>
            <div className="projects__allProjects">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects
