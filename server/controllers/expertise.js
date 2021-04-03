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
    const experienceID = req.params.experienceID

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
    skillAdd,
    skillRemove,
    skillGetAll,
}
