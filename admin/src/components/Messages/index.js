import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Heading from '../../utils/Comp/Heading'
import MessageItem from './MessageItem'
import Loading from '../../utils/Comp/Loading'
import ConfirmModal from '../../utils/Comp/ConfirmModal'
import { messageGetAll, messageRemoveAll } from '../../store/actions/message'

const Project = () => {
    const dispatch = useDispatch()
    const { loading, messages } = useSelector((state) => state.messageGetAll)
    const { loading: loadingRemove } = useSelector((state) => state.messageRemoveAll)

    const [isOpen, setIsOpen] = useState(false)
    const [isConfirm, setIsConfirm] = useState(false)

    useEffect(() => {
        if (isConfirm) {
            dispatch(messageRemoveAll())
        }
    }, [isConfirm, dispatch])

    useEffect(() => {
        dispatch(messageGetAll())
    }, [dispatch])

    return (
        <>
            {loading && <Loading />}
            {loadingRemove && <Loading />}

            <div className="messages">
                <Heading
                    title={'Messages'}
                    btnText={'Delete All'}
                    onClickHandler={() => setIsOpen(true)}
                    severeBtn
                />

                <div className="messagesWrapper">
                    {messages &&
                        messages.length > 0 &&
                        messages.map((message) => (
                            <MessageItem key={message._id} {...message} />
                        ))}
                </div>
            </div>

            <ConfirmModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setIsConfirm={setIsConfirm}
            />
        </>
    )
}

export default Project
