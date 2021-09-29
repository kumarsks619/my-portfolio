import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Heading from '../../utils/Comp/Heading'
import SkillForm from './SkillForm'
import SkillItem from './SkillItem'
import Loading from '../../utils/Comp/Loading'
import { skillGetAll, skillReorder } from '../../store/actions/skill'
import './Skills.css'

const Skills = () => {
    const dispatch = useDispatch()
    const { loading, skills } = useSelector((state) => state.skillGetAll)

    const [isFormOpen, setIsFormOpen] = useState(false)

    useEffect(() => {
        dispatch(skillGetAll())
    }, [dispatch])

    const handleSkillReorder = ({ source, destination }) => {
        const srcIndex = source.index
        const destIndex = destination.index

        if (srcIndex !== destIndex) {
            dispatch(skillReorder({ srcIndex, destIndex }))
        }
    }

    return (
        <>
            {loading && <Loading />}

            <div className="skills">
                <Heading
                    title={'Skills'}
                    btnText={'Skill'}
                    onClickHandler={() => setIsFormOpen(true)}
                />

                <DragDropContext onDragEnd={(param) => handleSkillReorder(param)}>
                    <Droppable droppableId="skills-list-ID">
                        {(provided, _) => (
                            <div
                                className="skillsWrapper"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {skills &&
                                    skills.length > 0 &&
                                    skills.map((skill, index) => (
                                        <Draggable
                                            key={skill._id}
                                            draggableId={`draggable-${skill._id}`}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <SkillItem
                                                    {...skill}
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

            <SkillForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    )
}

export default Skills
