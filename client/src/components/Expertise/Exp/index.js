import React from 'react'
import Moment from 'react-moment'

import './Exp.css'

const Exp = ({
    position,
    company: { name, link },
    duration: { start, end },
    description,
    tasks,
    certificate,
}) => {
    return (
        <div className="exp" data-aos="slide-up">
            <h2>{position}</h2>
            <div className="at">@</div>
            <h3>
                {name}
                <a href={link} target="_blank" rel="noreferrer noopener">
                    <i className="fas fa-external-link-alt"></i>
                </a>
            </h3>
            <div className="exp__date">
                <span>{<Moment format="MMM YYYY">{start}</Moment>}</span>
                <span></span>
                <span>{end ? <Moment format="MMM YYYY">{end}</Moment> : 'Current'}</span>
            </div>
            <p>{description}</p>
            <h4>Tasks/Roles:</h4>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        {task.text}
                        {task.link && (
                            <a href={task.link} target="_blank" rel="noreferrer noopener">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        )}
                    </li>
                ))}
            </ul>
            {certificate && (
                <a
                    href={certificate}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="exp__viewCertificate"
                >
                    View Certificate <i className="fas fa-external-link-alt"></i>
                </a>
            )}

            <span className="line"></span>
        </div>
    )
}

export default Exp
