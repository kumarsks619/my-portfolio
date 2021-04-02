import * as actionTypes from '../actionTypes'
import axiosInstance from '../../utils/axiosInstance'
import { alertAdd } from './alert'

// to add a Project
export const projectAdd = (projectData) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.PROJECT_ADD_REQUEST,
        })

        const { data } = await axiosInstance.post('/api/project', projectData)

        dispatch({
            type: actionTypes.PROJECT_ADD_SUCCESS,
            payload: data,
        })

        dispatch({
            type: actionTypes.PROJECT_ADD_NEW,
            payload: data,
        })

        dispatch(alertAdd('Project Added!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.PROJECT_ADD_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to get all Projects
export const projectGetAll = () => async (dispatch) => {
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

// to delete a Project
export const projectRemove = (projectID) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.PROJECT_REMOVE_REQUEST,
        })

        await axiosInstance.delete(`/api/project/${projectID}`)

        dispatch({
            type: actionTypes.PROJECT_REMOVE_SUCCESS,
            payload: projectID,
        })

        dispatch({
            type: actionTypes.PROJECT_REMOVE_DELETED,
            payload: projectID,
        })

        dispatch(alertAdd('Project Removed!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.PROJECT_REMOVE_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}
