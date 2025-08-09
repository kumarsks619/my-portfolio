import React, { useState, useEffect, useCallback, useRef } from "react"

import ProjectSlide from "../ProjectSlide"
import { SLIDESHOW_AUTO_INTERVAL_IN_MILLISECONDS } from "../../../utils/constants"
import "./ProjectCarousel.css"

const ProjectCarousel = ({ projects = [] }) => {
	const [slides, setSlides] = useState(projects)
	const [index, setIndex] = useState(0)
	const touchStartXRef = useRef(null)

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

	const handleAutoSlideshow = useCallback(() => {
		const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
		if (prefersReducedMotion) return null
		return setInterval(() => {
			setIndex((prevIndex) => prevIndex + 1)
		}, SLIDESHOW_AUTO_INTERVAL_IN_MILLISECONDS)
	}, [])

	useEffect(() => {
		let slider = handleAutoSlideshow()

		const imgWrapperElements = [...document.querySelectorAll(".projectSlide__imgWrapper")]

		const pauseCarouselListener = () => {
			if (slider) clearInterval(slider)
		}

		const startCarouselListener = () => {
			slider = handleAutoSlideshow()
		}

		imgWrapperElements.forEach((element) => {
			element.addEventListener("mouseenter", pauseCarouselListener)
			element.addEventListener("mouseleave", startCarouselListener)
		})

		return () => {
			if (slider) clearInterval(slider)
			imgWrapperElements.forEach((element) => {
				element.removeEventListener("mouseenter", pauseCarouselListener)
				element.removeEventListener("mouseleave", startCarouselListener)
			})
		}
	}, [handleAutoSlideshow])

	const handleTouchStart = (event) => {
		const firstTouch = event.touches && event.touches[0]
		touchStartXRef.current = firstTouch ? firstTouch.clientX : null
	}

	const handleTouchEnd = (event) => {
		const startX = touchStartXRef.current
		if (startX === null) return
		const endTouch = (event.changedTouches && event.changedTouches[0]) || null
		const endX = endTouch ? endTouch.clientX : null
		if (endX === null) return
		const deltaX = endX - startX
		const swipeThreshold = 60
		if (Math.abs(deltaX) > swipeThreshold) {
			if (deltaX > 0) {
				setIndex((prevIndex) => prevIndex - 1)
			} else {
				setIndex((prevIndex) => prevIndex + 1)
			}
		}
		touchStartXRef.current = null
	}

	return (
		<div className='projectCarousel' data-aos='slide-up'>
			<div className='projectCarousel__slidesWrapper' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
				{slides.map((projectData, slideIndex) => {
					let position = "slide"

					if (slideIndex === index) {
						position = "activeSlide"
					}
					if (slideIndex === index - 1 || (index === 0 && slideIndex === slides.length - 1)) {
						position = "lastSlide"
					} else if (slideIndex === index + 1 || (index === slides.length - 1 && slideIndex === 0)) {
						position = "nextSlide"
					}

					return (
						<div className={`projectCarousel__slide ${position}`} key={projectData._id}>
							<ProjectSlide {...projectData} />
						</div>
					)
				})}

				<button type='button' className='projectCarousel__leftControl' aria-label='Previous project' title='Previous' onClick={() => setIndex((prevIndex) => prevIndex - 1)}></button>
				<button type='button' className='projectCarousel__rightControl' aria-label='Next project' title='Next' onClick={() => setIndex((prevIndex) => prevIndex + 1)}></button>
			</div>
		</div>
	)
}

export default ProjectCarousel
