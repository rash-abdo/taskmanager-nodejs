const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')

//User role management
router.post("/promote/:userId", adminController.promote);
router.post("/demote/:userId", adminController.demote);

//User management
router.post("/block/:userId", adminController.blockUser);
router.get("/block", adminController.getBlocked);
router.get("/users", adminController.getUsers);

//Tasks
router.get("/tasks/:userId", adminController.getTasks);
router.get("/tasks", adminController.getAllTasks);
router.delete("/task/:taskId", adminController.deleteTask);

//Statistics
router.get("/stats", adminController.getStats);

module.exports = router;