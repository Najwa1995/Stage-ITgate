const users = require('../models/userModel')

const authAdmin = async (req, res, next) => {
    try {
        // Get user information by id
        const user = await users.findOne({
            _id: req.user.id
        })
        if (user.role == 0)
            return res.status(400).json({ msg: "you are not Admin user." })

        next()

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}



// const authAdmin = (req, res, next) => {

//     if (req.user.role == "0") {
//         return res.status(400).json('you are not Admin user...')
//     }
//     next()


//     // res.status(400).json({ success: false, message: "you're not authorized" })




// }

module.exports = authAdmin