const express = require('express')

const {
    experienceAdd,
    experienceRemove,
    experienceGetAll,
    experienceEdit,
    experienceReorder,
    skillAdd,
    skillRemove,
    skillGetAll,
    skillEdit,
    skillReorder,
} = require('../controllers/expertise')
const protect = require('../middleware/protect')

const router = express.Router()

// @desc    To add a new Experience
// @route   POST /api/expertise/experience
// @access  Private
router.post('/experience', protect, experienceAdd)

// @desc    To remove an Experience
// @route   DELETE /api/expertise/experience/:experienceID
// @access  Private
router.delete('/experience/:experienceID', protect, experienceRemove)

// @desc    To get all the Experiences
// @route   GET /api/expertise/experience
// @access  Public
router.get('/experience', experienceGetAll)

// @desc    To edit an existing Experience
// @route   PUT /api/expertise/experience/:experienceID
// @access  Private
router.put('/experience/:experienceID', protect, experienceEdit)

// @desc    To reorder experiences list
// @route   PATCH /api/expertise/experience
// @access  Private
router.patch('/experience', protect, experienceReorder)

// @desc    To add a new Skill
// @route   POST /api/expertise/skill
// @access  Private
router.post('/skill', protect, skillAdd)

// @desc    To remove an Skill
// @route   DELETE /api/expertise/skill/:skillID
// @access  Private
router.delete('/skill/:skillID', protect, skillRemove)

// @desc    To get all the Skills
// @route   GET /api/expertise/skill
// @access  Public
router.get('/skill', skillGetAll)

// @desc    To edit an existing Skill
// @route   PUT /api/expertise/skill/:skillID
// @access  Private
router.put('/skill/:skillID', protect, skillEdit)

// @desc    To reorder skills list
// @route   PATCH /api/skill
// @access  Private
router.patch('/', protect, skillReorder)

module.exports = router
