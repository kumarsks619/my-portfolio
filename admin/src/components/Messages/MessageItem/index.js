import React, { useState, useEffect } from 'react'
import { Typography, IconButton, Link } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'react-moment'

import './MessageItem.css'
import ConfirmModal from '../../../utils/Comp/ConfirmModal'
import Loading from '../../../utils/Comp/Loading'
import { messageRemove } from '../../../store/actions/message'

const MessageItem = ({ _id, name, email, service, budget, message, createdAt }) => {
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.messageRemove)

    const [isOpen, setIsOpen] = useState(false)
    const [isConfirm, setIsConfirm] = useState(false)

    useEffect(() => {
        if (isConfirm) {
            dispatch(messageRemove(_id))
        }
    }, [isConfirm, dispatch, _id])

    return (
        <>
            {loading && <Loading />}

            <div className="messageItem">
                <div className="header">
                    <Typography variant="h5" color="textSecondary">
                        <span style={{ fontSize: '1.2rem' }}>Message From:</span> {name}
                    </Typography>
                    <IconButton color="secondary" onClick={() => setIsOpen(true)}>
                        <DeleteOutlineIcon />
                    </IconButton>
                </div>
                <div className="main">
                    <div className="mainContent">
                        <Typography variant="body1" color="textSecondary">
                            Email
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            className="contentEntity"
                        >
                            {email}
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            Service
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            className="contentEntity"
                        >
                            {service}
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            Budget
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            className="contentEntity"
                        >
                            {budget === '0' ? 'Nil' : budget}
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            Sent At
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            className="contentEntity"
                        >
                            <Moment format="HH:MM - DD MMM YYYY">{createdAt}</Moment>
                        </Typography>
                    </div>
                    <div className="subContent">
                        <Typography variant="body1" color="textSecondary">
                            Message
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            className="contentEntity"
                        >
                            {message}
                        </Typography>
                    </div>
                </div>
            </div>

            <ConfirmModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setIsConfirm={setIsConfirm}
            />
        </>
    )
}

export default MessageItem
