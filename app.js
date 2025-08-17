require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

//Middleware and utilities
const authMiddleware = require('./middleware/authMiddleware')
const adminMiddleware = require('./middleware/adminMiddleware')
const jwt = require('./utilities/jwt')

//Routes
const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')
const adminRoutes = require('./routes/adminRoutes')

app.use(express.json())
app.use(cookieParser())
app.use
app.use('/user', userRoutes)
app.use('/admin',authMiddleware.verifyAccessToken,adminMiddleware.isAdmin, adminRoutes)
app.use('/tasks', authMiddleware.verifyAccessToken, taskRoutes)
app.get('/token',jwt.refreshToken)

app.use((req, res) => res.status(404).send('Not found'))

app.listen(process.env.PORT, () => console.log('Server on http://localhost:5000'))
