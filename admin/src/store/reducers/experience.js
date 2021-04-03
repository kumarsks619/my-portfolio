import * as actionTypes from '../actionTypes'

export const expAddReducer = (
    state = { loading: false, experience: {}, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.EXPERIENCE_ADD_REQUEST:
            return { ...state, loading: true }

        case actionTypes.EXPERIENCE_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                experience: action.payload,
                success: true,
            }

        case actionTypes.EXPERIENCE_ADD_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}

export const expGetAllReducer = (
    state = { loading: false, experiences: [], error: null },
    action
) => {
    switch (action.type) {
        case actionTypes.EXPERIENCE_GET_ALL_REQUEST:
            return { ...state, loading: true }

        case actionTypes.EXPERIENCE_GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                experiences: action.payload,
            }

        case actionTypes.EXPERIENCE_GET_ALL_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.EXPERIENCE_ADD_NEW:
            return {
                ...state,
                experiences: [action.payload, ...state.experiences],
            }

        case actionTypes.EXPERIENCE_REMOVE_DELETED:
            return {
                ...state,
                experiences: state.experiences.filter(
                    (exp) => exp._id !== action.payload
                ),
            }

        default:
            return state
    }
}

export const expRemoveReducer = (
    state = { loading: false, expID: '', error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.EXPERIENCE_REMOVE_REQUEST:
            return { ...state, loading: true }

        case actionTypes.EXPERIENCE_REMOVE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                expID: action.payload,
                success: true,
            }

        case actionTypes.EXPERIENCE_REMOVE_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
