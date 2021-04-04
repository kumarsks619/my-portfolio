import React, { useEffect } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import ModalComp from '../../../utils/Comp/ModalComp'
import { useForm } from '../../../utils/Hooks/useForm'
import './ChangePassword.css'
import { adminChangePassword } from '../../../store/actions/auth'
import { alertAdd } from '../../../store/actions/alert'
import Loading from '../../../utils/Comp/Loading'

const ChangePasswordForm = ({ isFormOpen, setIsFormOpen }) => {
    const dispatch = useDispatch()
    const { loading, success } = useSelector((state) => state.adminChangePassword)

    const { inputVals, handleOnChange, handleReset } = useForm({
        username: '',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
    })

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (inputVals.newPassword !== inputVals.newPasswordConfirm) {
            dispatch(alertAdd('New Passwords not matched!', 'error'))
        }
        dispatch(
            adminChangePassword(
                inputVals.username,
                inputVals.currentPassword,
                inputVals.newPassword
            )
        )
    }

    const handleModalClose = () => {
        setIsFormOpen(false)
        handleReset()
    }

    useEffect(() => {
        if (success) {
            handleModalClose()
        }
    }, [success])

    return (
        <ModalComp isModalOpen={isFormOpen} setIsModalOpen={setIsFormOpen}>
            {loading && <Loading />}

            <form className="changePasswordForm" onSubmit={handleOnSubmit}>
                <Typography variant="h5" color="textSecondary" className="formHeading">
                    Change Password
                </Typography>

                <TextField
                    required
                    type="text"
                    variant="outlined"
                    label="Username"
                    className="formInput"
                    name="username"
                    value={inputVals.username}
                    onChange={handleOnChange}
                />
                <TextField
                    required
                    type="password"
                    variant="outlined"
                    label="Current Password"
                    className="formInput"
                    name="currentPassword"
                    value={inputVals.currentPassword}
                    onChange={handleOnChange}
                />
                <TextField
                    required
                    type="password"
                    variant="outlined"
                    label="New Password"
                    className="formInput"
                    name="newPassword"
                    value={inputVals.newPassword}
                    onChange={handleOnChange}
                />
                <TextField
                    required
                    type="password"
                    variant="outlined"
                    label="Confirm New Password"
                    className="formInput"
                    name="newPasswordConfirm"
                    value={inputVals.newPasswordConfirm}
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
                        Update
                    </Button>
                </div>
            </form>
        </ModalComp>
    )
}

export default ChangePasswordForm
