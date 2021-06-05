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
import FileBase from 'react-file-base64'

import ModalComp from '../../../utils/Comp/ModalComp'
import { useForm } from '../../../utils/Hooks/useForm'
import Loading from '../../../utils/Comp/Loading'
import { skillAdd } from '../../../store/actions/skill'
import './SkillForm.css'

const initialInputVals = {
    name: '',
    stars: '',
}

const SkillForm = ({ isFormOpen, setIsFormOpen }) => {
    const dispatch = useDispatch()
    const { loading, success } = useSelector((state) => state.skillAdd)

    const { inputVals, handleOnChange, handleReset } = useForm(initialInputVals)
    const [image, setImage] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()

        dispatch(
            skillAdd({
                ...inputVals,
                image,
            })
        )
    }

    const handleModalClose = useCallback(() => {
        setIsFormOpen(false)
        handleReset()
        setImage('')
    }, [handleReset, setIsFormOpen])

    useEffect(() => {
        if (success) {
            handleModalClose()
        }
    }, [success, handleModalClose])

    return (
        <ModalComp isModalOpen={isFormOpen} setIsModalOpen={setIsFormOpen}>
            {loading && <Loading />}

            <form className="skillForm" onSubmit={handleOnSubmit}>
                <Typography variant="h5" color="textSecondary" className="formHeading">
                    Add Skill
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
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setImage(base64)}
                        />
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
                        Add Skill
                    </Button>
                </div>
            </form>
        </ModalComp>
    )
}

export default SkillForm
