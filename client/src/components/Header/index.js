import React, { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"

import "./Header.css"
import logo from "../../assets/img/sks-logo.png"
import Menu from "./Menu"

const Header = ({ location }) => {
	const page = location.pathname.split("/")[1]

	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	const headerBackgroundAddListener = useCallback(() => {
		if (window.scrollY > 100) {
			setIsScrolled(true)
		} else {
			setIsScrolled(false)
		}
	}, [])

	useEffect(() => {
		document.addEventListener("scroll", headerBackgroundAddListener)

		return () => {
			document.removeEventListener("scroll", headerBackgroundAddListener)
		}
	}, [headerBackgroundAddListener])

	return (
		<>
			<header className={!isMenuOpen && isScrolled ? "header scrolled" : "header"} id='headerID'>
				<Link to='/' className='header__logoWrapper' onClick={() => setIsMenuOpen(false)}>
					<img src={logo} alt='Shubham Kumar Singh' />
				</Link>
				<div className='header__nameWrapper'>
					<p className='header__name'>
						{page ? (
							<>
								<span className='responsive__hide'>Shubham's</span> <span className='pageName'>{page}</span>
							</>
						) : (
							<span className='responsive__hide'>Shubham Kumar Singh</span>
						)}
					</p>
					{!page && (
						<p className='header__profession'>
							<span className='responsive__hide'>Frontend Engineer</span>
						</p>
					)}
				</div>
				<div className='header__menuBtnWrapper'>
					<button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isMenuOpen ? "close" : ""} title='Menu'>
						{isMenuOpen ? (
							<>
								<span className='responsive__hide'>Close</span>
								<div className='header__menuBtnBars close'>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</>
						) : (
							<>
								<span className='responsive__hide'>Menu</span>
								<div className='header__menuBtnBars open'>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</>
						)}
					</button>
				</div>
			</header>

			<Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</>
	)
}

export default Header
