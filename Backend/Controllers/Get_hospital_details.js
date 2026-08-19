const Hospital_model = require("../Models/Hospital_model")

const Get_hospital_details = async (req, res) => {

    try {

        const hospitals = await Hospital_model.find();
        res.status(200).json({
            success: true,
            data: hospitals
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

module.exports = Get_hospital_details