import React, { useState, useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import ModalComp from '../../../utils/Comp/ModalComp'
import { useForm } from '../../../utils/Hooks/useForm'
import Loading from '../../../utils/Comp/Loading'
import { useDoubleDynamicInputs } from '../../../utils/Hooks/useDoubleDynamicInputs'
import { expAdd } from '../../../store/actions/experience'
import './ExpForm.css'

const ExpForm = ({ isFormOpen, setIsFormOpen }) => {
    const dispatch = useDispatch()
    const { loading, success } = useSelector((state) => state.expAdd)

    const { inputVals, handleOnChange, handleReset } = useForm({
        position: '',
        companyName: '',
        companyLink: '',
        description: '',
    })
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const {
        values: tasks,
        setValues: setTasks,
        createInputs: createTasksInputAdd,
        handleInputAdd: handleTaskInputAdd,
    } = useDoubleDynamicInputs('Task', 'Link')

    const handleOnSubmit = (e) => {
        e.preventDefault()

        dispatch(
            expAdd({
                position: inputVals.position,
                company: {
                    name: inputVals.companyName,
                    link: inputVals.companyLink,
                },
                start: startDate,
                end: endDate,
                description: inputVals.description,
                tasks,
            })
        )
    }

    const handleModalClose = () => {
        setIsFormOpen(false)
        handleReset()
        setStartDate(null)
        setEndDate(null)
        setTasks([])
    }

    useEffect(() => {
        if (success) {
            handleModalClose()
        }
    }, [success])

    return (
        <ModalComp isModalOpen={isFormOpen} setIsModalOpen={setIsFormOpen}>
            {loading && <Loading />}

            <form className="expForm" onSubmit={handleOnSubmit}>
                <Typography variant="h5" color="textSecondary" className="formHeading">
                    Add Experience
                </Typography>

                <FormControl variant="outlined" className="formInput">
                    <InputLabel id="position">Position</InputLabel>
                    <Select
                        required
                        labelId="position"
                        label="Position"
                        name="position"
                        value={inputVals.position}
                        onChange={handleOnChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Intern">Intern</MenuItem>
                        <MenuItem value="Freelancer">Freelancer</MenuItem>
                        <MenuItem value="Junior Developer">Junior Developer</MenuItem>
                        <MenuItem value="Senior Developer">Senior Developer</MenuItem>
                    </Select>
                </FormControl>

                <div className="formGroup">
                    <TextField
                        required
                        type="text"
                        variant="outlined"
                        label="Company"
                        className="formInput"
                        name="companyName"
                        value={inputVals.companyName}
                        onChange={handleOnChange}
                    />

                    <TextField
                        required
                        type="text"
                        variant="outlined"
                        label="Company's Website"
                        className="formInput"
                        name="companyLink"
                        value={inputVals.companyLink}
                        onChange={handleOnChange}
                    />
                </div>

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
                            Tasks/Roles:
                        </InputLabel>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            startIcon={<AddCircleIcon />}
                            onClick={handleTaskInputAdd}
                            className="adminHome__dataFormBtn"
                        >
                            Add
                        </Button>
                    </div>
                    <div className="dynamicInputsWrapper">{createTasksInputAdd()}</div>
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
                        Add Experience
                    </Button>
                </div>
            </form>
        </ModalComp>
    )
}

export default ExpForm
