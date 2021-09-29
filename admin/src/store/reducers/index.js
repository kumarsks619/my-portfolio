import { combineReducers } from 'redux'

import { alertReducer } from '../reducers/alert'
import { adminChangePassword, adminLoginReducer } from './auth'
import {
    expAddReducer,
    expGetAllReducer,
    expRemoveReducer,
    expEditReducer,
    expReorderReducer,
} from './experience'
import {
    projectAddReducer,
    projectGetAllReducer,
    projectRemoveReducer,
    projectEditReducer,
    projectReorderReducer,
} from './project'
import {
    skillAddReducer,
    skillGetAllReducer,
    skillRemoveReducer,
    skillEditReducer,
    skillReorderReducer,
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
    projectReorder: projectReorderReducer,
    expAdd: expAddReducer,
    expGetAll: expGetAllReducer,
    expRemove: expRemoveReducer,
    expEdit: expEditReducer,
    expReorder: expReorderReducer,
    skillAdd: skillAddReducer,
    skillGetAll: skillGetAllReducer,
    skillRemove: skillRemoveReducer,
    skillEdit: skillEditReducer,
    skillReorder: skillReorderReducer,
    messageGetAll: messageGetAllReducer,
    messageRemove: messageRemoveReducer,
    messageRemoveAll: messageRemoveAllReducer,
    resumeAddNew: resumeAddNewReducer,
    resumeGetLink: resumeGetLinkReducer,
})
