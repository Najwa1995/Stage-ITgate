const router = require('express').Router()
const tourController = require('../controllers/tourController.js')
const { verifyAdmin } = require('../middleware/verifyToken.js')
const authAdmin = require('../middleware/authAdmin')
const auth = require('../middleware/auth.js')

// create new tour 

router.route('/')
    .post(auth, authAdmin, tourController.create)
    .get(tourController.getAllTour)

router.route('/:id')
    .put(auth, authAdmin, tourController.updateTour)
    .delete(auth, authAdmin, tourController.deleteTour)
    .get(tourController.getSingleTour)

// gestBySearch

router.get('/search/getTourBySearch', tourController.getTourBySearch)
router.get('/search/getFeaturedTours', tourController.getFeaturedTour)
router.get('/search/getToursCount', tourController.getToursCount)
module.exports = router