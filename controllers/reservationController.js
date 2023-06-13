const Reservation = require('../models/reservationModel')
const users = require('../models/userModel')

module.exports = {

    // create new reservation
    createReservation: async (req, res) => {

        const newReservation = new Reservation(req.body)
        try {
            const savedReservation = await newReservation.save()
            res.status(200).json({ success: true, message: " You tour is booked", data: savedReservation })
        } catch {
            res.status(500).json({ success: false, message: " Internal server error" })
        }
    },

    // Get Single reservation
    getReservation: async (req, res) => {

        const id = req.params.id
        try {
            const reservation = await Reservation.findById(id)
            res.status(200).json(
                { success: true, message: " Successfull", data: reservation }
            )
        } catch (err) {
            res.status(500).json({ success: false, message: " Not found" })
        }
    },

    //get all reservation

    getAllReservation: async (req, res) => {
        try {

            const reservations = await Reservation.find({})
            res.status(200).json({ success: true, message: "Successfull", data: reservations })
        } catch (err) {
            res.status(500).json({ success: false, message: " Not found" })
        }
    }

}

