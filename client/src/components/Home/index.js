import React from 'react'
import { HashLink } from 'react-router-hash-link'

import './Home.css'

const Home = () => {
    return (
        <main className="home" id="topID">
            <div className="home__contentWrapper">
                <p className="home__name">Shubham Kumar Singh</p>
                <p className="home__profession">
                    <span>w</span>
                    <span>e</span>
                    <span>b</span>
                    <span>s</span>
                    <span>i</span>
                    <span>t</span>
                    <span>e</span>
                    <br />
                    <span>d</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                </p>
                <p className="home__intro">
                    I'm a pre-final year student involved in Full Stack Web Development
                    with specialization in MERN stack. Currently doing Freelancing stuffs
                    and collaborating with small businesses and startups. Always welcoming
                    new opportunities !
                </p>
                <div className="home__btns">
                    <HashLink to="/projects#top">View Projects</HashLink>
                    <span>or</span>
                    <HashLink to="/about#top">Know Me</HashLink>
                </div>
            </div>
        </main>
    )
}

export default Home
