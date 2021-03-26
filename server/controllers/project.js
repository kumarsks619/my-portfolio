const asyncHandler = require('express-async-handler')

const Project = require('../models/Project')

// to add a new Project
const projectAdd = asyncHandler(async (req, res) => {
    const { name, description, technologies, start, end, type, image, link } = req.body

    const newProject = new Project({
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

    await newProject.save()

    res.status(200).json(newProject)
})

// to delete an existing Project
const projectRemove = asyncHandler(async (req, res) => {
    const projectID = req.params.projectID

    const foundProject = await Project.findById(projectID)

    if (foundProject) {
        await foundProject.remove()
        res.status(200).json({
            message: 'Project Removed!',
            projectID,
        })
    } else {
        res.status(404)
        throw new Error('No project found with this projectID!')
    }
})

// to get all the projects
const projectGetAll = asyncHandler(async (req, res) => {
    const foundProjects = await Project.find({})

    res.status(200).json(foundProjects)
})

module.exports = {
    projectAdd,
    projectRemove,
    projectGetAll,
}
