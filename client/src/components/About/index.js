import React from "react"

import "./About.css"
import waveData from "../../assets/lotties/wave.json"
import LottieComp from "../../utils/Comp/LottieComp"
import footballVideo from "../../assets/vid/me-stage.mp4"

const About = () => {
	return (
		<div className='about'>
			<div className='about__section about__intro' data-aos='slide-up'>
				<div className='about__introGreet'>
					<h3>Hello Visitors!</h3>
					<LottieComp lotteData={waveData} height={100} width={100} />
				</div>

				<p>Myself,</p>
				<h1>Shubham Kumar Singh</h1>
				<h4>A Frontend Engineer</h4>
				<p>I'm Shubham, a Mechanical Engineer by degree but a Software Engineer by passion as well as profession. Apart from this, I love to play football.</p>
			</div>

			<span className='line'></span>

			<div className='about__section about__edu' data-aos='slide-up'>
				<h4>I studied</h4>
				<h3>Senior Secondary</h3>
				<p>from</p>
				<h1>Kendriya Vidyalaya IIT Kanpur</h1>
				<div className='about__eduDate'>
					<span>Jul 2011</span>
					<span></span>
					<span>Apr 2017</span>
				</div>

				<div className='verticalLine'></div>

				<h4>Then I'm pursuing</h4>
				<h3>Bachelor's Of Technology</h3>
				<p>from</p>
				<h1>National Institute Of Technology Jalandhar</h1>
				<div className='about__eduDate'>
					<span>Jul 2018</span>
					<span></span>
					<span>Current</span>
				</div>
			</div>

			<span className='line'></span>

			<div className='about__section about__edu'>
				<h4>Now I would like to tell you about my interests & hobbies</h4>
				<div className='about__interest'>
					<h3>Playing Football</h3>
					<p>from</p>
					<h1>FC NIT Jalandhar</h1>
					<div className='about__eduDate'>
						<span>Left Wing</span>
						<span></span>
						<span>Forward</span>
					</div>
				</div>

				<div className='verticalLine'></div>

				<div className='about__interest'>
					<h3>Playing Video Games</h3>
					<p>On</p>
					<div className='about__eduDate'>
						<span>Computer</span>
						<span></span>
						<span>Gaming Consoles</span>
					</div>
				</div>
			</div>

			<div className='about__closingTag' data-aos='slide-up'>
				<span></span>
				<h1>There’s more to my story to discover.</h1>
				<span></span>
			</div>
		</div>
	)
}

export default About
