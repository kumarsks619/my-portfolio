require('dotenv').config()
const chalk = require('chalk')

const adminsData = require('./data/admins.json')
const expData = require('./data/experiences.json')
const skillsData = require('./data/skills.json')
const projectsData = require('./data/projects.json')
const Admin = require('./models/Admin')
const Experience = require('./models/Experience')
const Skill = require('./models/Skill')
const Project = require('./models/Project')
const connectDB = require('./config/db')

// connecting to database
connectDB()

// to do a complete remove and insert everything except admin collection
const fullReset = async () => {
    try {
        await Admin.deleteMany()
        await Experience.deleteMany()
        await Skill.deleteMany()
        await Project.deleteMany()

        console.log(chalk.bgWhite.black('Database cleared!'))

        await Admin.insertMany(adminsData)
        await Experience.insertMany(expData)
        await Skill.insertMany(skillsData)
        await Project.insertMany(projectsData)

        console.log(chalk.bgYellow.black('Database Full Reset Successful!'))
        process.exit()
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

fullReset()
