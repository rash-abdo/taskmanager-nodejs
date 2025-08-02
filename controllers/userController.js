const userService = require('../services/userService')
const jwt = require('../utilities/jwt')

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
        await userService.login(req.body)
    } catch (err) {
        res.status(401).send(err.message)
    }
}

exports.logout = async (req,res) => {
    await userService.logout()
    res.send("Logged out")
}
