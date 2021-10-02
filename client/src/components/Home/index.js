import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'

import { resumeGetLink } from '../../store/actions'
import './Home.css'

const Home = () => {
    const dispatch = useDispatch()

    const { loading, link } = useSelector((state) => state.resume)

    useEffect(() => {
        dispatch(resumeGetLink())
    }, [dispatch])

    return (
        <main className="home" id="topID">
            <div className="home__contentWrapper" data-aos="slide-right">
                <p className="home__name">Shubham Kumar Singh</p>
                <p className="home__profession">
                    <span>w</span>
                    <span>e</span>
                    <span>b</span>
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
                    I'm a final year student who loves to built alive websites that feels
                    like a person sitting beside and narrating a story to you. Currently
                    doing Full Stack Web Development with specialization in MERN stack.
                    Always welcoming new opportunities !
                </p>
                <div className="home__btns">
                    <HashLink to="/projects#top">View Projects</HashLink>
                    <span>or</span>
                    <HashLink to="/about#top">Know Me</HashLink>
                </div>
                {loading ? (
                    <span className="home__resume disabled">Resume Loading...</span>
                ) : (
                    <a
                        href={link}
                        className="home__resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Shubham Kumar Singh - Resume`}
                    >
                        View My Resume
                    </a>
                )}
            </div>
        </main>
    )
}

export default Home
