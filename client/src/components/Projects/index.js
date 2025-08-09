import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import ProjectCarousel from "./ProjectCarousel"
import ProjectCard from "./ProjectCard"
import { projectGetAll } from "../../store/actions"
import LottieComp from "../../utils/Comp/LottieComp"
import loaderLottie from "../../assets/lotties/loader.json"
import "./Projects.css"

const Projects = () => {
	const dispatch = useDispatch()

	const { loading, projects } = useSelector((state) => state.projects)

	useEffect(() => {
		dispatch(projectGetAll())
	}, [dispatch])

	const scrollToAllProjects = () => {
		const allProjectsElement = document.getElementById("allProjectsID")

		if (allProjectsElement) {
			window.scrollTo({
				top: allProjectsElement.offsetTop,
			})
		}
	}

	return (
		<div className='projects'>
			{loading && (
				<div style={{ height: 600, display: "grid", placeItems: "center" }}>
					<LottieComp lotteData={loaderLottie} height={200} width={200} />
				</div>
			)}

			{!loading && (
				<>
					<ProjectCarousel projects={projects} />
					<div className='projects__viewAll'>
						<button onClick={scrollToAllProjects}>View All</button>
					</div>
				</>
			)}

			<div className='projects__allProjectsHeader' id='allProjectsID'>
				<span></span>
				<h2>Have a look at my work!</h2>
				<span></span>
			</div>

			{!loading && (
				<div className='projects__allProjects' data-aos='slide-up'>
					{projects && projects.length > 0 && projects.map((project) => <ProjectCard key={project._id} {...project} />)}
				</div>
			)}
		</div>
	)
}

export default Projects
