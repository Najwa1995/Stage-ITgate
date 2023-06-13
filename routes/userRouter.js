const router = require('express').Router()
const userController = require('../controllers/userController')
const { verifyUser, verifyAdmin } = require('../middleware/verifyToken')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin.js')



router.post('/', auth, userController.create)
router.put('/:id', auth, userController.updateUser)
router.delete('/:id', auth, userController.deleteUser)
router.get('/:id', auth, userController.getSingleUser)
router.get('/', auth, authAdmin, userController.getAllUser)


module.exports = router