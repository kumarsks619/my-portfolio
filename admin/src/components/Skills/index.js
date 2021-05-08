import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Heading from '../../utils/Comp/Heading'
import SkillForm from './SkillForm'
import SkillItem from './SkillItem'
import Loading from '../../utils/Comp/Loading'
import { skillGetAll } from '../../store/actions/skill'
import './Skills.css'

const Skills = () => {
    const dispatch = useDispatch()
    const { loading, skills } = useSelector((state) => state.skillGetAll)

    const [isFormOpen, setIsFormOpen] = useState(false)

    useEffect(() => {
        dispatch(skillGetAll())
    }, [dispatch])

    return (
        <>
            {loading && <Loading />}

            <div className="skills">
                <Heading
                    title={'Skills'}
                    btnText={'Skill'}
                    onClickHandler={() => setIsFormOpen(true)}
                />

                <div className="skillsWrapper">
                    {skills &&
                        skills.length > 0 &&
                        skills.map((skill) => <SkillItem key={skill._id} {...skill} />)}
                </div>
            </div>

            <SkillForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    )
}

export default Skills
