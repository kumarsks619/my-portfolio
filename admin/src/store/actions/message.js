import * as actionTypes from '../actionTypes'
import axiosInstance from '../../utils/axiosInstance'
import { alertAdd } from './alert'

// to get all Messages
export const messageGetAll = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.MESSAGE_GET_ALL_REQUEST,
        })

        const { data } = await axiosInstance.get('/api/contact/message')

        dispatch({
            type: actionTypes.MESSAGE_GET_ALL_SUCCESS,
            payload: data,
        })
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.MESSAGE_GET_ALL_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to delete a Message
export const messageRemove = (messageID) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.MESSAGE_REMOVE_REQUEST,
        })

        await axiosInstance.delete(`/api/contact/message/${messageID}`)

        dispatch({
            type: actionTypes.MESSAGE_REMOVE_SUCCESS,
            payload: messageID,
        })

        dispatch({
            type: actionTypes.MESSAGE_REMOVE_DELETED,
            payload: messageID,
        })

        dispatch(alertAdd('Message Removed!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.MESSAGE_REMOVE_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to delete all Messages
export const messageRemoveAll = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.MESSAGE_REMOVE_ALL_REQUEST,
        })

        await axiosInstance.delete(`/api/contact/message`)

        dispatch({
            type: actionTypes.MESSAGE_REMOVE_ALL_SUCCESS,
        })

        dispatch({
            type: actionTypes.MESSAGE_REMOVE_ALL_DELETED,
        })

        dispatch(alertAdd('All Messages Removed!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.MESSAGE_REMOVE_ALL_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}
