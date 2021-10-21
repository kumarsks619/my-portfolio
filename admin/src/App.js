import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode'

import './App.css'
import Sidebar from './components/Sidebar'
import Alerts from './utils/Comp/Alerts'
import Login from './components/Login'
import setAuthHeader from './utils/setAuthHeader'
import { adminLogout } from './store/actions/auth'

const App = () => {
    const dispatch = useDispatch()
    const { admin } = useSelector((state) => state.adminLogin)

    if (localStorage.getItem('VeNoM__admin')) {
        const token = JSON.parse(localStorage.getItem('VeNoM__admin')).token

        // checking if the already present auth token is expired or not
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < Date.now()) {
            dispatch(adminLogout())
        }

        // if a valid auth token is present then set the auth headers to all axios requests
        setAuthHeader(token)
    }

    return (
        <div className="app">
            <Router>
                <Alerts />
                {admin ? <Route component={Sidebar} /> : <Route component={Login} />}
            </Router>
        </div>
    )
}

export default App
