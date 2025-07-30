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

exports.login = async ({ username, password }) => {
    const user = await userRepo.findByUsername(username)
    if (!user) throw new Error('unregistered user')

    const match = await bcrypt.compare(password, user.password)
    if (!match) throw new Error('wrong password')
    
    return {id:user.id, username:user.username, admin:user.admin}
}
