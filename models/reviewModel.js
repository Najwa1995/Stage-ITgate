const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({


    //tours
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "Tour",
    },
    username: {
        type: String,
        required: true,
    },
    //commentaire
    reviewText: {
        type: String,
        required: true,
    },
    //stars
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        default: 0,
    }
},
    { timestamps: true }
)


module.exports = mongoose.model('review', reviewSchema)