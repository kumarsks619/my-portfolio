const { body } = require('express-validator')

const validateContactBody = [
    body('name').not().isEmpty().trim().escape(),
    body('email')
        .isEmail()
        .normalizeEmail({
            all_lowercase: true,
            gmail_lowercase: true,
            gmail_convert_googlemaildotcom: true,
            gmail_remove_subaddress: true,
        })
        .escape(),
    body('message').not().isEmpty().trim().escape(),
    body('budget').not().isEmpty().trim().escape(),
    body('service').not().isEmpty().trim().escape(),
]

module.exports = {
    validateContactBody,
}
