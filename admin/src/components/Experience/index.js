import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Heading from '../../utils/Comp/Heading'
import Loading from '../../utils/Comp/Loading'
import ExpForm from './ExpForm'
import { expGetAll, expReorder } from '../../store/actions/experience'
import ExpItem from './ExpItem'

const Experience = () => {
    const dispatch = useDispatch()
    const { loading, experiences } = useSelector((state) => state.expGetAll)

    const [isFormOpen, setIsFormOpen] = useState(false)

    useEffect(() => {
        dispatch(expGetAll())
    }, [dispatch])

    const handleExpReorder = ({ source, destination }) => {
        const srcIndex = source.index
        const destIndex = destination.index

        if (srcIndex !== destIndex) {
            dispatch(expReorder({ srcIndex, destIndex }))
        }
    }

    return (
        <>
            {loading && <Loading />}

            <div className="experience">
                <Heading
                    title={'Experience'}
                    btnText={'Experience'}
                    onClickHandler={() => setIsFormOpen(true)}
                />

                <DragDropContext onDragEnd={(param) => handleExpReorder(param)}>
                    <Droppable droppableId="projects-list-ID">
                        {(provided, _) => (
                            <div
                                className="experienceWrapper"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {experiences &&
                                    experiences.length > 0 &&
                                    experiences.map((exp, index) => (
                                        <Draggable
                                            key={exp._id}
                                            draggableId={`draggable-${exp._id}`}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <ExpItem
                                                    {...exp}
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

            <ExpForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    )
}

export default Experience
