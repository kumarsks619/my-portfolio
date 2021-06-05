import * as actionTypes from '../actionTypes'
import axiosInstance from '../../utils/axiosInstance'
import { alertAdd } from './alert'

// to add a new Resume link
export const resumeAddNew = (link) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.RESUME_ADD_NEW_REQUEST,
        })

        await axiosInstance.post('/api/resume', { link })

        dispatch({
            type: actionTypes.RESUME_ADD_NEW_SUCCESS,
        })

        dispatch({
            type: actionTypes.RESUME_UPDATE_NEW_LINK,
            payload: link,
        })

        dispatch(alertAdd('New Resume Updated!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.RESUME_ADD_NEW_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to get the Resume link
export const resumeGetLink = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.RESUME_GET_LINK_REQUEST,
        })

        const { data } = await axiosInstance.get('/api/resume')

        dispatch({
            type: actionTypes.RESUME_GET_LINK_SUCCESS,
            payload: data,
        })
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.RESUME_GET_LINK_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}
