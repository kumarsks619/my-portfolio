import React, { useState, useEffect, useCallback } from 'react'
import {
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import ModalComp from '../../../utils/Comp/ModalComp'
import { useForm } from '../../../utils/Hooks/useForm'
import Loading from '../../../utils/Comp/Loading'
import { skillAdd, skillEdit, skillEditCleanup } from '../../../store/actions/skill'
import { alertAdd } from '../../../store/actions/alert'
import { handleImageCompress } from '../../../utils/imageCompressor'
import './SkillForm.css'

const initialInputVals = {
    name: '',
    stars: '',
}

const SkillForm = ({ isFormOpen, setIsFormOpen }) => {
    const dispatch = useDispatch()
    const { loading, success } = useSelector((state) => state.skillAdd)
    const {
        loading: loadingSkillEdit,
        skill,
        success: successSkillEdit,
    } = useSelector((state) => state.skillEdit)

    const isEdit = skill._id ? true : false

    const { inputVals, setInputVals, handleOnChange, handleReset } =
        useForm(initialInputVals)
    const [image, setImage] = useState('')

    const handleImageSelect = (e) => {
        if (e.target.files[0]) {
            // validating the file extension
            const allowedExt = ['jpeg', 'jpg', 'png']
            const fileExt = e.target.files[0].name.split('.').pop().toLowerCase()
            if (!allowedExt.includes(fileExt)) {
                dispatch(
                    alertAdd(
                        'Invalid Image Chosen! Only JPEG, JPG & PNG allowed.',
                        'error'
                    )
                )
                return
            }

            handleImageCompress(e.target.files[0], setImage)
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (isEdit) {
            dispatch(
                skillEdit({
                    ...inputVals,
                    image: image ? image : null,
                    _id: skill._id,
                })
            )
        } else {
            dispatch(
                skillAdd({
                    ...inputVals,
                    image,
                })
            )
        }
    }

    const handleModalClose = useCallback(() => {
        setIsFormOpen(false)
        handleReset()
        setImage('')
        dispatch(skillEditCleanup())
    }, [handleReset, setIsFormOpen, dispatch])

    useEffect(() => {
        if (success || successSkillEdit) {
            handleModalClose()
        }
    }, [success, successSkillEdit, handleModalClose])

    useEffect(() => {
        if (Object.keys(skill).length > 0) {
            setInputVals({
                name: skill.name,
                stars: skill.stars,
            })
        }
    }, [skill, setInputVals])

    return (
        <ModalComp isModalOpen={isFormOpen} setIsModalOpen={setIsFormOpen}>
            {(loading || loadingSkillEdit) && <Loading />}

            <form className="skillForm" onSubmit={handleOnSubmit}>
                <Typography variant="h5" color="textSecondary" className="formHeading">
                    {isEdit ? 'Update' : 'Add'} Skill
                </Typography>

                <TextField
                    required
                    type="text"
                    variant="outlined"
                    label="Skill"
                    name="name"
                    className="formInput"
                    value={inputVals.name}
                    onChange={handleOnChange}
                />

                <div className="formGroup">
                    <FormControl variant="outlined" className="formInput">
                        <InputLabel id="stars">Level</InputLabel>
                        <Select
                            required
                            labelId="stars"
                            label="Level"
                            name="stars"
                            value={inputVals.stars}
                            onChange={handleOnChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                    <label className="formInput imageInput">
                        <input type="file" onChange={handleImageSelect} />
                        {image ? 'Image Selected' : 'Choose an Image'}
                    </label>
                </div>

                <div className="btnsWrapper">
                    <Button
                        variant="outlined"
                        color="primary"
                        className="formBtn"
                        onClick={handleModalClose}
                    >
                        Close
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="formBtn"
                    >
                        {isEdit ? 'Update' : 'Add'} Skill
                    </Button>
                </div>
            </form>
        </ModalComp>
    )
}

export default SkillForm
