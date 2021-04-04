import React from 'react'

import error404Lottie from '../../assets/lotties/error-404.json'
import LottieComp from '../../utils/Comp/LottieComp'

const NotFound = () => {
    return (
        <div className="notFound">
            <LottieComp lotteData={error404Lottie} height={300} width={200} />
        </div>
    )
}

export default NotFound
