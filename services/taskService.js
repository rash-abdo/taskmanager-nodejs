const taskRepo = require('../repositories/taskRepository')

exports.getAllTasks = (userId) => {
    return taskRepo.getAllTasks(userId)
}
exports.addTask = (userId, title) => {
    taskRepo.addTask(userId, title)
}
exports.updateTask = (taskId, userId, data) => {
    taskRepo.updateTask(taskId, userId, data)
}
exports.deleteTask = (taskId, userId) => {
    taskRepo.deleteTask(taskId, userId)
}
