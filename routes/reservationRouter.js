const router = require('express').Router()
const CreateReservation = require('../controllers/reservationController')
const { verifyUser } = require('../middleware/verifyToken')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('/', auth, CreateReservation.createReservation)
router.get('/:id', auth, CreateReservation.getReservation)
router.get('/', auth, authAdmin, CreateReservation.getAllReservation)

module.exports = router