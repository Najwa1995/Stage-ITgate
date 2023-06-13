const Tour = require('../models/tourModel')
const Review = require('../models/reviewModel')
module.exports = {
    CreateReview: async (req, res) => {
        const tourId = req.params.tourId
        const newReview = new Review({ ...req.body })
        try {
            const savedReview = await newReview.save()

            // update the review array of the tour
            await Tour.findByIdAndUpdate(tourId, {
                $push: { reviews: savedReview._id }
            })
            res.status(200).json({ success: true, message: "review submited", data: savedReview })
        } catch (err) {
            res.status(500).json({ success: false, message: "Failed to submited" })
        }
    }
}

