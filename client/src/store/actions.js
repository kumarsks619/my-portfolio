import { v4 } from 'uuid'
import jwtDecode from 'jwt-decode'

import * as actionTypes from './actionTypes'
import axiosInstance from '../utils/axiosInstance'
import { handleCache } from '../utils/handleCache'

export const alertAdd = (msg, alertType, timeout = 5000) => (dispatch) => {
    const _id = v4()
    dispatch({
        type: actionTypes.ALERT_ADD,
        payload: { _id, msg, alertType },
    })

    setTimeout(
        () =>
            dispatch({
                type: actionTypes.ALERT_REMOVE,
                payload: _id,
            }),
        timeout
    )
}

// to get all Experiences
export const expGetAll = () => async (dispatch, getState) => {
    const { lastFetch } = getState().exp

    if (!handleCache(lastFetch)) {
        try {
            dispatch({
                type: actionTypes.EXPERIENCE_GET_ALL_REQUEST,
            })

            const { data } = await axiosInstance.get('/api/expertise/experience')

            dispatch({
                type: actionTypes.EXPERIENCE_GET_ALL_SUCCESS,
                payload: data,
            })
        } catch (err) {
            const errorMsg =
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message

            dispatch({
                type: actionTypes.EXPERIENCE_GET_ALL_FAIL,
                payload: errorMsg,
            })

            dispatch(alertAdd(errorMsg, 'error'))
        }
    }
}

// to get all Projects
export const projectGetAll = () => async (dispatch, getState) => {
    const { lastFetch } = getState().projects

    if (!handleCache(lastFetch)) {
        try {
            dispatch({
                type: actionTypes.PROJECT_GET_ALL_REQUEST,
            })

            const { data } = await axiosInstance.get('/api/project')

            dispatch({
                type: actionTypes.PROJECT_GET_ALL_SUCCESS,
                payload: data,
            })
        } catch (err) {
            const errorMsg =
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message

            dispatch({
                type: actionTypes.PROJECT_GET_ALL_FAIL,
                payload: errorMsg,
            })

            dispatch(alertAdd(errorMsg, 'error'))
        }
    }
}

// to get all Skills
export const skillGetAll = () => async (dispatch, getState) => {
    const { lastFetch } = getState().skills

    if (!handleCache(lastFetch)) {
        try {
            dispatch({
                type: actionTypes.SKILL_GET_ALL_REQUEST,
            })

            const { data } = await axiosInstance.get('/api/expertise/skill')

            dispatch({
                type: actionTypes.SKILL_GET_ALL_SUCCESS,
                payload: data,
            })
        } catch (err) {
            const errorMsg =
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message

            dispatch({
                type: actionTypes.SKILL_GET_ALL_FAIL,
                payload: errorMsg,
            })

            dispatch(alertAdd(errorMsg, 'error'))
        }
    }
}

// to send a message
export const messageSend = (messageData) => async (dispatch) => {
    if (localStorage.getItem('messageToken')) {
        const token = localStorage.getItem('messageToken')

        // checking if the already present message token is expired or not
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 > Date.now()) {
            dispatch(alertAdd("You've already pinged me in a while.", 'error'))
            return
        } else {
            localStorage.removeItem('messageToken')
        }
    }

    try {
        dispatch({
            type: actionTypes.MESSAGE_SEND_REQUEST,
        })

        const { data } = await axiosInstance.post('/api/contact/message', messageData)

        dispatch({
            type: actionTypes.MESSAGE_SEND_SUCCESS,
        })

        localStorage.setItem('messageToken', data.token)

        dispatch(alertAdd('Message Sent! Expect a response ASAP.', 'success', 10000))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.MESSAGE_SEND_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}
