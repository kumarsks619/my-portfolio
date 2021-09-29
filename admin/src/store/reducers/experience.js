import * as actionTypes from '../actionTypes'

export const expAddReducer = (
    state = { loading: false, experience: {}, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.EXPERIENCE_ADD_REQUEST:
            return { ...state, loading: true, error: null, success: false }

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
            return { ...state, loading: true, error: null }

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

        case actionTypes.EXPERIENCE_REORDER_UPDATE: {
            const { srcIndex, destIndex } = action.payload

            let experiencesReorder = [...state.experiences]

            const srcSerialNo = experiencesReorder[srcIndex].sNo
            const destSerialNo = experiencesReorder[destIndex].sNo

            experiencesReorder[srcIndex].sNo = destSerialNo
            experiencesReorder[destIndex].sNo = srcSerialNo

            experiencesReorder.sort((a, b) => b.sNo - a.sNo)

            return {
                ...state,
                experiences: experiencesReorder,
            }
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
            return { ...state, loading: true, error: null, success: false }

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

export const expEditReducer = (
    state = { loading: false, experience: {}, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.EXPERIENCE_EDIT_INIT:
            return { ...state, experience: action.payload }

        case actionTypes.EXPERIENCE_EDIT_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.EXPERIENCE_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                experience: {},
            }

        case actionTypes.EXPERIENCE_EDIT_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.EXPERIENCE_EDIT_CLEANUP:
            return { ...state, experience: {}, success: false }

        default:
            return state
    }
}

export const expReorderReducer = (
    state = { loading: false, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.EXPERIENCE_REORDER_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.EXPERIENCE_REORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
            }

        case actionTypes.EXPERIENCE_REORDER_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
