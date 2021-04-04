import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {
    alertReducer,
    projectGetAllReducer,
    expGetAllReducer,
    skillGetAllReducer,
    messageSendReducer,
} from './reducers'

const reducers = combineReducers({
    alerts: alertReducer,
    projects: projectGetAllReducer,
    exp: expGetAllReducer,
    skills: skillGetAllReducer,
    message: messageSendReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
