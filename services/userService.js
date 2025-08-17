const bcrypt = require('bcrypt')
const userRepo = require('../repositories/userRepository')
const jwt = require('../utilities/jwt')
const taskRepo = require('../repositories/taskRepository')

exports.register = async ({username, password, admin}) => {
    const hashed = await bcrypt.hash(password, 10)
    await userRepo.createUser(username, hashed, admin)
}

exports.login = async ({ username, password }) => {
    let user = await userRepo.findByUsername(username)
    if (!user) throw new Error('unregistered user')

    const match = await bcrypt.compare(password, user.password)
    if (!match) throw new Error('wrong password')
    
    user = {id:user.id, username:user.username, admin:user.admin}

    const accessToken = jwt.generateAccessToken(user)
    const refreshToken = jwt.generateRefreshToken(user)
    return {accessToken, refreshToken}
}

exports.delete = async (userId) => {
    userRepo.delete_account(userId)
    taskRepo.deleteAllTasks(userId)
}

