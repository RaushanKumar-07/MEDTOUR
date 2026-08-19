const Appointment_model = require("../Models/Appointment_model");

const Delete_appointment = async (req, res) => {

    try {
        const { id } = req.params
        const appointment = await Appointment_model.findByIdAndDelete(id)

        if (!appointment) {
            return res.status(400).json({
                success: false,
                message: "Appointment not found!"
            })
        }

        res.status(200).json({
            success: true,
            message: "Appointment deleted successfully.."
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

};

module.exports = Delete_appointment