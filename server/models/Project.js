const { Schema, model } = require('mongoose')

const projectSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        technologies: {
            type: [String],
            required: true,
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
        type: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        link: {
            type: String,
        },
    },
    { timestamps: true }
)

module.exports = new model('Project', projectSchema)
