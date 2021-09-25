import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Heading from '../../utils/Comp/Heading'
import Loading from '../../utils/Comp/Loading'
import ExpForm from './ExpForm'
import { expGetAll } from '../../store/actions/experience'
import ExpItem from './ExpItem'

const Experience = () => {
    const dispatch = useDispatch()
    const { loading, experiences } = useSelector((state) => state.expGetAll)

    const [isFormOpen, setIsFormOpen] = useState(false)

    useEffect(() => {
        dispatch(expGetAll())
    }, [dispatch])

    return (
        <>
            {loading && <Loading />}

            <div className="experience">
                <Heading
                    title={'Experience'}
                    btnText={'Experience'}
                    onClickHandler={() => setIsFormOpen(true)}
                />

                <div className="experienceWrapper">
                    {experiences &&
                        experiences.length > 0 &&
                        experiences.map((exp) => (
                            <ExpItem
                                key={exp._id}
                                {...exp}
                                setIsFormOpen={setIsFormOpen}
                            />
                        ))}
                </div>
            </div>

            <ExpForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    )
}

export default Experience
