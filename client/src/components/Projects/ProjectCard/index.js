import React from "react"

import "./ProjectCard.css"

const ProjectCard = ({ name, image, link, github }) => {
	return (
		<div className='projectCard'>
			<div className='projectCard__img'>
				<img src={image} alt={`kumarsks619 ${name}`} />
			</div>
			<div className='projectCard__overlay'>
				<h2>{name}</h2>
			</div>

			<div className='projectCard__shutter'>
				<div className='projectCard__viewLinks'>
					<a href={link} target='_blank' rel='noreferrer noopener' title={`Live - ${name}`}>
						<p>Live</p>
					</a>
					{github && (
						<>
							<span>/</span>
							<a href={github} target='_blank' rel='noreferrer noopener' title={`Github - ${name}`}>
								<p>Github</p>
							</a>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
