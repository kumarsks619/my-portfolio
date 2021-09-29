import * as actionTypes from '../actionTypes'
import axiosInstance from '../../utils/axiosInstance'
import { alertAdd } from './alert'

// to add an Experience
export const expAdd = (expData) => async (dispatch, getState) => {
    const { experiences } = getState().expGetAll
    const sNo = experiences[0].sNo + 1

    try {
        dispatch({
            type: actionTypes.EXPERIENCE_ADD_REQUEST,
        })

        const { data } = await axiosInstance.post('/api/expertise/experience', {
            ...expData,
            sNo,
        })

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

// to initialize a experience edit
export const expEditInit = (expID) => (dispatch, getState) => {
    const { experiences } = getState().expGetAll

    const foundExp = experiences.find((exp) => String(exp._id) === String(expID))

    dispatch({
        type: actionTypes.EXPERIENCE_EDIT_INIT,
        payload: foundExp,
    })
}

// to edit an existing Experience
export const expEdit = (expData) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.EXPERIENCE_EDIT_REQUEST,
        })

        await axiosInstance.put(`/api/expertise/experience/${expData._id}`, expData)

        dispatch({
            type: actionTypes.EXPERIENCE_EDIT_SUCCESS,
        })

        dispatch(expGetAll())

        dispatch(alertAdd('Experience Updated!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.EXPERIENCE_EDIT_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to cleanup a experience edit
export const expEditCleanup = () => (dispatch) => {
    dispatch({
        type: actionTypes.EXPERIENCE_EDIT_CLEANUP,
    })
}

// to reorder experiences
export const expReorder =
    ({ srcIndex, destIndex }) =>
    async (dispatch, getState) => {
        const { experiences } = getState().expGetAll

        const srcSerialNo = experiences[srcIndex].sNo
        const destSerialNo = experiences[destIndex].sNo

        try {
            dispatch({
                type: actionTypes.EXPERIENCE_REORDER_REQUEST,
            })

            await axiosInstance.patch('/api/expertise/experience', {
                srcSerialNo,
                destSerialNo,
            })

            dispatch({
                type: actionTypes.EXPERIENCE_REORDER_UPDATE,
                payload: { srcIndex, destIndex },
            })

            dispatch({
                type: actionTypes.EXPERIENCE_REORDER_SUCCESS,
            })

            dispatch(alertAdd('Experience Reordered!', 'success'))
        } catch (err) {
            const errorMsg =
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message

            dispatch({
                type: actionTypes.EXPERIENCE_REORDER_FAIL,
                payload: errorMsg,
            })

            dispatch(alertAdd(errorMsg, 'error'))
        }
    }
