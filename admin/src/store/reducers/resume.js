import * as actionTypes from '../actionTypes'

export const resumeAddNewReducer = (
    state = { loading: false, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.RESUME_ADD_NEW_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.RESUME_ADD_NEW_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
            }

        case actionTypes.RESUME_ADD_NEW_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}

export const resumeGetLinkReducer = (
    state = { loading: false, link: '', error: null },
    action
) => {
    switch (action.type) {
        case actionTypes.RESUME_GET_LINK_REQUEST:
            return { ...state, loading: true, error: null }

        case actionTypes.RESUME_GET_LINK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                link: action.payload,
            }

        case actionTypes.RESUME_GET_LINK_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.RESUME_UPDATE_NEW_LINK:
            return { ...state, link: action.payload }

        default:
            return state
    }
}
