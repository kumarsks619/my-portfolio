import * as actionTypes from './actionTypes'

export const alertReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ALERT_ADD:
            return [...state, action.payload]

        case actionTypes.ALERT_REMOVE:
            return state.filter((alert) => alert._id !== action.payload)

        default:
            return state
    }
}

export const projectGetAllReducer = (
    state = { loading: false, projects: [], error: null, lastFetch: null },
    action
) => {
    switch (action.type) {
        case actionTypes.PROJECT_GET_ALL_REQUEST:
            return { ...state, loading: true }

        case actionTypes.PROJECT_GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                projects: action.payload,
                lastFetch: Date.now(),
            }

        case actionTypes.PROJECT_GET_ALL_FAIL:
            return { ...state, loading: false, error: action.payload, lastFetch: null }

        default:
            return state
    }
}

export const expGetAllReducer = (
    state = { loading: false, experiences: [], error: null, lastFetch: null },
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
                lastFetch: Date.now(),
            }

        case actionTypes.EXPERIENCE_GET_ALL_FAIL:
            return { ...state, loading: false, error: action.payload, lastFetch: null }

        default:
            return state
    }
}

export const skillGetAllReducer = (
    state = { loading: false, skills: [], error: null, lastFetch: null },
    action
) => {
    switch (action.type) {
        case actionTypes.SKILL_GET_ALL_REQUEST:
            return { ...state, loading: true }

        case actionTypes.SKILL_GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                skills: action.payload,
                lastFetch: Date.now(),
            }

        case actionTypes.SKILL_GET_ALL_FAIL:
            return { ...state, loading: false, error: action.payload, lastFetch: null }

        default:
            return state
    }
}

export const messageSendReducer = (
    state = { loading: false, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.MESSAGE_SEND_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.MESSAGE_SEND_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
            }

        case actionTypes.MESSAGE_SEND_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false,
            }

        default:
            return state
    }
}

export const resumeGetLinkReducer = (
    state = { loading: false, link: '', error: null, lastFetch: null },
    action
) => {
    switch (action.type) {
        case actionTypes.RESUME_GET_LINK_REQUEST:
            return { ...state, loading: true }

        case actionTypes.RESUME_GET_LINK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                link: action.payload,
                lastFetch: Date.now(),
            }

        case actionTypes.RESUME_GET_LINK_FAIL:
            return { ...state, loading: false, error: action.payload, lastFetch: null }

        default:
            return state
    }
}
