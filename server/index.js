require('dotenv').config()
const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const morgan = require('morgan')

const connectDB = require('./config/db')
const authRoutes = require('./routes/auth')
const projectRoutes = require('./routes/project')
const expertiseRoutes = require('./routes/expertise')
const contactRoutes = require('./routes/contact')
const resumeRoutes = require('./routes/resume')
const { notFoundHandler, errorHandler } = require('./middleware/error')

// connecting to database
connectDB()

const app = express()

// adding morgan as middleware to log http requests in the console
if ((process.env.NODE_ENV = 'development')) {
    app.use(morgan('dev'))
}

// Middleware
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json({ limit: '30mb', extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send("<h1>Shubham's Portfolio's backend is up and running...</h1>")
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/project', projectRoutes)
app.use('/api/expertise', expertiseRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/resume', resumeRoutes)

// Error Handler middleware
app.use(notFoundHandler)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

// starting the server
app.listen(PORT, () => {
    console.log(chalk.blue(`Server running on port ${PORT}`))
})
