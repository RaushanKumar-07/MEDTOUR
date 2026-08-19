const Doctor_model = require("../Models/Doctor_model");

const Delete_doctor = async (req, res) => {

    try {
        const { id } = req.params
        const doctor = await Doctor_model.findByIdAndDelete(id)

        if (!doctor) {
            return res.status(400).json({
                success: false,
                message: "Doctor not found!"
            })
        }

        res.status(200).json({
            success: true,
            message: "Doctor deleted successfully.."
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

};

module.exports = Delete_doctor