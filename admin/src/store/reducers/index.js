import { combineReducers } from 'redux'

import { alertReducer } from '../reducers/alert'
import { adminChangePassword, adminLoginReducer } from './auth'
import {
    expAddReducer,
    expGetAllReducer,
    expRemoveReducer,
    expEditReducer,
} from './experience'
import {
    projectAddReducer,
    projectGetAllReducer,
    projectRemoveReducer,
    projectEditReducer,
} from './project'
import {
    skillAddReducer,
    skillGetAllReducer,
    skillRemoveReducer,
    skillEditReducer,
} from './skill'
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
    projectEdit: projectEditReducer,
    expAdd: expAddReducer,
    expGetAll: expGetAllReducer,
    expRemove: expRemoveReducer,
    expEdit: expEditReducer,
    skillAdd: skillAddReducer,
    skillGetAll: skillGetAllReducer,
    skillRemove: skillRemoveReducer,
    skillEdit: skillEditReducer,
    messageGetAll: messageGetAllReducer,
    messageRemove: messageRemoveReducer,
    messageRemoveAll: messageRemoveAllReducer,
    resumeAddNew: resumeAddNewReducer,
    resumeGetLink: resumeGetLinkReducer,
})
