const express = require('express')

const {
    messageSend,
    messageRemove,
    messageGetAll,
    messageRemoveAll,
} = require('../controllers/contact')
const protect = require('../middleware/protect')

const router = express.Router()

// @desc    To send a new Message
// @route   POST /api/contact/message
// @access  Public
router.post('/message', messageSend)

// @desc    To delete ALL the Messages
// @route   DELETE /api/contact/message
// @access  Private
router.delete('/message', protect, messageRemoveAll)

// @desc    To delete a Message
// @route   DELETE /api/contact/message/:messageID
// @access  Private
router.delete('/message/:messageID', protect, messageRemove)

// @desc    To get all the Messages
// @route   GET /api/contact/message
// @access  Private
router.get('/message', protect, messageGetAll)

module.exports = router
