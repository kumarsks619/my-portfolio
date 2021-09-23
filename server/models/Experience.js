const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
})

const experienceSchema = new Schema(
    {
        position: {
            type: String,
            required: true,
        },
        company: {
            name: {
                type: String,
                required: true,
            },
            link: {
                type: String,
            },
        },
        duration: {
            start: {
                type: String,
                required: true,
            },
            end: {
                type: String,
            },
        },
        description: {
            type: String,
            required: true,
        },
        tasks: [taskSchema],
        certificate: {
            type: String,
        },
    },
    { timestamps: true }
)

module.exports = new model('Experience', experienceSchema)
