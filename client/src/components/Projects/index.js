import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'

import Project from './Project'
import ProjectCard from './ProjectCard'
import { projectGetAll } from '../../store/actions'
import LottieComp from '../../utils/Comp/LottieComp'
import loaderLottie from '../../assets/lotties/loader.json'

import './Projects.css'

const Projects = () => {
    const dispatch = useDispatch()
    const { loading, projects } = useSelector((state) => state.projects)

    useEffect(() => {
        dispatch(projectGetAll())
    }, [dispatch])

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
            document.getElementById('projectsWrapperID').scrollWidth -
                projectItem.offsetWidth
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
                    {loading ? (
                        <LottieComp lotteData={loaderLottie} height={200} width={200} />
                    ) : (
                        projects &&
                        projects.length > 0 &&
                        projects.map((project) => (
                            <Project key={project._id} {...project} />
                        ))
                    )}
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
                {loading ? (
                    <LottieComp lotteData={loaderLottie} height={200} width={200} />
                ) : (
                    projects &&
                    projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard key={project._id} {...project} />
                    ))
                )}
            </div>
        </div>
    )
}

export default Projects
