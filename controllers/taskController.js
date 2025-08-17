const taskService = require('../services/taskService')

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks(req.user.id)
        res.json(tasks)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.addTask = async (req, res) => {
    try {
        await taskService.addTask(req.user.id, req.body.title)
        res.status(201).send('task created')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updateTask = async (req, res) => {
    try {
        await taskService.updateTask(req.params.id, req.body)
        res.send('Task updated')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deleteTask = async (req, res) => {
    try {
        await taskService.deleteTask(req.params.id)
        res.send('Task deleted')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.checkDone = async (req,res) => {
    try{
        await taskService.checkDone(req.params.id)
        res.send("Task completed")
    } catch (err) {
        res.status(500).send(err.message)
    }
}
