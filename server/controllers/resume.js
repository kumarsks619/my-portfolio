const asyncHandler = require('express-async-handler')

const Resume = require('../models/Resume')
const { clearCache } = require('../middleware/cache')

const resumeAddNew = asyncHandler(async (req, res) => {
    const { link } = req.body

    // deleting the old resume link
    await Resume.deleteMany()

    const newResume = await Resume.create({
        link,
    })

    if (newResume) {
        clearCache()
        res.status(200).json(newResume)
    } else {
        res.status(400)
        throw new Error('Invalid Resume link!')
    }
})

const resumeGetLink = asyncHandler(async (_, res) => {
    const foundResume = await Resume.findOne()

    if (foundResume && foundResume.link) {
        res.status(200).json(foundResume.link)
    } else {
        res.status(500)
        throw new Error('No Resume found!')
    }
})

module.exports = { resumeAddNew, resumeGetLink }
