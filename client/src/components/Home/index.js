import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { resumeGetLink } from "../../store/actions"
import "./Home.css"

const Home = () => {
	const dispatch = useDispatch()

	const { loading, link } = useSelector((state) => state.resume)

	useEffect(() => {
		dispatch(resumeGetLink())
	}, [dispatch])

	return (
		<main className='home' id='topID'>
			<div className='home__contentWrapper' data-aos='slide-up'>
				<p className='home__name'>Shubham Kumar Singh</p>
				<p className='home__profession'>
					<span>S</span>
					<span>o</span>
					<span>f</span>
					<span>t</span>
					<span>w</span>
					<span>a</span>
					<span>r</span>
					<span>e</span>
					<br />
					<span>E</span>
					<span>n</span>
					<span>g</span>
					<span>i</span>
					<span>n</span>
					<span>e</span>
					<span>e</span>
					<span>r</span>
				</p>
				<p className='home__intro'>
					I'm a software engineer who loves to built alive websites that feels like a person sitting beside and narrating a story to you. Currently working with JavaScript based libraries like VueJS & ReactJS.
					<br />
					And, Yes! I love to write CSS.
				</p>
				<div className='home__btns'>
					<Link to='/projects'>View Projects</Link>
					<span>or</span>
					<Link to='/about'>Know Me</Link>
				</div>
				{loading ? (
					<span className='home__resume disabled'>Resume Loading...</span>
				) : (
					<a href={link} className='home__resume' target='_blank' rel='noopener noreferrer' title={`kumarsks619 Resume`}>
						View My Resume
					</a>
				)}
			</div>
		</main>
	)
}

export default Home
