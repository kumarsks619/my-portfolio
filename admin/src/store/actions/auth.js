import * as actionTypes from '../actionTypes'
import axiosInstance from '../../utils/axiosInstance'
import { alertAdd } from './alert'
import setAuthHeader from '../../utils/setAuthHeader'

// to login an Admin
export const adminLogin = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.ADMIN_LOGIN_REQUEST,
        })

        const { data } = await axiosInstance.post('/api/auth/login', {
            username,
            password,
        })

        dispatch({
            type: actionTypes.ADMIN_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('VeNoM__admin', JSON.stringify(data))

        if (localStorage.getItem('VeNoM__admin')) {
            const token = JSON.parse(localStorage.getItem('VeNoM__admin')).token
            setAuthHeader(token)
        }
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.ADMIN_LOGIN_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to logout an Admin
export const adminLogout = () => (dispatch) => {
    localStorage.removeItem('VeNoM__admin')
    dispatch({ type: actionTypes.ADMIN_LOGOUT })
    dispatch(alertAdd('Admin Logout!', 'success'))
}

// to change an Admin password
export const adminChangePassword =
    (username, currentPassword, newPassword) => async (dispatch) => {
        try {
            dispatch({
                type: actionTypes.ADMIN_PASSWORD_CHANGE_REQUEST,
            })

            const { data } = await axiosInstance.put('/api/auth', {
                username,
                currentPassword,
                newPassword,
            })

            dispatch({
                type: actionTypes.ADMIN_PASSWORD_CHANGE_SUCCESS,
                payload: data,
            })

            dispatch(alertAdd(data.message, 'success'))
            localStorage.removeItem('VeNoM__admin')
        } catch (err) {
            const errorMsg =
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message

            dispatch({
                type: actionTypes.ADMIN_PASSWORD_CHANGE_FAIL,
                payload: errorMsg,
            })

            dispatch(alertAdd(errorMsg, 'error'))
        }
    }
