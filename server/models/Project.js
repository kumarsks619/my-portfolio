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
        github: {
            type: String,
        },
        sNo: {
            type: Number,
            required: true,
            min: 1,
        },
    },
    { timestamps: true }
)

module.exports = new model('Project', projectSchema)
