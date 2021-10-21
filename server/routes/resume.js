const express = require('express')

const { resumeAddNew, resumeGetLink } = require('../controllers/resume')
const protect = require('../middleware/protect')
const cache = require('../middleware/cache')

const router = express.Router()

// @desc    To add a new Resume link
// @route   POST /api/resume
// @access  Private
router.post('/', protect, resumeAddNew)

// @desc    To get the Resume link
// @route   GET /api/resume
// @access  Public
router.get('/', cache, resumeGetLink)

module.exports = router
