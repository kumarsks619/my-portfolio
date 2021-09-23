const asyncHandler = require('express-async-handler')

const Project = require('../models/Project')

// to add a new Project
const projectAdd = asyncHandler(async (req, res) => {
    const { name, description, technologies, start, end, type, image, link } = req.body

    if (start > end) {
        res.status(400)
        throw new Error("End date of project can't be ahead of it's start date!")
    }

    const newProject = await Project.create({
        name,
        description,
        technologies,
        duration: {
            start,
            end,
        },
        type,
        image,
        link,
    })

    if (newProject) {
        res.status(200).json(newProject)
    } else {
        res.status(400)
        throw new Error('Invalid Project data!')
    }
})

// to delete an existing Project
const projectRemove = asyncHandler(async (req, res) => {
    const { projectID } = req.params

    const foundProject = await Project.findById(projectID)

    if (foundProject) {
        await foundProject.remove()
        res.status(200).json({
            message: 'Project Removed!',
        })
    } else {
        res.status(404)
        throw new Error('No project found with this projectID!')
    }
})

// to get all the Projects
const projectGetAll = asyncHandler(async (req, res) => {
    const foundProjects = await Project.find({}).sort({ createdAt: -1 })
    res.status(200).json(foundProjects)
})

// to edit an existing Project
const projectEdit = asyncHandler(async (req, res) => {
    const { projectID } = req.params
    const { name, description, technologies, start, end, type, image, link } = req.body

    if (start && end) {
        if (start > end) {
            res.status(400)
            throw new Error("End date of project can't be ahead of it's start date!")
        }
    }

    const foundProject = await Project.findById(projectID)

    if (foundProject) {
        foundProject.name = name ? name : foundProject.name
        foundProject.description = description ? description : foundProject.description
        foundProject.technologies = technologies ? technologies : foundProject.technologies
        foundProject.type = type ? type : foundProject.type
        foundProject.image = image ? image : foundProject.image
        foundProject.link = link ? link : foundProject.link

        if (start && end) {
            foundProject.duration.start = start ? start : foundProject.start
            foundProject.duration.end = end ? end : foundProject.end
        }

        await foundProject.save()

        res.status(200).json(foundProject)
    } else {
        res.status(404)
        throw new Error('No project found with this projectID!')
    }
})

module.exports = {
    projectAdd,
    projectRemove,
    projectGetAll,
    projectEdit,
}
