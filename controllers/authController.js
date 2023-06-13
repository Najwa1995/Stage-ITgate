const users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

    // User register
    register: async (req, res) => {
        try {

            const { firstname, lastname, email, password } = req.body;
            const user = await users.findOne({ email })


            if (user) return res.status(400).json({ msg: "the email already exist" });
            if (password.length < 6)
                return res
                    .status(400)
                    .json({ msg: "Password is at least 6 caracters " });
            //password encryption
            const passwordHash = await bcrypt.hash(password, 10);

            const newuser = new users({ firstname, lastname, email, password: passwordHash });
            await newuser.save();
            res.status(200).json("User registred successfully")



        } catch (err) {

            return res.status(500).json({ msg: err.message })
        }

    },

    // Login 

    Login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await users.findOne({ email: email })

            if (!user)
                return res.status(400).json({ msg: "Email invalid" })


            await bcrypt.compare(password, user.password).then(
                (isMatch) => {

                    if (isMatch == false) {
                        return res.status(400).json({ msg: "Wrong password..." })
                    }




                    const { password, role, ...rest } = user._doc;

                    //create JWT token

                    const token = jwt.sign({ id: user._id, role: user.role },
                        process.env.ACCESS_TOKEN_SECRET,

                        { expiresIn: "15d" })



                    //set token in the browser 
                    res.cookie('accessToken', token, {
                        httpOnly: true,
                        expires: token.expiresIn
                    }).status(200).json({
                        token,
                        // data: { ...rest },
                        // role
                    })
                }
            )
        } catch (err) {
            // res.status(500).json({ success: false, message: "Failed to login..." })
            return res.status(500).json({ msg: err.message })
        }
    },

    // Logout

    // logout: async (req, res) => {
    //     try {
    //         res.clearCookie("accessToken");
    //         return res.json({ msg: "logged out" });
    //     } catch (err) {
    //         return res.status(500).json({ msg: err.message });
    //     }
    // },

}
