const Appointment_model = require("../Models/Appointment_model")

const Get_appointment_details = async (req, res) => {

    try {

        const appointments = await Appointment_model.find();
        res.status(200).json({
            success: true,
            data: appointments
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

module.exports = Get_appointment_details