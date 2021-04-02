import React, { useState, useEffect } from 'react'
import { Typography, IconButton, Link } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import Chip from '@material-ui/core/Chip'
import { useDispatch, useSelector } from 'react-redux'

import './ProjectItem.css'
import ConfirmModal from '../../../utils/Comp/ConfirmModal'
import { projectRemove } from '../../../store/actions/project'
import Loading from '../../../utils/Comp/Loading'

const ProjectItem = ({
    _id,
    name,
    image,
    description,
    technologies,
    duration: { start, end },
    type,
    link,
}) => {
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.projectRemove)

    const [isOpen, setIsOpen] = useState(false)
    const [isConfirm, setIsConfirm] = useState(false)

    useEffect(() => {
        if (isConfirm) {
            dispatch(projectRemove(_id))
        }
    }, [isConfirm, dispatch])

    return (
        <>
            {loading && <Loading />}

            <div className="projectItem">
                <div className="header">
                    <Typography variant="h5" color="textSecondary">
                        {name}
                    </Typography>
                    <IconButton color="secondary" onClick={() => setIsOpen(true)}>
                        <DeleteOutlineIcon />
                    </IconButton>
                </div>
                <div className="main">
                    <div className="imageWrapper">
                        <img src={image} alt={name} />
                    </div>
                    <div className="content">
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
                            Technologies Used
                        </Typography>
                        <div className="technologiesWrapper contentEntity">
                            {technologies.map((technology, index) => (
                                <Chip label={technology} variant="outlined" key={index} />
                            ))}
                        </div>

                        <Typography variant="h6" color="textSecondary">
                            Duration
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className="contentEntity"
                        >
                            {new Date(start).toDateString()} -{' '}
                            {new Date(end).toDateString()}
                        </Typography>

                        <Typography variant="h6" color="textSecondary">
                            Type
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className="contentEntity"
                        >
                            {type} Project
                        </Typography>

                        <Typography variant="h6" color="textSecondary">
                            Link
                        </Typography>
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="body1"
                        >
                            {link}
                        </Link>
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
