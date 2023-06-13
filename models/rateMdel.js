const mongoose = require('mongoose')

const rateSchema = mongoose.Schema({
    name: String,
    stars: String
})


module.exports = mongoose.model('rate', rateSchema)