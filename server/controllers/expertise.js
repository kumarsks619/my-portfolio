const asyncHandler = require('express-async-handler')

const Experience = require('../models/Experience')
const Skill = require('../models/Skill')

// to add a new Experience
const experienceAdd = asyncHandler(async (req, res) => {
    const { position, company, start, end, description, tasks } = req.body

    const newExperience = await Experience.create({
        position,
        company,
        duration: {
            start,
            end,
        },
        description,
        tasks,
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
const experienceGetAll = asyncHandler(async (req, res) => {
    const foundExperiences = await Experience.find({}).sort({ createdAt: -1 })

    res.status(200).json(foundExperiences)
})

// to edit an existing Experience
const experienceEdit = asyncHandler(async (req, res) => {
    const { experienceID } = req.params
    const { position, company, start, end, description, tasks } = req.body

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
    const skillID = req.params.skillID

    const foundSkill = await Skill.findById(skillID)

    if (foundSkill) {
        await foundSkill.remove()
        res.status(200).json({
            message: 'Skill Removed!',
            skillID,
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

module.exports = {
    experienceAdd,
    experienceRemove,
    experienceGetAll,
    experienceEdit,
    skillAdd,
    skillRemove,
    skillGetAll,
}
