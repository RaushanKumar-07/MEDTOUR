const Signup_Model = require("../Models/Signup_Model")
const { ForgetValidation } = require("../Services/validation_schema")

const Forget = async (req, res) => {
    const email = await ForgetValidation.validateAsync(req.body)
    
    //checking mongoDB step
    const checkUser = await Signup_Model.findOne({
        email
    })
    
    if (!checkUser) {
        return res.status(400).json({
            message: "User not found.",
            success: false
        })
    }
    res.status(200).json({
        message: "Password sent successfully",
        success: true
    })
}


module.exports = Forget