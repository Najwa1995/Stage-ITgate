const jwt = require('jsonwebtoken')
const users = require('../models/userModel')

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization")

    //req.cookies.accessToken



    if (!token) {

        return res.status(400).json({ success: false, message: "you're not authorize " })
    }

    //if token exist then verify token

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, message: "token is not valid " })
        }
        req.user = user
        next()
    })
}

// verify Usser

const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.role === "1") {
            next()
        } else {
            res.status(400).json({ success: false, message: "you're not authontication" })
        }
    }
    )
}

// verify Admin

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.role === "1") {
            next()
        } else {
            res.status(400).json({ success: false, message: "you're not authorized" })
        }


    })
}


module.exports = { verifyAdmin, verifyUser, verifyToken }


