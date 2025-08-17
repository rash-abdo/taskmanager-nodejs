const User = require('../models/user')
const Task = require('../models/task')


//promote to admin
exports.promote = async (userId) => {
    try{
        const user = await User.findById(userId)
        user.admin = true
        await user.save()       
    } catch (err) {
        throw err
    }
}

//demote from admin
exports.demote = async (userId) => {
    try{
        const user = await User.findById(userId)
        user.admin = false
        await user.save()       
    } catch (err) {
        throw err
    }
}

//get all users
exports.getUsers = async () => {
    try {
        return await User.find()
    } catch(err) {
        throw err
    }
}

//toggle block function
exports.blockUser = async (targetUserId) => {
    try{
        const targetUser = await User.findById(targetUserId)
        targetUser.blocked = !targetUser.blocked
        await targetUser.save()
    } catch(err) {
        throw err
    }
}

//view blocked users
exports.getBlocked = async () => {
    try{
        return await User.find({blocked:true})
    } catch(err) {
        throw err
    }
}

//view all tasks in the system
exports.getAllTasks = async () => {
    try{
        return await Task.find()
    } catch (err) {
        throw err
    }
}

//get total users and tasks
exports.getStats = async () => {
  try {
    const totalUsers = await User.countDocuments()
    const totalTasks = await Task.countDocuments()
    return {totalUsers,totalTasks}
  } catch (err) {
    throw err
  }
}