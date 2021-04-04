import React from 'react'

import './TreeItem.css'

const TreeItem = ({ right, iconClass, name, link }) => {
    return (
        <div className={right ? 'treeItem right' : 'treeItem'}>
            <a
                className={right ? 'treeItem__leaf right' : 'treeItem__leaf'}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>
                    <span className="responsive__hide">{name}</span>
                </h2>
                <i className={iconClass}></i>
            </a>
            <div className="treeItem__branch"></div>
        </div>
    )
}

export default TreeItem
