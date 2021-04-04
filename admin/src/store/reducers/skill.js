import * as actionTypes from '../actionTypes'

export const skillAddReducer = (
    state = { loading: false, skill: {}, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.SKILL_ADD_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.SKILL_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                skill: action.payload,
                success: true,
            }

        case actionTypes.SKILL_GET_ALL_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}

export const skillGetAllReducer = (
    state = { loading: false, skills: [], error: null },
    action
) => {
    switch (action.type) {
        case actionTypes.SKILL_GET_ALL_REQUEST:
            return { ...state, loading: true, error: null }

        case actionTypes.SKILL_GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                skills: action.payload,
            }

        case actionTypes.SKILL_GET_ALL_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.SKILL_ADD_NEW:
            return {
                ...state,
                skills: [action.payload, ...state.skills],
            }

        case actionTypes.SKILL_REMOVE_DELETED:
            return {
                ...state,
                skills: state.skills.filter((skill) => skill._id !== action.payload),
            }

        default:
            return state
    }
}

export const skillRemoveReducer = (
    state = { loading: false, skillID: '', error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.SKILL_REMOVE_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.SKILL_REMOVE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                skillID: action.payload,
                success: true,
            }

        case actionTypes.SKILL_REMOVE_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
