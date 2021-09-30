import { useEffect, useState } from 'react'

import './ScrollToTop.css'

const handleScrollToTop = () => {
    window.scrollTo(0, 0)
}

const ScrollToTop = () => {
    const [isHidden, setIsHidden] = useState(true)

    // to show/hide the scrollToTop button based on scroll position
    useEffect(() => {
        const listenerFunc = () => {
            if (window.scrollY > 200) {
                setIsHidden(false)
            } else {
                setIsHidden(true)
            }
        }
        document.addEventListener('scroll', listenerFunc)

        return () => {
            document.removeEventListener('scroll', listenerFunc)
        }
    }, [])

    return (
        <button
            className={isHidden ? 'scrollToTop hide' : 'scrollToTop'}
            onClick={handleScrollToTop}
        >
            <i className="fas fa-arrow-circle-up"></i>
        </button>
    )
}

export default ScrollToTop
