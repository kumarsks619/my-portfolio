import { combineReducers } from 'redux'

import { alertReducer } from '../reducers/alert'
import { adminChangePassword, adminLoginReducer } from './auth'
import { expAddReducer, expGetAllReducer, expRemoveReducer } from './experience'
import { projectAddReducer, projectGetAllReducer, projectRemoveReducer } from './project'
import { skillAddReducer, skillGetAllReducer, skillRemoveReducer } from './skill'
import {
    messageGetAllReducer,
    messageRemoveAllReducer,
    messageRemoveReducer,
} from './message'
import { resumeAddNewReducer, resumeGetLinkReducer } from './resume'

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
    skillAdd: skillAddReducer,
    skillGetAll: skillGetAllReducer,
    skillRemove: skillRemoveReducer,
    messageGetAll: messageGetAllReducer,
    messageRemove: messageRemoveReducer,
    messageRemoveAll: messageRemoveAllReducer,
    resumeAddNew: resumeAddNewReducer,
    resumeGetLink: resumeGetLinkReducer,
})
