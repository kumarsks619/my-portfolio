import React, { useState, useEffect, useCallback } from 'react'

import './Cursor.css'

const isMobile = () => {
    const ua = navigator.userAgent
    return /Android|Mobi/i.test(ua)
}

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [hidden, setHidden] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)

    const addEventListeners = useCallback(() => {
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseenter', onMouseEnter)
        document.addEventListener('mouseleave', onMouseLeave)
        document.addEventListener('mousedown', onMouseDown)
        document.addEventListener('mouseup', onMouseUp)
    }, [])

    const removeEventListeners = useCallback(() => {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseenter', onMouseEnter)
        document.removeEventListener('mouseleave', onMouseLeave)
        document.removeEventListener('mousedown', onMouseDown)
        document.removeEventListener('mouseup', onMouseUp)
    }, [])

    const handleLinkHoverEvents = () => {
        document.querySelectorAll('a').forEach((el) => {
            el.addEventListener('mouseover', () => setLinkHovered(true))
            el.addEventListener('mouseout', () => setLinkHovered(false))
        })
    }

    useEffect(() => {
        addEventListeners()
        handleLinkHoverEvents()
        return () => removeEventListeners()
    }, [addEventListeners, removeEventListeners])

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseLeave = () => {
        setHidden(true)
    }

    const onMouseEnter = () => {
        setHidden(false)
    }

    const onMouseDown = () => {
        setClicked(true)
    }

    const onMouseUp = () => {
        setClicked(false)
    }

    if (typeof navigator !== 'undefined' && isMobile()) return null

    return (
        <div
            className={`cursor ${hidden && 'cursor--hidden'} ${
                clicked && 'cursor--clicked'
            } ${linkHovered && 'cursor--link-hovered'}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        ></div>
    )
}

export default Cursor
