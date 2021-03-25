import React, { useState } from 'react'

import './Header.css'
import logo from '../../assets/img/sks-logo.png'
import Menu from './Menu'

const Header = ({ history, location }) => {
    const page = location.pathname.split('/')[1]

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleGotoHome = () => {
        history.push('/')
        document.documentElement.scrollTop = 0
        setIsMenuOpen(false)
    }

    return (
        <>
            <header className="header">
                <div className="header__logoWrapper" onClick={handleGotoHome}>
                    <img src={logo} alt="Shubham Kumar Singh" />
                </div>
                <div className="header__nameWrapper">
                    <p className="header__name">
                        {page ? (
                            <>
                                <span className="responsive__hide">Shubham's</span>{' '}
                                <span className="pageName">{page}</span>
                            </>
                        ) : (
                            <span className="responsive__hide">Shubham Kumar Singh</span>
                        )}
                    </p>
                    {!page && (
                        <p className="header__profession">
                            <span className="responsive__hide">Web Developer</span>
                        </p>
                    )}
                </div>
                <div className="header__menuBtnWrapper">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={isMenuOpen ? 'close' : ''}
                    >
                        {isMenuOpen ? (
                            <>
                                <span className="responsive__hide">Close</span>
                                <div className="header__menuBtnBars close">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </>
                        ) : (
                            <>
                                <span className="responsive__hide">Menu</span>
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
