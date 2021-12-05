const express = require('express')

const {
    projectAdd,
    projectRemove,
    projectGetAll,
    projectEdit,
    projectReorder,
} = require('../controllers/project')
const protect = require('../middleware/protect')
const { cacheMiddleware } = require('../middleware/cache')

const router = express.Router()

// @desc    To add a new Project
// @route   POST /api/project
// @access  Private
router.post('/', protect, projectAdd)

// @desc    To delete a Project
// @route   DELETE /api/project/:projectID
// @access  Private
router.delete('/:projectID', protect, projectRemove)

// @desc    To get all the projects
// @route   GET /api/project
// @access  Public
router.get('/', cacheMiddleware, projectGetAll)

// @desc    To edit an existing project
// @route   PUT /api/project
// @access  Private
router.put('/:projectID', protect, projectEdit)

// @desc    To reorder projects list
// @route   PATCH /api/project
// @access  Private
router.patch('/', protect, projectReorder)

module.exports = router
