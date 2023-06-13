const Tours = require('../models/tourModel')
const review = require('../models/reviewModel')
module.exports = {

    // create new tour *
    create: async (req, res) => {

        const newTour = new Tours(req.body)

        try {

            const savedTour = await newTour.save()

            res.status(200).json({
                success: true,
                message: "Successfully created",
                data: savedTour
            })

        } catch (err) {
            res.status(500).json("Failed to create")
        }

    },

    // get Tours

    getAllTour: async (req, res) => {
        // for pagination
        const page = parseInt(req.query.page)
        try {
            const tours = await Tours.find({})
                .populate('reviews')
                .skip(page * 3)
                .limit(3)
            res.status(200).json({
                success: true,
                message: "Successfully created",
                count: tours.length,
                data: tours
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    // get Single Tour
    getSingleTour: async (req, res) => {
        try {
            const tours = await Tours.findById({ _id: req.params.id }).populate('reviews')

            res.status(200).json({
                success: true,
                message: "Success...",
                data: tours
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // get Featured Tour
    getFeaturedTour: async (req, res) => {
        try {
            const tours = await Tours.find({ featured: true }).limit(8)

            res.status(200).json({
                success: true,
                message: "Successful...",
                data: tours
            })
        } catch (err) {
            return res.status(403).json("Not found...");
        }
    },
    getToursCount: async (req, res) => {
        try {
            const toursCount = await Tours.estimatedDocumentCount()

            res.status(200).json({
                success: true,
                data: toursCount
            })
        } catch (err) {
            return res.status(403).json("Not found...");
        }
    },

    // update Tour
    updateTour: async (req, res) => {
        try {
            const { title, city, address, distance, photo, desc, price, maxGroupSize, reviews, featured } = req.body;
            if (!photo) res.status(400).json({ msg: "No image upload!" })
            await Tours.findByIdAndUpdate({ _id: req.params.id },
                { title: title.toLowerCase(), city, address, distance, photo, desc, price, maxGroupSize, reviews, featured })
            res.json({ msg: "Update a Tour" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },


    //Delete Tour
    deleteTour: async (req, res) => {
        try {
            await Tours.findByIdAndDelete({ _id: req.params.id })
            res.json({ msg: " Deleted a Tour" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    // getTour by search
    getTourBySearch: async (req, res) => {

        const city = new RegExp(req.query.city, "i");
        const distance = parseInt(req.query.distance);
        const maxGroupSize = parseInt(req.query.maxGroupSize);

        try {
            const tours = await Tours.find({
                city, distance: { $gte: distance },
                maxGroupSize: { $gte: maxGroupSize }
            }).populate('reviews')

            res.status(200).json({
                success: true,
                message: "Successful",
                data: tours
            })
        } catch (err) {

            return res.status(400).json({ message: "Not found" })
        }
    }


}