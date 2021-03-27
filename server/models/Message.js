const { Schema, model } = require('mongoose')

const messageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        service: {
            type: Number,
            required: true,
        },
        budget: {
            type: Number,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = new model('Message', messageSchema)
