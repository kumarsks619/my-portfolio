import React, { useState, useEffect } from 'react'

import ProjectSlide from '../ProjectSlide'
import { SLIDESHOW_AUTO_INTERVAL_IN_MILLISECONDS } from '../../../utils/constants'
import './ProjectCarousel.css'

const ProjectCarousel = ({ projects = [] }) => {
    const [slides, setSlides] = useState(projects)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setSlides(projects)
    }, [projects])

    useEffect(() => {
        const lastIndex = slides.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, slides])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, SLIDESHOW_AUTO_INTERVAL_IN_MILLISECONDS)

        return () => {
            clearInterval(slider)
        }
    }, [index])

    return (
        <div className="projectCarousel">
            <div className="projectCarousel__slidesWrapper">
                {slides.map((projectData, slideIndex) => {
                    let position = 'slide'

                    if (slideIndex === index) {
                        position = 'activeSlide'
                    }
                    if (
                        slideIndex === index - 1 ||
                        (index === 0 && slideIndex === slides.length - 1)
                    ) {
                        position = 'lastSlide'
                    } else if (
                        slideIndex === index + 1 ||
                        (index === slides.length - 1 && slideIndex === 0)
                    ) {
                        position = 'nextSlide'
                    }

                    return (
                        <div
                            className={`projectCarousel__slide ${position}`}
                            key={projectData._id}
                        >
                            <ProjectSlide {...projectData} />
                        </div>
                    )
                })}

                <button
                    className="projectCarousel__leftControl"
                    onClick={() => setIndex((prevIndex) => prevIndex - 1)}
                ></button>
                <button
                    className="projectCarousel__rightControl"
                    onClick={() => setIndex((prevIndex) => prevIndex + 1)}
                ></button>
            </div>
        </div>
    )
}

export default ProjectCarousel
