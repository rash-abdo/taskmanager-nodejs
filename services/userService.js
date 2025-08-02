const bcrypt = require('bcrypt')
const userRepo = require('../repositories/userRepository')
const hash = require("../auth/hash")

exports.register = async ({username, password, admin}) => {
    const hashed = await bcrypt.hash(password, 10)
    const fingerprint = await hash.passwordFingerprint(password)
    try{
        await userRepo.storeFingerprint(fingerprint)
    } catch (err) {
        throw new Error("Password is taken"); 
    }
    await userRepo.createUser(username, hashed, admin)
}

exports.login = async ({ username, password },req,res) => {
    const user = await userRepo.findByUsername(username)
    if (!user) throw new Error('unregistered user')

    const match = await bcrypt.compare(password, user.password)
    if (!match) throw new Error('wrong password')
    
    user = {id:user.id, username:user.username, admin:user.admin}

    const accessToken = jwt.generateAccessToken(user)
    const refreshToken = jwt.generateRefreshToken(user)
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 24*60*60*1000
    })
    res.json({message:'Login successful',
        accessToken})
}

exports.logout = async (req,res) => {
    res.clearCookie('refreshToken',{
        httpOnly:true,
    })
}
