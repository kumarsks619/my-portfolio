const asyncHandler = require('express-async-handler')

const Admin = require('../models/Admin')
const generateToken = require('../utils/generateToken')

// to register a new Admin
const adminRegister = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    // Checking if ANY admin exists or not
    const adminsCount = await Admin.countDocuments()
    if (adminsCount > 0) {
        res.status(400)
        throw new Error('There can be ONLY single Admin!')
    }

    const newAdmin = await Admin.create({
        username,
        password,
    })

    if (newAdmin) {
        res.status(201).send('New Admin Created!')
    } else {
        res.status(500)
        throw new Error('Invalid Admin data')
    }
})

// to login an existing Admin
const adminLogin = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    // finding the admin
    const foundAdmin = await Admin.findOne({ username })

    if (foundAdmin && (await foundAdmin.matchPassword(password))) {
        res.send({
            username: foundAdmin.username,
            token: generateToken(foundAdmin._id),
        })
    } else {
        res.status(401)
        throw new Error('Wrong Credentials!')
    }
})

// to change an admin password
const adminChangePassword = asyncHandler(async (req, res) => {
    const { username, currentPassword, newPassword } = req.body

    // finding the admin
    const foundAdmin = await Admin.findOne({ username })

    if (foundAdmin && (await foundAdmin.matchPassword(currentPassword))) {
        foundAdmin.password = newPassword
        await foundAdmin.save()

        res.status(200).json({
            message: 'Password Updated!',
        })
    } else {
        res.status(404)
        throw new Error('Wrong Credentials!')
    }
})

module.exports = {
    adminRegister,
    adminLogin,
    adminChangePassword,
}
