import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Exp from './Exp'
import Skill from './Skill'
import { expGetAll, skillGetAll } from '../../store/actions'
import LottieComp from '../../utils/Comp/LottieComp'
import loaderLottie from '../../assets/lotties/loader.json'
import './Expertise.css'

const Expertise = () => {
    const dispatch = useDispatch()
    const { loading: loadingExp, experiences } = useSelector((state) => state.exp)
    const { loading: loadingSkills, skills } = useSelector((state) => state.skills)

    useEffect(() => {
        dispatch(expGetAll())
        dispatch(skillGetAll())
    }, [dispatch])

    return (
        <div className="expertise">
            <div className="expertise__expSection">
                <h1>Experience</h1>

                <div className="expertise__expWrapper">
                    {loadingExp ? (
                        <LottieComp lotteData={loaderLottie} height={200} width={200} />
                    ) : (
                        experiences &&
                        experiences.length > 0 &&
                        experiences.map((exp) => <Exp key={exp._id} {...exp} />)
                    )}
                </div>
            </div>

            <div className="expertise__skillsSection">
                <h1>Skills</h1>

                <div className="expertise__skillsWrapper">
                    {loadingSkills ? (
                        <LottieComp lotteData={loaderLottie} height={200} width={200} />
                    ) : (
                        skills &&
                        skills.length > 0 &&
                        skills.map((skill) => <Skill key={skill._id} {...skill} />)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Expertise
