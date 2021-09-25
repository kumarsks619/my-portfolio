import React, { useState, useEffect } from 'react'
import { Typography, IconButton, Link } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'react-moment'
import Tooltip from '@material-ui/core/Tooltip'
import LaunchIcon from '@material-ui/icons/Launch'

import './ExpItem.css'
import ConfirmModal from '../../../utils/Comp/ConfirmModal'
import Loading from '../../../utils/Comp/Loading'
import { expRemove, expEditInit } from '../../../store/actions/experience'

const ProjectItem = ({
    _id,
    position,
    company: { name, link },
    description,
    duration: { start, end },
    tasks,
    setIsFormOpen
}) => {
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.expRemove)

    const [isOpen, setIsOpen] = useState(false)
    const [isConfirm, setIsConfirm] = useState(false)

    useEffect(() => {
        if (isConfirm) {
            dispatch(expRemove(_id))
        }
    }, [isConfirm, dispatch, _id])

    const handleExpEdit = () => {
        dispatch(expEditInit(_id))
        setIsFormOpen(true)
    }

    return (
        <>
            {loading && <Loading />}

            <div className="expItem">
                <div className="header">
                    <Typography variant="h5" color="textSecondary">
                        {position}
                    </Typography>
                    <div>
                        <IconButton color="primary" onClick={handleExpEdit}>
                            <EditOutlinedIcon />
                        </IconButton>
                        <IconButton color="secondary" onClick={() => setIsOpen(true)}>
                            <DeleteOutlineIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="main">
                    <div className="mainContent">
                        <Typography variant="h6" color="textSecondary">
                            Company
                        </Typography>
                        <div className="withLinkWrapper">
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                className="contentEntity"
                            >
                                {name}
                            </Typography>
                            {link && (
                                <Tooltip title={link} arrow>
                                    <Link
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="body1"
                                    >
                                        <LaunchIcon />
                                    </Link>
                                </Tooltip>
                            )}
                        </div>

                        <Typography variant="h6" color="textSecondary">
                            Description
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className="contentEntity"
                        >
                            {description}
                        </Typography>

                        <Typography variant="h6" color="textSecondary">
                            Duration
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className="contentEntity"
                        >
                            <Moment format="MMM YYYY">{start}</Moment> -{' '}
                            {end ? <Moment format="MMM YYYY">{end}</Moment> : 'Current'}
                        </Typography>
                    </div>
                    <div className="subContent">
                        <Typography variant="h6" color="textSecondary">
                            Tasks/Roles
                        </Typography>
                        <ul className="contentEntity">
                            {tasks.map((task) => (
                                <li key={task._id} className="withLinkWrapper">
                                    <Typography variant="body1" color="textSecondary">
                                        {task.text}
                                    </Typography>
                                    {task.link && (
                                        <Tooltip title={task.link} arrow>
                                            <Link
                                                href={task.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="body1"
                                            >
                                                <LaunchIcon />
                                            </Link>
                                        </Tooltip>
                                    )}
                                </li>
                            ))}
                        </ul>
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

export default ProjectItem
