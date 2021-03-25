import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import './Header.css'
import logo from '../../assets/img/sks-logo.png'
import Menu from './Menu'

const Header = ({ history, location }) => {
    const page = location.pathname.split('/')[1]

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className="header">
                <div className="header__logoWrapper">
                    <HashLink to="/#top">
                        <img src={logo} alt="Shubham Kumar Singh" />
                    </HashLink>
                </div>
                <div className="header__nameWrapper">
                    <p className="header__name">
                        {page ? (
                            <>
                                Shubham's <span>{page}</span>
                            </>
                        ) : (
                            'Shubham Kumar Singh'
                        )}
                    </p>
                    {!page && <p className="header__profession">Web Developer</p>}
                </div>
                <div className="header__menuBtnWrapper">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={isMenuOpen ? 'close' : ''}
                    >
                        {isMenuOpen ? (
                            <>
                                Close
                                <div className="header__menuBtnBars close">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </>
                        ) : (
                            <>
                                Menu
                                <div className="header__menuBtnBars open">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </>
                        )}
                    </button>
                </div>
            </header>

            <Menu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                history={history}
            />
        </>
    )
}

export default Header
