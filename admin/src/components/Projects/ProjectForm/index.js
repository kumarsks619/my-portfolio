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
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useDispatch, useSelector } from 'react-redux'

import ModalComp from '../../../utils/Comp/ModalComp'
import { useForm } from '../../../utils/Hooks/useForm'
import { useDynamicInputs } from '../../../utils/Hooks/useDynamicInputs'
import {
    projectAdd,
    projectEdit,
    projectEditCleanup,
} from '../../../store/actions/project'
import { alertAdd } from '../../../store/actions/alert'
import Loading from '../../../utils/Comp/Loading'
import { handleImageCompress } from '../../../utils/imageCompressor'
import './ProjectForm.css'

const initialInputVals = {
    name: '',
    description: '',
    type: '',
    link: '',
    github: '',
}

const ProjectForm = ({ isFormOpen, setIsFormOpen }) => {
    const dispatch = useDispatch()
    const { loading, success } = useSelector((state) => state.projectAdd)
    const {
        loading: loadingProjectEdit,
        project,
        success: successProjectEdit,
    } = useSelector((state) => state.projectEdit)

    const isEdit = project._id ? true : false

    const { inputVals, setInputVals, handleOnChange, handleReset } =
        useForm(initialInputVals)
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

        const projectData = {
            ...inputVals,
            technologies,
        }

        if (isEdit) {
            dispatch(
                projectEdit({
                    ...projectData,
                    image: image ? image : null,
                    _id: project._id,
                })
            )
        } else {
            dispatch(
                projectAdd({
                    ...projectData,
                    image,
                })
            )
        }
    }

    const handleModalClose = useCallback(() => {
        setIsFormOpen(false)
        handleReset()
        setImage('')
        setTechnologies([])
        dispatch(projectEditCleanup())
    }, [handleReset, setIsFormOpen, setTechnologies, dispatch])

    useEffect(() => {
        if (success || successProjectEdit) {
            handleModalClose()
        }
    }, [success, successProjectEdit, handleModalClose])

    useEffect(() => {
        if (Object.keys(project).length > 0) {
            setInputVals({
                name: project.name,
                description: project.description,
                type: project.type,
                link: project.link,
                github: project.github ? project.github : '',
            })

            setTechnologies(project.technologies)
        }
    }, [project, setInputVals, setTechnologies])

    return (
        <ModalComp isModalOpen={isFormOpen} setIsModalOpen={setIsFormOpen}>
            {(loading || loadingProjectEdit) && <Loading />}

            <form className="projectForm" onSubmit={handleOnSubmit}>
                <Typography variant="h5" color="textSecondary" className="formHeading">
                    {isEdit ? 'Update' : 'Add'} Project
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
                    label="Live Link"
                    className="formInput"
                    name="link"
                    value={inputVals.link}
                    onChange={handleOnChange}
                />

                <TextField
                    required
                    type="text"
                    variant="outlined"
                    label="Github Link"
                    className="formInput"
                    name="github"
                    value={inputVals.github}
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
                        {isEdit ? 'Update' : 'Add'} Project
                    </Button>
                </div>
            </form>
        </ModalComp>
    )
}

export default ProjectForm
