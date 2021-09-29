import * as actionTypes from '../actionTypes'
import axiosInstance from '../../utils/axiosInstance'
import { alertAdd } from './alert'

// to add a Project
export const projectAdd = (projectData) => async (dispatch, getState) => {
    const { projects } = getState().projectGetAll
    const sNo = projects[0].sNo + 1

    try {
        dispatch({
            type: actionTypes.PROJECT_ADD_REQUEST,
        })

        const { data } = await axiosInstance.post('/api/project', { ...projectData, sNo })

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

// to initialize a project edit
export const projectEditInit = (projectID) => (dispatch, getState) => {
    const { projects } = getState().projectGetAll

    const foundProject = projects.find(
        (project) => String(project._id) === String(projectID)
    )

    dispatch({
        type: actionTypes.PROJECT_EDIT_INIT,
        payload: foundProject,
    })
}

// to edit an existing Project
export const projectEdit = (projectData) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.PROJECT_EDIT_REQUEST,
        })

        await axiosInstance.put(`/api/project/${projectData._id}`, projectData)

        dispatch({
            type: actionTypes.PROJECT_EDIT_SUCCESS,
        })

        dispatch(projectGetAll())

        dispatch(alertAdd('Project Updated!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.PROJECT_EDIT_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to cleanup a project edit
export const projectEditCleanup = () => (dispatch) => {
    dispatch({
        type: actionTypes.PROJECT_EDIT_CLEANUP,
    })
}

// to reorder projects list
export const projectReorder =
    ({ srcIndex, destIndex }) =>
    async (dispatch, getState) => {
        const { projects } = getState().projectGetAll

        const srcSerialNo = projects[srcIndex].sNo
        const destSerialNo = projects[destIndex].sNo

        try {
            dispatch({
                type: actionTypes.PROJECT_REORDER_REQUEST,
            })

            await axiosInstance.patch('/api/project', { srcSerialNo, destSerialNo })

            dispatch({
                type: actionTypes.PROJECT_REORDER_UPDATE,
                payload: { srcIndex, destIndex },
            })

            dispatch({
                type: actionTypes.PROJECT_REORDER_SUCCESS,
            })

            dispatch(alertAdd('Project Reordered!', 'success'))
        } catch (err) {
            const errorMsg =
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message

            dispatch({
                type: actionTypes.PROJECT_REORDER_FAIL,
                payload: errorMsg,
            })

            dispatch(alertAdd(errorMsg, 'error'))
        }
    }
