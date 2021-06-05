const { Schema, model } = require('mongoose')

const resumeSchema = new Schema(
    {
        link: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = new model('Resume', resumeSchema)
