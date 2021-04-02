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
