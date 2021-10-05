import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

import './ScrollToTop.css'

const handleScrollToTop = () => {
    window.scrollTo(0, 0)
}

const ScrollToTop = ({ history }) => {
    const [isHidden, setIsHidden] = useState(true)

    // to always push to top when screen switches
    useEffect(() => {
        const unListen = history.listen(handleScrollToTop)

        return () => {
            unListen()
        }
    }, [history])

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
            title="Scroll To Top"
        >
            <i className="fas fa-arrow-circle-up"></i>
        </button>
    )
}

export default withRouter(ScrollToTop)
