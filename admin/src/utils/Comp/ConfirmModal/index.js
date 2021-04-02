import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const ConfirmModal = ({ isOpen, setIsOpen, setIsConfirm }) => {
    return (
        <Dialog open={isOpen}>
            <DialogTitle>Are You Sure?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Once agreed, then it can't be reverted. Do you still wish to proceed?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => {
                        setIsConfirm(false)
                        setIsOpen(false)
                    }}
                    color="primary"
                    variant="outlined"
                >
                    Disagree
                </Button>
                <Button
                    onClick={() => {
                        setIsConfirm(true)
                        setIsOpen(false)
                    }}
                    color="primary"
                    variant="contained"
                    autoFocus
                >
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmModal
