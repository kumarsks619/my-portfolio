import React from 'react'

import error404Lottie from '../../assets/lotties/error-404.json'
import LottieComp from '../../utils/Comp/LotteComp'

const NotFound = () => {
    return (
        <div className="notFound">
            <LottieComp lotteData={error404Lottie} height={500} width={500} />
        </div>
    )
}

export default NotFound
