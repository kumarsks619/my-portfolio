const getViewportWidth = () =>
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

export default getViewportWidth
