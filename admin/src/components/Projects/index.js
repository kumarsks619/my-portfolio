import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Heading from '../../utils/Comp/Heading'
import ProjectForm from './ProjectForm'
import { projectGetAll } from '../../store/actions/project'
import ProjectItem from './ProjectItem'
import Loading from '../../utils/Comp/Loading'

const Project = () => {
    const dispatch = useDispatch()
    const { loading, projects } = useSelector((state) => state.projectGetAll)

    const [isFormOpen, setIsFormOpen] = useState(false)

    useEffect(() => {
        dispatch(projectGetAll())
    }, [dispatch])

    return (
        <>
            {loading && <Loading />}

            <div className="projects">
                <Heading
                    title={'Projects'}
                    btnText={'Project'}
                    onClickHandler={() => setIsFormOpen(true)}
                />

                <div className="projectsWrapper">
                    {projects &&
                        projects.length > 0 &&
                        projects.map((project) => (
                            <ProjectItem
                                key={project._id}
                                {...project}
                                setIsFormOpen={setIsFormOpen}
                            />
                        ))}
                </div>
            </div>

            <ProjectForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    )
}

export default Project
