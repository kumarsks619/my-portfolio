import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

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

                <DragDropContext onDragEnd={(param) => console.log(param)}>
                    <Droppable droppableId="projects-list-ID">
                        {(provided, _) => (
                            <div
                                className="projectsWrapper"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {projects &&
                                    projects.length > 0 &&
                                    projects.map((project, index) => (
                                        <Draggable
                                            key={project._id}
                                            draggableId={`draggable-${project._id}`}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <ProjectItem
                                                    {...project}
                                                    setIsFormOpen={setIsFormOpen}
                                                    provided={provided}
                                                    snapshot={snapshot}
                                                />
                                            )}
                                        </Draggable>
                                    ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>

            <ProjectForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    )
}

export default Project
