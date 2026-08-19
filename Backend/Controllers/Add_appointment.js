const { AppointmentValidation } = require("../Services/validation_schema")
const Appointment_model = require("../Models/Appointment_model")


const Add_appointment = async (req, res) => {
    try {
        const details = await AppointmentValidation.validateAsync(req.body)
        const { patientName, email, phone, country, preferredDate, treatment, doctorName, messsage } = details

        const selectedDate = new Date(preferredDate);
        const startOfDay = new Date(selectedDate);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(selectedDate);
        endOfDay.setHours(23, 59, 59, 999);

        const checkAppointment = await Appointment_model.findOne({
            $or: [
                { email },
                { phone }
            ],
            preferredDate: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
        })

        if (checkAppointment) {
            return res.status(400).json({
                success: false,
                message: "You already have requested an appointment on this date."
            })
        }

        const saveAppointment = await Appointment_model.create({
            patientName,
            email,
            phone,
            country,
            preferredDate,
            treatment,
            doctorName,
            messsage
        })

        res.status(201).json({
            success: true,
            message: "Appointment request submitted successfully.."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}

module.exports = Add_appointment