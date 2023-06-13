const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({


   
    name: String,
    description: String,
    picture: String,
    prix: String

})

module.exports = mongoose.model('hotel', hotelSchema)
