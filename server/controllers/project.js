const asyncHandler = require('express-async-handler')

const Project = require('../models/Project')
const { clearCache } = require('../middleware/cache')

// to add a new Project
const projectAdd = asyncHandler(async (req, res) => {
    const { name, description, technologies, type, image, link, github, sNo } = req.body

    if (sNo < 1) {
        res.status(400)
        throw new Error("Serial number can't be a negative value!")
    }

    const newProject = await Project.create({
        name,
        description,
        technologies,
        type,
        image,
        link,
        github,
        sNo,
    })

    if (newProject) {
        clearCache()
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
        clearCache()
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
const projectGetAll = asyncHandler(async (_, res) => {
    const foundProjects = await Project.find({}).sort({ sNo: -1 })
    res.status(200).json(foundProjects)
})

// to edit an existing Project
const projectEdit = asyncHandler(async (req, res) => {
    const { projectID } = req.params
    const { name, description, technologies, type, image, link, github } = req.body

    const foundProject = await Project.findById(projectID)

    if (foundProject) {
        foundProject.name = name ? name : foundProject.name
        foundProject.description = description ? description : foundProject.description
        foundProject.technologies = technologies
            ? technologies
            : foundProject.technologies
        foundProject.type = type ? type : foundProject.type
        foundProject.image = image ? image : foundProject.image
        foundProject.link = link ? link : foundProject.link
        foundProject.github = github ? github : foundProject.github

        await foundProject.save()
        clearCache()

        res.status(200).json(foundProject)
    } else {
        res.status(404)
        throw new Error('No project found with this projectID!')
    }
})

// to reorder projects
const projectReorder = asyncHandler(async (req, res) => {
    const { srcSerialNo, destSerialNo } = req.body

    if (srcSerialNo === destSerialNo) {
        res.status(400)
        throw new Error('Source and destination same, so no need to reorder!')
    }

    const foundSrcProject = await Project.findOne({ sNo: srcSerialNo })
    const foundDestProject = await Project.findOne({ sNo: destSerialNo })

    if (foundSrcProject && foundDestProject) {
        foundSrcProject.sNo = destSerialNo
        foundDestProject.sNo = srcSerialNo

        await foundSrcProject.save()
        await foundDestProject.save()

        clearCache()
        res.status(200).json({
            message: 'Projects list re-ordered!',
        })
    } else {
        res.status(400)
        throw new Error('Invalid serial numbers!')
    }
})

module.exports = {
    projectAdd,
    projectRemove,
    projectGetAll,
    projectEdit,
    projectReorder,
}
