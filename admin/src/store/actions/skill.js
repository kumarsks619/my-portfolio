import * as actionTypes from '../actionTypes'
import axiosInstance from '../../utils/axiosInstance'
import { alertAdd } from './alert'

// to add a Skill
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

// to get all Skills
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

// to delete a Skill
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

// to initialize a skill edit
export const skillEditInit = (skillID) => (dispatch, getState) => {
    const { skills } = getState().skillGetAll

    const foundSkill = skills.find((skill) => String(skill._id) === String(skillID))

    dispatch({
        type: actionTypes.SKILL_EDIT_INIT,
        payload: foundSkill,
    })
}

// to edit an existing skill
export const skillEdit = (skillData) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.SKILL_EDIT_REQUEST,
        })

        await axiosInstance.put(`/api/expertise/skill/${skillData._id}`, skillData)

        dispatch({
            type: actionTypes.SKILL_EDIT_SUCCESS,
        })

        dispatch(skillGetAll())

        dispatch(alertAdd('Skill Updated!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.SKILL_EDIT_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to cleanup a skill edit
export const skillEditCleanup = () => (dispatch) => {
    dispatch({
        type: actionTypes.SKILL_EDIT_CLEANUP,
    })
}

// to reorder skills list
export const skillReorder =
    ({ srcIndex, destIndex }) =>
    async (dispatch, getState) => {
        const { skills } = getState().skillGetAll

        const srcSerialNo = skills[srcIndex].sNo
        const destSerialNo = skills[destIndex].sNo

        try {
            dispatch({
                type: actionTypes.SKILL_REORDER_REQUEST,
            })

            await axiosInstance.patch('/api/expertise/skill', {
                srcSerialNo,
                destSerialNo,
            })

            dispatch({
                type: actionTypes.SKILL_REORDER_UPDATE,
                payload: { srcIndex, destIndex },
            })

            dispatch({
                type: actionTypes.SKILL_REORDER_SUCCESS,
            })

            dispatch(alertAdd('Skill Reordered!', 'success'))
        } catch (err) {
            const errorMsg =
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message

            dispatch({
                type: actionTypes.SKILL_REORDER_FAIL,
                payload: errorMsg,
            })

            dispatch(alertAdd(errorMsg, 'error'))
        }
    }
