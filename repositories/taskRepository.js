const { Task } = require('../models');

// Get all tasks for a user
exports.getAllTasks = async (userId) => {
  try {
    const tasks = await Task.findAll({ where: { userId } });
    return tasks;
  } catch (err) {
    throw err;
  }
};

// Add a new task for a user
exports.addTask = async (userId, title) => {
  try {
    const task = await Task.create({ userId, title });
    return task; // includes id, title, completed
  } catch (err) {
    throw err;
  }
};

// Update an existing task by ID and user ID
exports.updateTask = async (taskId, userId, { title, completed }) => {
  try {
    const [updatedRows] = await Task.update(
      { title, completed },
      { where: { id: taskId, userId } }
    );
    return updatedRows > 0; // true if update happened
  } catch (err) {
    throw err;
  }
};

// Delete a task by ID and user ID
exports.deleteTask = async (taskId, userId) => {
  try {
    const deletedRows = await Task.destroy({
      where: { id: taskId, userId }
    });
    return deletedRows > 0; // true if deletion happened
  } catch (err) {
    throw err;
  }
};