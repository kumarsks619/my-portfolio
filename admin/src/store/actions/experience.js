import * as actionTypes from '../actionTypes'
import axiosInstance from '../../utils/axiosInstance'
import { alertAdd } from './alert'

// to add an Experience
export const expAdd = (expData) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.EXPERIENCE_ADD_REQUEST,
        })

        const { data } = await axiosInstance.post('/api/expertise/experience', expData)

        dispatch({
            type: actionTypes.EXPERIENCE_ADD_SUCCESS,
            payload: data,
        })

        dispatch({
            type: actionTypes.EXPERIENCE_ADD_NEW,
            payload: data,
        })

        dispatch(alertAdd('Experience Added!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.EXPERIENCE_ADD_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to get all Experiences
export const expGetAll = () => async (dispatch) => {
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

// to delete an Experience
export const expRemove = (expID) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.EXPERIENCE_REMOVE_REQUEST,
        })

        await axiosInstance.delete(`/api/expertise/experience/${expID}`)

        dispatch({
            type: actionTypes.EXPERIENCE_REMOVE_SUCCESS,
            payload: expID,
        })

        dispatch({
            type: actionTypes.EXPERIENCE_REMOVE_DELETED,
            payload: expID,
        })

        dispatch(alertAdd('Experience Removed!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.EXPERIENCE_REMOVE_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}
