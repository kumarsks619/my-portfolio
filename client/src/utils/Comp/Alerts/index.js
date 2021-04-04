import React from 'react'
import { useSelector } from 'react-redux'

import './Alerts.css'

const Alerts = () => {
    const alerts = useSelector((state) => state.alerts)

    return (
        <div className="alerts">
            {alerts !== null &&
                alerts.length > 0 &&
                alerts.map((alert) => (
                    <div className={`alert ${alert.alertType}`} key={alert._id}>
                        {alert.msg}
                    </div>
                ))}
        </div>
    )
}

export default Alerts
