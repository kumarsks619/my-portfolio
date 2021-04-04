const asyncHandler = require('express-async-handler')

const Message = require('../models/Message')
const generateToken = require('../utils/generateToken')

// to send a Message
const messageSend = asyncHandler(async (req, res) => {
    const { name, email, service, budget, message } = req.body

    const newMessage = await Message.create({
        name,
        email,
        service,
        budget,
        message,
    })

    if (newMessage) {
        res.status(200).json({
            message: 'Message Sent!',
            token: generateToken(
                `Message Sent at: ${new Date().toTimeString()} - ${new Date().toDateString()}`
            ),
        })
    } else {
        res.status(400)
        throw new Error('Invalid Message data!')
    }
})

// to delete a Message
const messageRemove = asyncHandler(async (req, res) => {
    const messageID = req.params.messageID

    const foundMessage = await Message.findById(messageID)

    if (foundMessage) {
        await foundMessage.remove()
        res.status(200).json({
            message: 'Message Removed!',
        })
    } else {
        res.status(404)
        throw new Error('No Message found with this messageID!')
    }
})

// to get all the Messages
const messageGetAll = asyncHandler(async (req, res) => {
    const foundMessages = await Message.find({}).sort({ createdAt: -1 })

    res.status(200).json(foundMessages)
})

// to delete all the Messages
const messageRemoveAll = asyncHandler(async (req, res) => {
    await Message.deleteMany({})

    res.status(200).json({
        message: 'All Messages Removed!',
    })
})

module.exports = {
    messageSend,
    messageRemove,
    messageGetAll,
    messageRemoveAll,
}
