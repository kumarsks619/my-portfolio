import * as actionTypes from '../actionTypes'

export const projectAddReducer = (
    state = { loading: false, project: {}, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.PROJECT_ADD_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.PROJECT_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                project: action.payload,
                success: true,
            }

        case actionTypes.PROJECT_ADD_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}

export const projectGetAllReducer = (
    state = { loading: false, projects: [], error: null },
    action
) => {
    switch (action.type) {
        case actionTypes.PROJECT_GET_ALL_REQUEST:
            return { ...state, loading: true, error: null }

        case actionTypes.PROJECT_GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                projects: action.payload,
            }

        case actionTypes.PROJECT_GET_ALL_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.PROJECT_ADD_NEW:
            return {
                ...state,
                projects: [action.payload, ...state.projects],
            }

        case actionTypes.PROJECT_REMOVE_DELETED:
            return {
                ...state,
                projects: state.projects.filter(
                    (project) => project._id !== action.payload
                ),
            }

        default:
            return state
    }
}

export const projectRemoveReducer = (
    state = { loading: false, projectID: '', error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.PROJECT_REMOVE_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.PROJECT_REMOVE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                projectID: action.payload,
                success: true,
            }

        case actionTypes.PROJECT_REMOVE_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}

export const projectEditReducer = (
    state = { loading: false, project: {}, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.PROJECT_EDIT_INIT:
            return { ...state, project: action.payload }

        case actionTypes.PROJECT_EDIT_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.PROJECT_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                project: {},
            }

        case actionTypes.PROJECT_EDIT_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.PROJECT_EDIT_CLEANUP:
            return { ...state, project: {}, success: false }

        default:
            return state
    }
}
