import { combineReducers } from 'redux'

import { alertReducer } from '../reducers/alert'
import { adminChangePassword, adminLoginReducer } from './auth'
import { projectAddReducer } from './project'

export default combineReducers({
    alerts: alertReducer,
    adminLogin: adminLoginReducer,
    adminChangePassword: adminChangePassword,
    projectAdd: projectAddReducer,
})
