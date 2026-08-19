const Hospital_model = require("../Models/Hospital_model")
const { HospitalValidation } = require("../Services/validation_schema")


const Update_hospital = async (req, res) => {

    try {
        const updateDetails = await HospitalValidation.validateAsync(req.body)
        const { id } = req.params

        const checkHospital = await Hospital_model.findOne({
            hospitalId: updateDetails.Id,
            city: updateDetails.city,
            _id: { $ne: id }
        })

        if (checkHospital) {
            return res.status(400).json({
                success: false,
                message: "Hospital is already added.."
            })
        }

        const newDetails = await Hospital_model.findByIdAndUpdate(
            id,
            updateDetails,
            {
                returnDocument: "after",
                runValidators: true
            }
        )

        res.status(201).json({
            success: true,
            message: "Hospital updated successfully.."
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

module.exports = Update_hospital