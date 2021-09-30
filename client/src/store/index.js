import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { NODE_ENV } from '../utils/constants'
import {
    alertReducer,
    projectGetAllReducer,
    expGetAllReducer,
    skillGetAllReducer,
    messageSendReducer,
    resumeGetLinkReducer,
} from './reducers'

const reducers = combineReducers({
    alerts: alertReducer,
    projects: projectGetAllReducer,
    exp: expGetAllReducer,
    skills: skillGetAllReducer,
    message: messageSendReducer,
    resume: resumeGetLinkReducer,
})

const initialState = {}

const middleware = [thunk]

let middlewareWrapper

if (NODE_ENV === 'DEV') {
    middlewareWrapper = composeWithDevTools(applyMiddleware(...middleware))
} else {
    middlewareWrapper = applyMiddleware(...middleware)
}

const store = createStore(reducers, initialState, middlewareWrapper)

export default store
