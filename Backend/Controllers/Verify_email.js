const bcrypt = require("bcrypt")
const Otp_model = require("../Models/Otp_model")
const Signup_Model = require("../Models/Signup_Model")


const Verify_email = async (req, res) => {
    try {
        const { email, otp } = req.body

        const otpRecord = await Otp_model.findOne({
            email,
        })

        if (!otpRecord) {
            return res.status(400).json({
                success: false,
                message: "Email is not registered.."
            })
        }

        const otpValid = await bcrypt.compare(
            otp,
            otpRecord.otpHash
        )

        if(!otpValid){
            return res.status(400).json({
                success: false,
                message: "Invalid otp"
            })
        }

        const user = await Signup_Model.findByIdAndUpdate(
            otpRecord.user,
            {
                verified: true
            },
            {
                returnDocument: "after",
                runValidators: true
            }
        )

        await Otp_model.deleteMany({
            user: otpRecord.user
        })

        res.status(200).json({
            success: true,
            message: "Email verified successfully..",
            data: {
                fullName: user.fullName,
                email: user.email,
                department: user.department,
                role: user.role,
                phone: user.phone,
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

module.exports = Verify_email