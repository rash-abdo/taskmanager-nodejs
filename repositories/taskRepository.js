const db = require('../data/db')

//Get all tasks for a user
exports.getAllTasks = (userId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tasks WHERE user_id = ?', [userId], (err, tasks) => {
            if (err) return reject(err)
            resolve(tasks)
        })
    })
}
//Add a new task for a user
exports.addTask = (userId, title) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO tasks (user_id, title) VALUES (?, ?)',
            [userId, title],
            (err, result) => {
                if (err) return reject(err)
                resolve({ id: result.insertId, title, completed: false })
            }
        )
    })
}
//Update an existing task by ID and user ID
exports.updateTask = (taskId, userId, { title, completed }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'UPDATE tasks SET title = ?, completed = ? WHERE id = ? AND user_id = ?',
            [title, completed, taskId, userId],
            (err, result) => {
                if (err) return reject(err)
                resolve(result.affectedRows > 0)
            }
        )
    })
}
//Delete a task by ID and user ID
exports.deleteTask = (taskId, userId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'DELETE FROM tasks WHERE id = ? AND user_id = ?',
            [taskId, userId],
            (err, result) => {
                if (err) return reject(err)
                resolve(result.affectedRows > 0)
            }
        )
    })
}