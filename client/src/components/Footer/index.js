import React from 'react'

import './Footer.css'

const Footer = () => {
    const handleGotoTop = () => {
        document.documentElement.scrollTop = 0
    }

    return (
        <footer className="footer">
            <div className="footer__sections">
                <div className="footer__section">
                    <div className="footer__sectionHeader">
                        <span>Contact</span>
                        <span></span>
                        <span></span>
                        <span>Information</span>
                    </div>
                    <p>
                        Feel free to reach out to me any time. I prefer to talk over
                        email, especially since we may be a few time zones away.
                    </p>
                    <p className="footer__contactInfo">
                        <i className="fas fa-envelope"></i>
                        Email: <span>kumarsks619@gmail.com</span>
                    </p>
                    <p className="footer__contactInfo">
                        <i className="fas fa-phone"></i>
                        Phone: <span>+91 8127297708</span>
                    </p>
                </div>

                <div className="footer__section">
                    <div className="footer__sectionHeader">
                        <span>Current</span>
                        <span></span>
                        <span></span>
                        <span>Availability</span>
                    </div>
                    <p>
                        I usually work on several projects but I’ll be happy to discuss
                        new opportunities. Let’s get in touch!
                    </p>
                </div>

                <div className="footer__section">
                    <div className="footer__sectionHeader">
                        <span>Catch</span>
                        <span></span>
                        <span></span>
                        <span>Me Up On</span>
                    </div>
                    <div className="footer__socialLinks">
                        <a
                            href="https://www.linkedin.com/in/kumarsks619"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin"></i> Linkedin
                        </a>
                        <a
                            href="https://github.com/kumarsks619"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i> GitHub
                        </a>
                        <a
                            href="https://www.instagram.com/blck_tie"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a
                            href="https://www.facebook.com/kumarsks619"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook-square"></i> Facebook
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__creditsWrapper">
                <p>
                    Copyright &copy; 2021 | Made with <i className="fas fa-heart"></i> by
                    <a
                        href="https://www.shubhamm.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>VeNoM</span>
                        <span>Shubham</span>
                    </a>
                </p>
            </div>

            <span className="footer__topBtn" onClick={handleGotoTop}>
                <i className="fas fa-arrow-circle-up"></i>
            </span>
        </footer>
    )
}

export default Footer
