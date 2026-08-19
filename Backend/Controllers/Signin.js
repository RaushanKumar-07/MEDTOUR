const config = require("../config/config")
const Session_model = require("../Models/Session_model")
const Signup_Model = require("../Models/Signup_Model")
const { SigninValidation } = require("../Services/validation_schema")
const bcrypt = require("bcrypt")
const crypto = require("crypto");
const jwt = require("jsonwebtoken")

const Signin = async (req, res) => {
    try {
        const details = await SigninValidation.validateAsync(req.body)
        const { email, password } = details

        // checking mongoDB step
        const user = await Signup_Model.findOne({
            email: email,
        })

        if (!user) {
            return res.status(400).json({
                message: "Invalid Email.",
                success: false
            })
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        )

        if (!passwordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password."
            });
        }

        if (!user.verified) {
            return res.status(401).json({
                success: false,
                message: "Email not verified.."
            })
        }

        const refreshToken = jwt.sign(
            {
                id: user._id
            },
            config.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )

        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

        const session = new Session_model({
            user: user._id,
            refreshTokenHash,
            ip: req.ip,
            userAgent: req.headers["user-agent"]
        })

        await session.save();

        const accessToken = jwt.sign(
            {
                id: user._id,
                sessionId: session._id
            },
            config.JWT_SECRET,
            {
                expiresIn: "15m"
            }
        )

        res.cookie(
            "refreshToken",
            refreshToken,
            {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000 //7 days
            }
        )

        res.status(200).json({
            message: "Login successfully",
            success: true,
            data: {
                id: user._id,
                fullName: user.fullName,
                email,
                department: user.department,
                role: user.role,
                phone: user.phone,
                verified: user.verified
            },
            accessToken
        })
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
}


module.exports = Signin