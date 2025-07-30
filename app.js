require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const authMiddleware = require('./middleware/authMiddleware')
const jwt = require('./middleware/jwt')

const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')

app.use(express.json())
app.use(cookieParser())
app.use('/user', userRoutes)
app.use('/tasks', authMiddleware.verifyAccessToken, taskRoutes)
app.get('/token',jwt.refreshToken)

app.use((req, res) => res.status(404).send('Not found'))

app.listen(process.env.PORT, () => console.log('Server on http://localhost:5000'))
