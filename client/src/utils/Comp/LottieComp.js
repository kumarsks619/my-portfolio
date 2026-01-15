import React from 'react';
import Lottie from 'lottie-react';

const LottieComp = ({ lotteData, height, width }) => {
    return (
        <Lottie
            animationData={lotteData}
            loop={true}
            autoplay={true}
            style={{ height, width }}
        />
    );
};

export default LottieComp;
