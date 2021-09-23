const jwt = require('jsonwebtoken')

const generateToken = (userID) =>
    jwt.sign({ _id: userID }, process.env.JWT_SECRET, { expiresIn: '6h' })

module.exports = generateToken
