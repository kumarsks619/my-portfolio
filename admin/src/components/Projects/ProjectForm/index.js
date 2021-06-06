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
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useDispatch, useSelector } from 'react-redux'

import ModalComp from '../../../utils/Comp/ModalComp'
import { useForm } from '../../../utils/Hooks/useForm'
import { useDynamicInputs } from '../../../utils/Hooks/useDynamicInputs'
import { projectAdd } from '../../../store/actions/project'
import { alertAdd } from '../../../store/actions/alert'
import Loading from '../../../utils/Comp/Loading'
import { handleImageCompress } from '../../../utils/imageCompressor'
import './ProjectForm.css'

const initialInputVals = {
    name: '',
    description: '',
    type: '',
    link: '',
}

const ProjectForm = ({ isFormOpen, setIsFormOpen }) => {
    const dispatch = useDispatch()
    const { loading, success } = useSelector((state) => state.projectAdd)

    const { inputVals, handleOnChange, handleReset } = useForm(initialInputVals)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [image, setImage] = useState('')
    const {
        values: technologies,
        setValues: setTechnologies,
        createInputs: createTechnologiesInputAdd,
        handleInputAdd: handleTechnologyInputAdd,
    } = useDynamicInputs('Technology')

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

        dispatch(
            projectAdd({
                ...inputVals,
                start: startDate,
                end: endDate,
                image,
                technologies,
            })
        )
    }

    const handleModalClose = useCallback(() => {
        setIsFormOpen(false)
        handleReset()
        setStartDate(null)
        setEndDate(null)
        setImage('')
        setTechnologies([])
    }, [handleReset, setIsFormOpen, setTechnologies])

    useEffect(() => {
        if (success) {
            handleModalClose()
        }
    }, [success, handleModalClose])

    return (
        <ModalComp isModalOpen={isFormOpen} setIsModalOpen={setIsFormOpen}>
            {loading && <Loading />}

            <form className="projectForm" onSubmit={handleOnSubmit}>
                <Typography variant="h5" color="textSecondary" className="formHeading">
                    Add Project
                </Typography>

                <TextField
                    required
                    type="text"
                    variant="outlined"
                    label="Project Name"
                    name="name"
                    className="formInput"
                    value={inputVals.name}
                    onChange={handleOnChange}
                />

                <TextField
                    required
                    type="text"
                    variant="outlined"
                    label="Description"
                    name="description"
                    className="formInput"
                    value={inputVals.description}
                    onChange={handleOnChange}
                    rows={5}
                />

                <div className="dynamicInputGroup">
                    <div className="formGroup">
                        <InputLabel style={{ fontSize: '1.1rem' }}>
                            Technologies Used:
                        </InputLabel>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            startIcon={<AddCircleIcon />}
                            onClick={handleTechnologyInputAdd}
                            className="adminHome__dataFormBtn"
                        >
                            Add
                        </Button>
                    </div>
                    <div className="dynamicInputsWrapper">
                        {createTechnologiesInputAdd()}
                    </div>
                </div>

                <div className="formGroup">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            required
                            autoOk
                            disableFuture
                            views={['year', 'month']}
                            variant="inline"
                            inputVariant="outlined"
                            label="Start Date"
                            value={startDate}
                            onChange={setStartDate}
                            className="formInput"
                        />
                    </MuiPickersUtilsProvider>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            autoOk
                            disableFuture
                            views={['year', 'month']}
                            variant="inline"
                            inputVariant="outlined"
                            label="End Date"
                            value={endDate}
                            onChange={setEndDate}
                            helperText='Leave this blank if it is "Current"'
                            className="formInput"
                        />
                    </MuiPickersUtilsProvider>
                </div>

                <div className="formGroup">
                    <FormControl variant="outlined" className="formInput">
                        <InputLabel id="project-type">Project Type</InputLabel>
                        <Select
                            required
                            labelId="project-type"
                            label="Project Type"
                            name="type"
                            value={inputVals.type}
                            onChange={handleOnChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Freelance">Freelance</MenuItem>
                            <MenuItem value="Personal">Personal</MenuItem>
                            <MenuItem value="Internship">Internship</MenuItem>
                        </Select>
                    </FormControl>
                    <label className="formInput imageInput">
                        <input type="file" onChange={handleImageSelect} />
                        {image ? 'Image Selected' : 'Choose an Image'}
                    </label>
                </div>

                <TextField
                    required
                    type="text"
                    variant="outlined"
                    label="Project Link"
                    className="formInput"
                    name="link"
                    value={inputVals.link}
                    onChange={handleOnChange}
                />

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
                        Add Project
                    </Button>
                </div>
            </form>
        </ModalComp>
    )
}

export default ProjectForm
