import * as actionTypes from '../actionTypes'

export const messageGetAllReducer = (
    state = { loading: false, messages: [], error: null },
    action
) => {
    switch (action.type) {
        case actionTypes.MESSAGE_GET_ALL_REQUEST:
            return { ...state, loading: true, error: null }

        case actionTypes.MESSAGE_GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                messages: action.payload,
            }

        case actionTypes.MESSAGE_GET_ALL_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.MESSAGE_REMOVE_DELETED:
            return {
                ...state,
                messages: state.messages.filter(
                    (message) => message._id !== action.payload
                ),
            }

        case actionTypes.MESSAGE_REMOVE_ALL_DELETED:
            return { ...state, messages: [] }

        default:
            return state
    }
}

export const messageRemoveReducer = (
    state = { loading: false, messageID: '', error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.MESSAGE_REMOVE_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.MESSAGE_REMOVE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                messageID: action.payload,
                success: true,
            }

        case actionTypes.MESSAGE_REMOVE_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}

export const messageRemoveAllReducer = (
    state = { loading: false, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.MESSAGE_REMOVE_ALL_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.MESSAGE_REMOVE_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
            }

        case actionTypes.MESSAGE_REMOVE_ALL_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
