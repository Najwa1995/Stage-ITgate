const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if (!token) { return res.status(400).json({ msg: "you're not authorize" }) }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) { return res.status(400).json({ msg: "Invalid Authentication" }) }

            req.user = user
            next()
        })


    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


// const verifyToken = (req, res, next) => {
//     const token = req.cookies.accessToken

//     if (!token) {

//         return res.statuts(400).json({ success: false, message: "you're not authorize " })
//     }

//     //if token exist then verify token

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) {
//             return res.statuts(400).json({ success: false, message: "token is not valid " })
//         }
//         req.user = user
//         next()
//     })
// }


module.exports = auth