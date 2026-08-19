const { HospitalValidation } = require("../Services/validation_schema")
const Hospital_model = require("../Models/Hospital_model")


const Add_hospital = async (req, res) => {
    try {
        const details = await HospitalValidation.validateAsync(req.body)
        const { name, hospitalId, city, treatment, rating, price } = details

        const checkHospital = await Hospital_model.findOne({
            hospitalId,
        })

        if (checkHospital) {
            return res.status(400).json({
                success: false,
                message: "Hospital is already added"
            })
        }

        const saveHospital = await Hospital_model.create({
            name,
            hospitalId,
            city,
            treatment,
            rating,
            price
        })

        res.status(201).json({
            success: true,
            message: "Hospital added successfully.."
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}

module.exports = Add_hospital