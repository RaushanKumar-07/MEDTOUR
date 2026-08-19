const Doctor_model = require("../Models/Doctor_model")

const Get_doctor_details = async (req, res) => {

    try {

        const doctors = await Doctor_model.find();
        res.status(200).json({
            success: true,
            data: doctors
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

module.exports = Get_doctor_details