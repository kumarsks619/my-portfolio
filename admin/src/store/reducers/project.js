import * as actionTypes from '../actionTypes'

export const projectAddReducer = (
    state = { loading: false, project: {}, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.PROJECT_ADD_REQUEST:
            return { ...state, loading: true }

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
