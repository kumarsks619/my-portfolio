import React from "react"
import { useHistory } from "react-router-dom"

import { SOCIAL, CLIENT_URL } from "../../utils/constants"
import "./Footer.css"

const Footer = () => {
	const history = useHistory()

	const handleOnClick = (pageName) => {
		history.push(`/${pageName}`)
		document.documentElement.scrollTop = 0
	}

	return (
		<footer className='footer' data-aos='slide-up'>
			<div className='footer__sections'>
				<div className='footer__section'>
					<div className='footer__sectionHeader'>
						<span>Contact</span>
						<span></span>
						<span></span>
						<span>Information</span>
					</div>
					<p>Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</p>
					<p className='footer__contactInfo'>
						<i className='fas fa-envelope'></i>
						Email: <span>kumarsks619@gmail.com</span>
					</p>
					<p className='footer__contactInfo'>
						<i className='fas fa-phone'></i>
						Phone: <span>+91 8127297708</span>
					</p>
				</div>

				<div className='footer__section'>
					<div className='footer__sectionHeader'>
						<span>Portfolio</span>
						<span></span>
						<span></span>
						<span>Menu Links</span>
					</div>
					<div className='footer__menuLinks'>
						<p onClick={() => handleOnClick("")}>Home</p>
						<p onClick={() => handleOnClick("projects")}>Projects</p>
						<p onClick={() => handleOnClick("expertise")}>Expertise</p>
						<p onClick={() => handleOnClick("about")}>About Me</p>
						<p onClick={() => handleOnClick("contact")}>Contact Me</p>
					</div>
				</div>

				<div className='footer__section'>
					<div className='footer__sectionHeader'>
						<span>Catch</span>
						<span></span>
						<span></span>
						<span>Me Up On</span>
					</div>
					<div className='footer__socialLinks'>
						<a href={SOCIAL.LINKEDIN} target='_blank' rel='noopener noreferrer' title={`kumarsks619 Linkedin`}>
							<i className='fab fa-linkedin'></i> Linkedin
						</a>
						<a href={SOCIAL.GITHUB} target='_blank' rel='noopener noreferrer' title={`kumarsks619 Github`}>
							<i className='fab fa-github'></i> GitHub
						</a>
						<a href={SOCIAL.INSTAGRAM} target='_blank' rel='noopener noreferrer' title={`kumarsks619 Instagram`}>
							<i className='fab fa-instagram'></i> Instagram
						</a>
						<a href={SOCIAL.FACEBOOK} target='_blank' rel='noopener noreferrer' title={`kumarsks619 Facebook`}>
							<i className='fab fa-facebook-square'></i> Facebook
						</a>
					</div>
				</div>
			</div>

			<div className='footer__creditsWrapper'>
				<p>
					Copyright &copy; 2021 | Made with <i className='fas fa-heart'></i> by
					<a href={CLIENT_URL} target='_blank' rel='noopener noreferrer' title={`kumarsks619 ${CLIENT_URL}`}>
						<span>VeNoM</span>
						<span>Shubham</span>
					</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
