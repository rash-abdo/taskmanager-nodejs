const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.delete('/logout',userController.logout)
router.delete('/delete',authMiddleware.verifyAccessToken,userController.delete)

module.exports = router
