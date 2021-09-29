const asyncHandler = require('express-async-handler')

const Experience = require('../models/Experience')
const Skill = require('../models/Skill')

// to add a new Experience
const experienceAdd = asyncHandler(async (req, res) => {
    const { position, company, start, end, description, tasks, certificate } = req.body

    const newExperience = await Experience.create({
        position,
        company,
        duration: {
            start,
            end,
        },
        description,
        tasks,
        certificate,
    })

    if (newExperience) {
        res.status(200).json(newExperience)
    } else {
        res.status(400)
        throw new Error('Invalid Experience data!')
    }
})

// to delete an existing Experience
const experienceRemove = asyncHandler(async (req, res) => {
    const { experienceID } = req.params

    const foundExperience = await Experience.findById(experienceID)

    if (foundExperience) {
        await foundExperience.remove()
        res.status(200).json({
            message: 'Experience Removed!',
        })
    } else {
        res.status(404)
        throw new Error('No Experience found with this experienceID!')
    }
})

// to get all the Experiences
const experienceGetAll = asyncHandler(async (_, res) => {
    const foundExperiences = await Experience.find({}).sort({ sNo: -1 })

    res.status(200).json(foundExperiences)
})

// to edit an existing Experience
const experienceEdit = asyncHandler(async (req, res) => {
    const { experienceID } = req.params
    const { position, company, start, end, description, tasks, certificate } = req.body

    if (start && end) {
        if (start > end) {
            res.status(400)
            throw new Error("End date of experience can't be ahead of it's start date!")
        }
    }

    const foundExperience = await Experience.findById(experienceID)

    if (foundExperience) {
        foundExperience.position = position ? position : foundExperience.position
        foundExperience.company = company ? company : foundExperience.company
        foundExperience.description = description
            ? description
            : foundExperience.description
        foundExperience.tasks = tasks ? tasks : foundExperience.tasks
        foundExperience.certificate = certificate
            ? certificate
            : foundExperience.certificate

        if (start && end) {
            foundExperience.duration.start = start ? start : foundExperience.start
            foundExperience.duration.end = end ? end : foundExperience.end
        }

        await foundExperience.save()

        res.status(200).json(foundExperience)
    } else {
        res.status(404)
        throw new Error('No experience found with this experienceID!')
    }
})

// to reorder experiences
const experienceReorder = asyncHandler(async (req, res) => {
    const { srcSerialNo, destSerialNo } = req.body

    if (srcSerialNo === destSerialNo) {
        res.status(400)
        throw new Error('Source and destination same, so no need to reorder!')
    }

    const foundSrcExperience = await Experience.findOne({ sNo: srcSerialNo })
    const foundDestExperience = await Experience.findOne({ sNo: destSerialNo })

    if (foundSrcExperience && foundDestExperience) {
        foundSrcExperience.sNo = destSerialNo
        foundDestExperience.sNo = srcSerialNo

        await foundSrcExperience.save()
        await foundDestExperience.save()

        res.status(200).json({
            message: 'Experiences list re-ordered!',
        })
    } else {
        res.status(400)
        throw new Error('Invalid serial numbers!')
    }
})

// to add a new Skill
const skillAdd = asyncHandler(async (req, res) => {
    const { name, image, stars } = req.body

    const newSkill = await Skill.create({
        name,
        image,
        stars,
    })

    if (newSkill) {
        res.status(200).json(newSkill)
    } else {
        res.status(400)
        throw new Error('Invalid Skill data!')
    }
})

// to delete an existing Skill
const skillRemove = asyncHandler(async (req, res) => {
    const { skillID } = req.params

    const foundSkill = await Skill.findById(skillID)

    if (foundSkill) {
        await foundSkill.remove()
        res.status(200).json({
            message: 'Skill Removed!',
            data: { skillID },
        })
    } else {
        res.status(404)
        throw new Error('No Skill found with this skillID!')
    }
})

// to get all the Skills
const skillGetAll = asyncHandler(async (req, res) => {
    const foundSkills = await Skill.find({}).sort({ stars: -1 })

    res.status(200).json(foundSkills)
})

// to edit an existing Skill
const skillEdit = asyncHandler(async (req, res) => {
    const { skillID } = req.params
    const { name, image, stars } = req.body

    const foundSkill = await Skill.findById(skillID)

    if (foundSkill) {
        foundSkill.name = name ? name : foundSkill.name
        foundSkill.image = image ? image : foundSkill.image
        foundSkill.stars = stars ? stars : foundSkill.stars

        await foundSkill.save()

        res.status(200).json(foundSkill)
    } else {
        res.status(404)
        throw new Error('No skill found with this skillID!')
    }
})

module.exports = {
    experienceAdd,
    experienceRemove,
    experienceGetAll,
    experienceEdit,
    experienceReorder,
    skillAdd,
    skillRemove,
    skillGetAll,
    skillEdit,
}
