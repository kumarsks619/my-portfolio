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
    const projectID = req.params.projectID

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
    const foundProjects = await Project.find({})

    res.status(200).json(foundProjects)
})

module.exports = {
    projectAdd,
    projectRemove,
    projectGetAll,
}
