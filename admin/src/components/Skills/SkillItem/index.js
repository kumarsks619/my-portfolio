import React, { useState, useEffect } from 'react'
import { Typography, IconButton } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined'
import { useDispatch, useSelector } from 'react-redux'
import StarIcon from '@material-ui/icons/Star'

import ConfirmModal from '../../../utils/Comp/ConfirmModal'
import Loading from '../../../utils/Comp/Loading'
import { skillRemove, skillEditInit } from '../../../store/actions/skill'
import './SkillItem.css'

const SkillItem = ({ _id, name, image, stars, setIsFormOpen, provided, snapshot }) => {
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.skillRemove)

    const [isOpen, setIsOpen] = useState(false)
    const [isConfirm, setIsConfirm] = useState(false)

    useEffect(() => {
        if (isConfirm) {
            dispatch(skillRemove(_id))
        }
    }, [isConfirm, dispatch, _id])

    const handleSkillEdit = () => {
        dispatch(skillEditInit(_id))
        setIsFormOpen(true)
    }

    return (
        <>
            {loading && <Loading />}

            <div
                className="skillItem"
                {...provided.draggableProps}
                ref={provided.innerRef}
                style={{
                    ...provided.draggableProps.style,
                    boxShadow: snapshot.isDragging ? '0 0 0.4rem #666' : 'none',
                }}
            >
                <div className="header">
                    <div>
                        <IconButton color="primary" onClick={handleSkillEdit}>
                            <EditOutlinedIcon />
                        </IconButton>
                        <IconButton color="secondary" onClick={() => setIsOpen(true)}>
                            <DeleteOutlineIcon />
                        </IconButton>
                        <IconButton {...provided.dragHandleProps}>
                            <PanToolOutlinedIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="main">
                    <div className="imageWrapper">
                        <img src={image} alt={name} />
                    </div>
                    <div className="content">
                        <Typography variant="h5" color="textSecondary">
                            {name}
                        </Typography>

                        <div className="starsWrapper contentEntity">
                            {new Array(stars).fill(0).map((_, index) => (
                                <StarIcon color="primary" key={index} />
                            ))}
                        </div>
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

export default SkillItem
