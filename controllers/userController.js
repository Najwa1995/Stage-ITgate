const Users = require('../models/userModel')


module.exports = {


    create: async (req, res) => {

        const newUser = new Users(req.body)

        try {

            const savedUser = await newUser.save()

            res.status(200).json({
                success: true,
                message: "Successfully created",
                data: savedUser
            })

        } catch (err) {
            res.status(500).json("Failed to create")
        }

    },

    // get Tours

    getAllUser: async (req, res) => {
       
        try {
            const users = await Users.find({})
            res.status(200).json({
                data: users
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    // get Single User
    getSingleUser: async (req, res) => {
        try {
            const users = await Users.findById({ _id: req.params.id })

            res.status(200).json({

                data: users
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // update User
    updateUser: async (req, res) => {
        try {
            const { firstname, lastname } = req.body;
            await Users.findByIdAndUpdate({ _id: req.params.id },
                { firstname, lastname })
            res.json({ msg: "Update a User" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },


    //Delete User
    deleteUser: async (req, res) => {
        try {
            await Users.findByIdAndDelete({ _id: req.params.id })
            res.json({ msg: " Deleted a User" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    // // getTour by search
    // getTourBySearch: async (req, res) => {

    //     const city = new RegExp(req.query.city, "i");
    //     const distance = parseInt(req.query.distance);
    //     const maxGroupSize = parseInt(req.query.maxGroupSize);

    //     try {
    //         const tours = await Tours.find({
    //             city, distance: { $gte: distance },
    //             maxGroupSize: { $gte: maxGroupSize }
    //         })

    //         res.status(200).json({
    //             success: true,
    //             message: "Successful",
    //             data: tours
    //         })
    //     } catch (err) {

    //         return res.status(400).json({ message: "Not found" })
    //     }
    // }


}