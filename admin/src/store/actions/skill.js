import * as actionTypes from '../actionTypes'
import axiosInstance from '../../utils/axiosInstance'
import { alertAdd } from './alert'

// to add a Project
export const skillAdd = (skillData) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.SKILL_ADD_REQUEST,
        })

        const { data } = await axiosInstance.post('/api/expertise/skill', skillData)

        dispatch({
            type: actionTypes.SKILL_ADD_SUCCESS,
            payload: data,
        })

        dispatch({
            type: actionTypes.SKILL_ADD_NEW,
            payload: data,
        })

        dispatch(alertAdd('Skill Added!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.SKILL_ADD_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to get all Projects
export const skillGetAll = () => async (dispatch) => {
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

// to delete a Project
export const skillRemove = (skillID) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.SKILL_REMOVE_REQUEST,
        })

        await axiosInstance.delete(`/api/expertise/skill/${skillID}`)

        dispatch({
            type: actionTypes.SKILL_REMOVE_SUCCESS,
            payload: skillID,
        })

        dispatch({
            type: actionTypes.SKILL_REMOVE_DELETED,
            payload: skillID,
        })

        dispatch(alertAdd('Skill Removed!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.SKILL_REMOVE_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}
