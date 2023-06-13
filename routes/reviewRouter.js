
const router = require('express').Router()
// const auth = require('../middleware/auth')
const auth = require('../middleware/auth')


const reviewControllers = require('../controllers/reviewControllers')

router.post('/:tourId', auth, reviewControllers.CreateReview)

//verifyUser
module.exports = router