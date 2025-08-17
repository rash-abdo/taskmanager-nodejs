const adminService = require("../services/adminService")

// Promote a user to admin
exports.promote = async (req, res) => {
  try {
    const { userId } = req.params
    await adminService.promote(userId)
    res.status(200).json({ message: "User promoted to admin" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Demote a user from admin
exports.demote = async (req, res) => {
  try {
    const { userId } = req.params
    await adminService.demote(userId)
    res.status(200).json({ message: "User demoted from admin" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get all tasks of a user
exports.getTasks = async (req, res) => {
  try {
    const { userId } = req.params
    const tasks = await adminService.getTasks(userId)
    res.status(200).json(tasks)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get system total users, tasks
exports.getStats = async (req, res) => {
  try {
    const stats = await adminService.getStats()
    res.status(200).json(stats)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Block a user
exports.blockUser = async (req, res) => {
  try {
    const { userId } = req.params
    await adminService.blockUser(userId)
    res.status(200).json({ message: "User blocked successfully" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get all blocked users
exports.getBlocked = async (req, res) => {
  try {
    const users = await adminService.getBlocked()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await adminService.getUsers()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get all tasks in system
exports.getAllTasks = async (req, res) => {
  try {
    const data = await adminService.getAllTasks()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params
    await adminService.deleteTask(taskId)
    res.status(200).json({ message: "Task deleted successfully" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}