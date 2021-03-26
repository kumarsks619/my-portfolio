const express = require('express')

const { projectAdd, projectRemove, projectGetAll } = require('../controllers/project')
const protect = require('../middleware/protect')

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
router.get('/', projectGetAll)

module.exports = router
