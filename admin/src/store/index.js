import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

// persisting the already logged in state of a user
const adminFromStorage = localStorage.getItem('admin')
    ? JSON.parse(localStorage.getItem('admin'))
    : null

const initialState = {
    adminLogin: { admin: adminFromStorage },
}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
