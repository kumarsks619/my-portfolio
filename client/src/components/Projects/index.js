import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'

import ProjectCarousel from './ProjectCarousel'
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

    return (
        <div className="projects">
            {loading ? (
                <LottieComp lotteData={loaderLottie} height={200} width={200} />
            ) : (
                <ProjectCarousel projects={projects} />
            )}

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
