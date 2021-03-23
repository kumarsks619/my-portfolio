import React from 'react'
import { HashLink } from 'react-router-hash-link'

import './Footer.css'

const Footer = () => {
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a
                        et, reprehenderit magnam facilis vero consequuntur dignissimos
                        laboriosam suscipit dolor!
                    </p>
                    <p className="footer__contactInfo">
                        <i className="fas fa-envelope"></i>
                        Email: <span>kumarsks619@gmail.com</span>
                    </p>
                    <p className="footer__contactInfo">
                        <i className="fas fa-phone"></i>
                        Phone: <span>+91 8127197708</span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                        omnis. Sint earum esse ea aliquid.
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
                        <a href="#">
                            <i class="fab fa-linkedin"></i> Linkedin
                        </a>
                        <a href="#">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="#">
                            <i className="fab fa-facebook-square"></i> Facebook
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__creditsWrapper">
                <p>
                    Copyright &copy; 2021 | Made with <i class="fas fa-heart"></i> by
                    <a href="#">
                        <span>VeNoM</span>
                        <span>Shubham</span>
                    </a>
                </p>
            </div>

            <HashLink to="#top" className="footer__topBtn">
                <i className="fas fa-arrow-circle-up"></i>
            </HashLink>
        </footer>
    )
}

export default Footer
