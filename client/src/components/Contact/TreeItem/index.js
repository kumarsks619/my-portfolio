import React from 'react'

import './TreeItem.css'

const TreeItem = ({ right, iconClass, name }) => {
    return (
        <div className={right ? 'treeItem right' : 'treeItem'}>
            <div className={right ? 'treeItem__leaf right' : 'treeItem__leaf'}>
                <h2>{name}</h2>
                <i className={iconClass}></i>
            </div>
            <div className="treeItem__branch"></div>
        </div>
    )
}

export default TreeItem
