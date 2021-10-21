const express = require('express')

const { adminRegister, adminLogin, adminChangePassword } = require('../controllers/auth')
const { adminPasswordResetLimit } = require('../middleware/rateLimiter')

const router = express.Router()

// @desc    To Register a new Admin
// @route   POST /api/auth
// @access  Public
if (process.env.NODE_ENV === 'DEV') {
    router.post('/', adminRegister)
}

// @desc    To Login an existing Admin
// @route   POST /api/auth/login
// @access  Public
router.post('/login', adminLogin)

// @desc    To change an Admin password
// @route   PUT /api/auth
// @access  Public
router.put('/', adminPasswordResetLimit, adminChangePassword)

module.exports = router
