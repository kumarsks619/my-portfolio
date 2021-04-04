import React from 'react'
import { Typography, Divider, Button } from '@material-ui/core'

import './Heading.css'

const Heading = ({ title, btnText, onClickHandler, severeBtn }) => {
    return (
        <div className="heading">
            <div className="heading__wrapper">
                <Typography variant="h4" color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                {severeBtn ? (
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={onClickHandler}
                    >
                        {btnText}
                    </Button>
                ) : (
                    <Button variant="contained" color="primary" onClick={onClickHandler}>
                        Add {btnText}
                    </Button>
                )}
            </div>
            <Divider variant="middle" className="heading__divider" />
        </div>
    )
}

export default Heading
