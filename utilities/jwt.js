const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_SECRET, {expiresIn:'15m'})
}

exports.generateRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_SECRET, {expiresIn:'1d'})
}

exports.refreshToken = (req, res) => {
    const refreshToken = req.cookies.refreshToken
    if (!refreshToken) return res.status(401).send("No refresh token provided,Login agian")

    try {
        const user = jwt.verify(refreshToken, process.env.REFRESH_SECRET)

        const payload = {
            id: user.id,
            username: user.username,
            admin: user.admin,
        }

        const accessToken = this.generateAccessToken(payload)

        res.status(201).json({
            message: "Access token has been refreshed",
            accessToken,
        })
    } catch (err) {
        return res.status(401).send(err.message)
    }
}