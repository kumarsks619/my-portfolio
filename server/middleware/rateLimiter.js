const rateLimit = require('express-rate-limit')

const limitMessage = { message: 'Too many requests! Try again after sometime.' }

const adminPasswordResetLimit = rateLimit({
    windowMs: 3 * 60 * 1000, // 3 minutes
    max: 3, // max 3 requests in 3 minutes are allowed
    message: limitMessage,
})

const contactMessageLimit = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 10, // max 10 requests in 5 minutes are allowed
    message: limitMessage,
})

module.exports = {
    adminPasswordResetLimit,
    contactMessageLimit,
}
