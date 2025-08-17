const adminRepo = require('../repositories/adminRepository')
const taskRepo = require('../repositories/taskRepository')


exports.promote = async (userId) => {
    await adminRepo.promote(userId)
}
exports.demote = async (userId) => {
    await adminRepo.demote(userId)
}
exports.getUsers = async () => {
    return await adminRepo.getUsers()
}
exports.blockUser = async (userId) => {
    await adminRepo.blockUser(userId)
}
exports.getBlocked = async () => {
    return await adminRepo.getBlocked()
}
exports.getAllTasks = async () => {
    return await adminRepo.getAllTasks()
}
exports.getStats = async () => {
    return await adminRepo.getStats()
}
exports.getTasks = async (userId) => {
    return await taskRepo.getTasks(userId)
}
exports.deleteTask = async (taskId) => {
    await taskRepo.deleteTask(taskId)
}