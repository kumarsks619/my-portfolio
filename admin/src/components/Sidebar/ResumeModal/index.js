import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, TextField, Button } from '@material-ui/core'

import ModalComp from '../../../utils/Comp/ModalComp'
import Loading from '../../../utils/Comp/Loading'
import { resumeGetLink, resumeAddNew } from '../../../store/actions/resume'
import { alertAdd } from '../../../store/actions/alert'
import './ResumeModal.css'

const ResumeModal = ({ isModalOpen, setIsModalOpen }) => {
    const dispatch = useDispatch()

    const { loading: loadingAdd, success: successAdd } = useSelector(
        (state) => state.resumeAddNew
    )
    const { loading: loadingGet, link } = useSelector((state) => state.resumeGetLink)

    const [resumeLink, setResumeLink] = useState(link)

    useEffect(() => {
        dispatch(resumeGetLink())
    }, [dispatch])

    useEffect(() => {
        setResumeLink(link)
    }, [link])

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (resumeLink.trim() !== '' && resumeLink.trim() !== link) {
            dispatch(resumeAddNew(resumeLink))
        } else {
            dispatch(alertAdd('Enter a valid/different link for the resume!', 'error'))
        }
    }

    const handleModalClose = useCallback(() => {
        setResumeLink(link)
        setIsModalOpen(false)
    }, [link, setIsModalOpen])

    useEffect(() => {
        if (successAdd) {
            handleModalClose()
        }
    }, [successAdd, handleModalClose])

    return (
        <ModalComp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            {(loadingAdd || loadingGet) && <Loading />}

            <form className="resumeForm" onSubmit={handleOnSubmit}>
                <Typography variant="h5" color="textSecondary" className="formHeading">
                    Update Resume
                </Typography>

                <TextField
                    required
                    type="text"
                    variant="outlined"
                    label="Link"
                    className="formInput"
                    name="link"
                    value={resumeLink}
                    onChange={(e) => setResumeLink(e.target.value)}
                />

                <div className="btnsWrapper">
                    <Button
                        variant="outlined"
                        color="primary"
                        className="formBtn"
                        onClick={handleModalClose}
                    >
                        Close
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="formBtn"
                    >
                        Update Resume
                    </Button>
                </div>
            </form>
        </ModalComp>
    )
}

export default ResumeModal
