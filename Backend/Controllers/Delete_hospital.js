const Hospital_model = require("../Models/Hospital_model");

const Delete_hospital = async (req, res) => {

    try {
        const { id } = req.params
        const hospital = await Hospital_model.findByIdAndDelete(id)

        if (!hospital) {
            return res.status(400).json({
                success: false,
                message: "Hospital not found!"
            })
        }

        res.status(200).json({
            success: true,
            message: "Hospital deleted successfully.."
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

};

module.exports = Delete_hospital