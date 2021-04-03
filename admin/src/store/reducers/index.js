import { combineReducers } from 'redux'

import { alertReducer } from '../reducers/alert'
import { adminChangePassword, adminLoginReducer } from './auth'
import { expAddReducer, expGetAllReducer, expRemoveReducer } from './experience'
import { projectAddReducer, projectGetAllReducer, projectRemoveReducer } from './project'

export default combineReducers({
    alerts: alertReducer,
    adminLogin: adminLoginReducer,
    adminChangePassword: adminChangePassword,
    projectAdd: projectAddReducer,
    projectGetAll: projectGetAllReducer,
    projectRemove: projectRemoveReducer,
    expAdd: expAddReducer,
    expGetAll: expGetAllReducer,
    expRemove: expRemoveReducer,
})
