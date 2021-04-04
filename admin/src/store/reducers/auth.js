import * as actionTypes from '../actionTypes'

export const adminLoginReducer = (
    state = { loading: false, admin: null, error: null },
    action
) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN_REQUEST:
            return { ...state, loading: true }

        case actionTypes.ADMIN_LOGIN_SUCCESS:
            return { ...state, loading: false, admin: action.payload }

        case actionTypes.ADMIN_LOGIN_FAIL:
            return { ...state, loading: false, admin: null, error: action.payload }

        case actionTypes.ADMIN_LOGOUT:
            return { loading: false, admin: null, error: null }

        default:
            return state
    }
}

export const adminChangePassword = (
    state = { loading: false, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.ADMIN_PASSWORD_CHANGE_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.ADMIN_PASSWORD_CHANGE_SUCCESS:
            return { ...state, loading: false, error: null, success: true }

        case actionTypes.ADMIN_PASSWORD_CHANGE_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
