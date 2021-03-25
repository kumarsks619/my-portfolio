import React from 'react'
import Lottie from 'react-lottie'

const LottieComp = ({ lotteData, height, width }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lotteData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return <Lottie options={defaultOptions} height={height} width={width} />
}

export default LottieComp
