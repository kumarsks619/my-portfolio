import React from 'react'

import './Menu.css'

const Menu = ({ isMenuOpen, setIsMenuOpen, history }) => {
    const handleOnClick = (pageName) => {
        history.push(`/${pageName}`)
        setIsMenuOpen(false)
    }

    return (
        <div className={isMenuOpen ? 'menu menu__open' : 'menu'}>
            <div className="menuWrapper">
                <h1>Menu</h1>
                <p onClick={() => handleOnClick('')}>Home</p>
                <p onClick={() => handleOnClick('projects')}>Projects</p>
                <p onClick={() => handleOnClick('expertise')}>Expertise</p>
                <p onClick={() => handleOnClick('about')}>About Me</p>
                <p onClick={() => handleOnClick('contact')}>Contact Me</p>
            </div>
        </div>
    )
}

export default Menu
