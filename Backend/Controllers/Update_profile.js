const { UpdateValidation } = require("../Services/validation_schema")
const Signup_Model = require("../Models/Signup_Model")


const Update_profile = async (req, res) => {
    const updateDetails = await UpdateValidation.validateAsync(req.body)
    const { id } = req.params

    const checkUser = await Signup_Model.findOne({
        $or: [
            { email: updateDetails.email },
            { phone: updateDetails.phone }
        ],
        _id: { $ne: id }
    })

    if (checkUser) {
        return res.status(400).json({
            success: false,
            message: "User already exist.."
        })
    }

    const newDetails = await Signup_Model.findByIdAndUpdate(
        id,
        updateDetails,
        {
            returnDocument: "after",
            runValidators: true
        }
    )

    if (!newDetails) {
        return res.status(404).json({
            message: "User doesn't exist..",
            success: false
        })
    }

    res.status(200).json({
        message: "User Details Updated Successfully",
        success: true,
        data: {
            id: newDetails._id,
            fullName: newDetails.fullName,
            email: newDetails.email,
            department: newDetails.department,
            role: newDetails.role,
            phone: newDetails.phone
        }
    })


}

module.exports = Update_profile