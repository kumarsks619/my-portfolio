import React, { useState } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import './Login.css'
import logo from '../../assets/img/sks-logo.png'
import { useForm } from '../../utils/Hooks/useForm'
import { adminLogin } from '../../store/actions/auth'
import Loading from '../../utils/Comp/Loading'
import ChangePasswordForm from './ChangePasswordForm'

const Login = () => {
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.adminLogin)

    const [isFormOpen, setIsFormOpen] = useState(false)
    const { inputVals, handleOnChange } = useForm({
        username: '',
        password: '',
    })

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(adminLogin(inputVals.username, inputVals.password))
    }

    return (
        <>
            {loading && <Loading />}

            <div className="login">
                <form onSubmit={handleOnSubmit}>
                    <img src={logo} alt="SKS" className="center" />
                    <Typography
                        variant="h5"
                        gutterBottom
                        className="center login__heading"
                    >
                        Login
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className="center">
                        Portfolio Admin Panel
                    </Typography>

                    <TextField
                        required
                        type="text"
                        variant="outlined"
                        label="Username"
                        className="login__input"
                        name="username"
                        value={inputVals.username}
                        onChange={handleOnChange}
                    />
                    <TextField
                        required
                        type="password"
                        variant="outlined"
                        label="Password"
                        name="password"
                        value={inputVals.password}
                        onChange={handleOnChange}
                    />
                    <div className="btnWrapper">
                        <Typography
                            variant="body1"
                            className="changePasswordTag"
                            onClick={() => setIsFormOpen(true)}
                        >
                            Change password
                        </Typography>
                        <Button type="submit" variant="contained" color="primary">
                            Get In
                        </Button>
                    </div>
                </form>
            </div>

            <ChangePasswordForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    )
}

export default Login
