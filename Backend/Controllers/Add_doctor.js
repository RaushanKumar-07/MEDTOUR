const { DoctorValidation } = require("../Services/validation_schema")
const Doctor_model = require("../Models/Doctor_model")
const Hospital_model = require("../Models/Hospital_model")


const Add_doctor = async (req, res) => {
    try {
        const details = await DoctorValidation.validateAsync(req.body)
        const { name, specialization, doctorId, hospitalName, experience, consultationFee } = details

        const checkDoctor = await Doctor_model.findOne({
            doctorId,
            hospitalName
        })

        if (checkDoctor) {
            return res.status(400).json({
                success: false,
                message: "Doctor is already added"
            })
        }

        const saveDoctor = await Doctor_model.create({
            name,
            doctorId,
            specialization,
            hospitalName,
            experience,
            consultationFee,
        })

        res.status(201).json({
            success: true,
            message: "Doctor added successfully.."
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}

module.exports = Add_doctor