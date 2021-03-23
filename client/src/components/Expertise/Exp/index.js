import React from 'react'

import './Exp.css'

const Exp = () => {
    return (
        <div className="exp">
            <h2>Intern</h2>
            <h3>
                The YoungMinds
                <a href="#" target="_blank" rel="noreferrer noopener">
                    <i className="fas fa-external-link-alt"></i>
                </a>
            </h3>
            <div className="exp__date">
                <span>Nov 2020</span>
                <span></span>
                <span>March 2021</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore cum
                praesentium, numquam atque soluta!
            </p>
            <h4>Tasks/Roles:</h4>
            <ul>
                <li>
                    Dashboard controlled Chatbot
                    <a href="#" target="_blank" rel="noreferrer noopener">
                        <i className="fas fa-external-link-alt"></i>
                    </a>
                </li>
                <li>
                    The bot is controlled by a Dashboard
                    <a href="#" target="_blank" rel="noreferrer noopener">
                        <i className="fas fa-external-link-alt"></i>
                    </a>
                </li>
                <li>Dashboard also collects the data and plots graph</li>
            </ul>

            <span></span>
        </div>
    )
}

export default Exp
