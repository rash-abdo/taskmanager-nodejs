const taskRepo = require('../repositories/taskRepository')

exports.getAllTasks = (userId) => {
    return taskRepo.getAllTasks(userId)
}
exports.addTask = (userId, title) => {
    taskRepo.addTask(userId, title)
}
exports.updateTask = (taskId, data) => {
    taskRepo.updateTask(taskId, data)
}
exports.deleteTask = (taskId) => {
    taskRepo.deleteTask(taskId)
}
exports.checkDone = (taskId) => {
    taskRepo.checkDone(taskId)
}