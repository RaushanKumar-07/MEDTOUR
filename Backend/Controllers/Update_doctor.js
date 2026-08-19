const Doctor_model = require("../Models/Doctor_model")
const { DoctorValidation } = require("../Services/validation_schema")


const Update_doctor = async (req, res) => {

    try {
        const updateDetails = await DoctorValidation.validateAsync(req.body)
        const { id } = req.params

        const checkDoctor = await Doctor_model.findOne({
            doctorId: updateDetails.doctorId,
            hospitalName: updateDetails.hospitalName,
            _id: { $ne: id }
        })

        if (checkDoctor) {
            return res.status(400).json({
                success: false,
                message: "Doctor is already added.."
            })
        }

        const newDetails = await Doctor_model.findByIdAndUpdate(
            id,
            updateDetails,
            {
                returnDocument: "after",
                runValidators: true
            }
        )

        res.status(201).json({
            success: true,
            message: "Doctor updated successfully.."
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

module.exports = Update_doctor