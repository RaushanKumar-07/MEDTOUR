const Signup_Model = require("../Models/Signup_Model")
const { SignupValidation } = require("../Services/validation_schema")
const bcrypt = require("bcrypt")
const { generateOtp, getOtpHtml } = require("../utils/utils")
const Otp_model = require("../Models/Otp_model")
const sendEmail = require("../Services/Email_service")

const Signup = async (req, res) => {
    try {
        const details = await SignupValidation.validateAsync(req.body)
        const { fullName, email, phone ,password } = details

        //Checking MongoDB step
        const checkUser = await Signup_Model.findOne({
            $or: [
                { email },
                { phone }
            ]
        })

        if (checkUser) {
            return res.status(409).json({
                message: "Email or phone is already registered..",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        //validation step
        const user = new Signup_Model({
            fullName,
            email,
            phone,
            password: hashedPassword
        })

        //saving to mongoDB step
        await user.save()

        const otp = generateOtp();
        const html = getOtpHtml(otp);

        const otpHash = await bcrypt.hash(otp, 10)

        const otpModel = new Otp_model({
            email,
            user: user._id,
            otpHash
        })

        await otpModel.save();

        sendEmail(email, "OTP Verification", `Your OTP code is ${otp}`, html)

        res.status(201).json({
            message: "User Registered Successfully..",
            success: true,
            data: {
                fullName,
                email,
                phone,
                role: user.role,
                verified: user.verified
            }
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
}


module.exports = Signup