const userService = require('../services/userService')

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
        const { accessToken, refreshToken } = await userService.login(req.body);

        res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });

        res.json({ message: 'Login successful', accessToken });
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

exports.delete = async (req,res) => {
    try{
        await userService.delete(req.user.id)
        res.clearCookie('refreshToken',{
            httpOnly:true,
        })
        res.status(201).send("deleted account")
    } catch (err) {
        res.status(401).send(err.message)
    }
}