import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import './Loading.css'

const Loading = ({ color = 'primary' }) => {
    return (
        <div className="loading">
            <LinearProgress color={color} />
        </div>
    )
}

export default Loading
