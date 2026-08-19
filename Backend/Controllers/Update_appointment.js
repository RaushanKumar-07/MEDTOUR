const Appointment_model = require("../Models/Appointment_model")
const { AppointmentValidation } = require("../Services/validation_schema")


const Update_appointment = async (req, res) => {

    try {
        const updateDetails = await AppointmentValidation.validateAsync(req.body)
        const { id } = req.params

        const newDetails = await Appointment_model.findByIdAndUpdate(
            id,
            updateDetails,
            {
                returnDocument: "after",
                runValidators: true
            }
        )

        res.status(201).json({
            success: true,
            message: "Appointment updated successfully.."
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

module.exports = Update_appointment