const { Schema, model } = require('mongoose')

const skillSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        stars: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = new model('Skill', skillSchema)
