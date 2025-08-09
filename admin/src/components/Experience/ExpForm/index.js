import React, { useState, useEffect, useCallback } from "react"
import { Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, Checkbox, FormControlLabel } from "@material-ui/core"
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { useDispatch, useSelector } from "react-redux"
import AddCircleIcon from "@material-ui/icons/AddCircle"

import ModalComp from "../../../utils/Comp/ModalComp"
import { useForm } from "../../../utils/Hooks/useForm"
import Loading from "../../../utils/Comp/Loading"
import { useDoubleDynamicInputs } from "../../../utils/Hooks/useDoubleDynamicInputs"
import { expAdd, expEdit, expEditCleanup } from "../../../store/actions/experience"
import "./ExpForm.css"

const initialInputVals = {
	position: "",
	companyName: "",
	companyLink: "",
	description: "",
	certificate: "",
}

const ExpForm = ({ isFormOpen, setIsFormOpen }) => {
	const dispatch = useDispatch()
	const { loading, success } = useSelector((state) => state.expAdd)
	const { loading: loadingExpEdit, experience, success: successExpEdit } = useSelector((state) => state.expEdit)

	const isEdit = experience._id ? true : false

	const { inputVals, setInputVals, handleOnChange, handleReset } = useForm(initialInputVals)
	const [startDate, setStartDate] = useState(null)
	const [endDate, setEndDate] = useState(null)
	const [isCurrent, setIsCurrent] = useState(false)
	const { values: tasks, setValues: setTasks, createInputs: createTasksInputAdd, handleInputAdd: handleTaskInputAdd } = useDoubleDynamicInputs("Task", "Link")

	const handleOnSubmit = (e) => {
		e.preventDefault()

		const expData = {
			position: inputVals.position,
			company: {
				name: inputVals.companyName,
				link: inputVals.companyLink,
			},
			start: startDate,
			end: isCurrent ? null : endDate,
			description: inputVals.description,
			certificate: inputVals.certificate,
			tasks,
		}

		if (isEdit) {
			dispatch(expEdit({ ...expData, _id: experience._id }))
		} else {
			dispatch(expAdd(expData))
		}
	}

	const handleModalClose = useCallback(() => {
		setIsFormOpen(false)
		handleReset()
		setStartDate(null)
		setEndDate(null)
		setIsCurrent(false)
		setTasks([])
		dispatch(expEditCleanup())
	}, [handleReset, setIsFormOpen, setTasks, dispatch])

	useEffect(() => {
		if (success || successExpEdit) {
			handleModalClose()
		}
	}, [success, successExpEdit, handleModalClose])

	useEffect(() => {
		if (Object.keys(experience).length > 0) {
			setInputVals({
				position: experience.position,
				companyName: experience.company.name,
				companyLink: experience.company.link,
				description: experience.description,
				certificate: experience.certificate,
			})

			setTasks(experience.tasks)
			setStartDate(experience.duration.start)

			if (experience.duration.end) {
				setEndDate(experience.duration.end)
			} else {
				setIsCurrent(true)
			}
		}
	}, [experience, setInputVals, setTasks])

	return (
		<ModalComp isModalOpen={isFormOpen} setIsModalOpen={setIsFormOpen}>
			{(loading || loadingExpEdit) && <Loading />}

			<form className='expForm' onSubmit={handleOnSubmit}>
				<Typography variant='h5' color='textSecondary' className='formHeading'>
					{isEdit ? "Update" : "Add"} Experience
				</Typography>

				<FormControl variant='outlined' className='formInput'>
					<InputLabel id='position'>Position</InputLabel>
					<Select required labelId='position' label='Position' name='position' value={inputVals.position} onChange={handleOnChange}>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						<MenuItem value='Intern'>Intern</MenuItem>
						<MenuItem value='Freelancer'>Freelancer</MenuItem>
						<MenuItem value='Software Engineer I'>Software Engineer I</MenuItem>
						<MenuItem value='Software Engineer II'>Software Engineer II</MenuItem>
						<MenuItem value='Software Engineer III'>Software Engineer III</MenuItem>
						<MenuItem value='Senior Software Engineer'>Senior Software Engineer</MenuItem>
						<MenuItem value='Senior Software Engineer II'>Senior Software Engineer II</MenuItem>
					</Select>
				</FormControl>

				<div className='formGroup'>
					<TextField required type='text' variant='outlined' label='Company' className='formInput' name='companyName' value={inputVals.companyName} onChange={handleOnChange} />

					<TextField required type='text' variant='outlined' label="Company's Website" className='formInput' name='companyLink' value={inputVals.companyLink} onChange={handleOnChange} />
				</div>

				<TextField required type='text' variant='outlined' label='Description' name='description' className='formInput' value={inputVals.description} onChange={handleOnChange} rows={5} />

				<div className='dynamicInputGroup'>
					<div className='formGroup'>
						<InputLabel style={{ fontSize: "1.1rem" }}>Tasks/Roles:</InputLabel>
						<Button variant='outlined' color='primary' size='small' startIcon={<AddCircleIcon />} onClick={handleTaskInputAdd} className='adminHome__dataFormBtn'>
							Add
						</Button>
					</div>
					<div className='dynamicInputsWrapper'>{createTasksInputAdd()}</div>
				</div>

				<div className='formGroup'>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<DatePicker required autoOk disableFuture views={["year", "month"]} variant='inline' inputVariant='outlined' label='Start Date' value={startDate} onChange={setStartDate} className='formInput' />
					</MuiPickersUtilsProvider>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<DatePicker autoOk disableFuture views={["year", "month"]} variant='inline' inputVariant='outlined' label='End Date' value={endDate} onChange={setEndDate} className='formInput' disabled={isCurrent} />
					</MuiPickersUtilsProvider>
					<FormControlLabel control={<Checkbox checked={isCurrent} onChange={(e) => setIsCurrent(e.target.checked)} color='primary' />} label='Present' />
				</div>

				<TextField type='text' variant='outlined' label='Certificate Link' name='certificate' className='formInput' value={inputVals.certificate} onChange={handleOnChange} rows={5} />

				<div className='btnsWrapper'>
					<Button variant='outlined' color='primary' className='formBtn' onClick={handleModalClose}>
						Close
					</Button>
					<Button type='submit' variant='contained' color='primary' className='formBtn'>
						{isEdit ? "Update" : "Add"} Experience
					</Button>
				</div>
			</form>
		</ModalComp>
	)
}

export default ExpForm
