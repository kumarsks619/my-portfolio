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

        case actionTypes.SKILL_ADD_FAIL:
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

        case actionTypes.SKILL_REORDER_UPDATE: {
            const { srcIndex, destIndex } = action.payload

            let skillsReorder = [...state.skills]

            const srcSerialNo = skillsReorder[srcIndex].sNo
            const destSerialNo = skillsReorder[destIndex].sNo

            skillsReorder[srcIndex].sNo = destSerialNo
            skillsReorder[destIndex].sNo = srcSerialNo

            skillsReorder.sort((a, b) => b.sNo - a.sNo)

            return {
                ...state,
                skills: skillsReorder,
            }
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

export const skillEditReducer = (
    state = { loading: false, skill: {}, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.SKILL_EDIT_INIT:
            return { ...state, skill: action.payload }

        case actionTypes.SKILL_EDIT_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.SKILL_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                skill: {},
            }

        case actionTypes.SKILL_EDIT_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.SKILL_EDIT_CLEANUP:
            return { ...state, skill: {}, success: false }

        default:
            return state
    }
}

export const skillReorderReducer = (
    state = { loading: false, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.SKILL_REORDER_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.SKILL_REORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
            }

        case actionTypes.SKILL_REORDER_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
