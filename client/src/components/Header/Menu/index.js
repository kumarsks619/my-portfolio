import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
    const handleMenuClose = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className={isMenuOpen ? 'menu menu__open' : 'menu'}>
            <div className="menuWrapper">
                <h1>Menu</h1>
                <Link to="/" onClick={handleMenuClose}>
                    Home
                </Link>
                <Link to="/projects" onClick={handleMenuClose}>
                    Projects
                </Link>
                <Link to="/expertise" onClick={handleMenuClose}>
                    Expertise
                </Link>
                <Link to="/about" onClick={handleMenuClose}>
                    About Me
                </Link>
                <Link to="/contact" onClick={handleMenuClose}>
                    Contact Me
                </Link>
            </div>
        </div>
    )
}

export default Menu
