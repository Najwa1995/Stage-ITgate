const mongoose = require('mongoose')

const reserveSchema = mongoose.Schema({

    user_id: {
        type: String
    },

    userEmail: {
        type: String
    },
    tourName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    nbrPersonne: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    dateD: {
        type: Date,
        required: true
    },
    dateF: {
        type: Date,
        required: true
    },
},
    { timesTamps: true })

module.exports = mongoose.model('Reservation', reserveSchema)