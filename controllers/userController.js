const userService = require('../services/userService')
const jwt = require('../middleware/jwt')
const axios = require('axios');

exports.register = async (req, res) => {
    try {
        await userService.register(req.body)
        res.status(201).send('User registered')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.login = async (req, res) => {
    try {
        const user = await userService.login(req.body)

        const accessToken = jwt.generateAccessToken(user)
        const refreshToken = jwt.generateRefreshToken(user)

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24*60*60*1000
        })
        res.json({message:'Login successful',
            accessToken})
    } catch (err) {
        res.status(401).send(err.message)
    }
}

exports.logout = async (req,res) => {
    res.clearCookie('refreshToken',{
        httpOnly:true,
    })
    res.send("Logged out")
}
