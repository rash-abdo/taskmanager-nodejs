const Task = require('../models/task');

// Get all tasks for a user
exports.getTasks = async (userId) => {
  try {
    const tasks = await Task.find({userId : userId});
    return tasks;
  } catch (err) {
    throw err;
  }
};

// Add a new task for a user
exports.addTask = async (userId, title) => {
  try {
    await Task.create({ userId, title });
  } catch (err) {
    throw err;
  }
};

// Update an existing task
exports.updateTask = async (taskId, title) => {
  try {
    await Task.updateOne({_id : taskId},{ title : title })
  } catch (err) {
    throw err;
  }
};

// Check a task done or undone
exports.checkDone = async (taskId) => {
  try{
    const task = await Task.findById(taskId)
    task.checked = !task.checked
    await task.save()
  } catch (err){
    throw err
  }
}

// Delete a task by ID
exports.deleteTask = async (taskId) => {
  try {
    await Task.deleteOne({_id : taskId})
  } catch (err) {
    throw err;
  }
};

// Delete all tasks
exports.deleteAllTasks = async (userId) => {
  try{
    await Task.deleteMany({userId:userId})
  } catch (err) {
    throw err
  }
}