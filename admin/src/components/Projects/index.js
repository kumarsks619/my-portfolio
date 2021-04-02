import React, { useState } from 'react'

import Heading from '../../utils/Comp/Heading'
import ProjectForm from './ProjectForm'

const Project = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)

    return (
        <>
            <div className="projects">
                <Heading
                    title={'Projects'}
                    btnText={'Project'}
                    onClickHandler={() => setIsFormOpen(true)}
                />
            </div>
            <ProjectForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    )
}

export default Project
