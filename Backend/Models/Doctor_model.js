const { model, Schema } = require("mongoose");


const Doctor_Model = new Schema({
    name: {
        type: String,
        required: [true, "Doctor name is required"]
    },
    doctorId: {
        type: String,
        required: [true, "Doctor id is required"],
    },
    specialization: {
        type: String,
        required: [true, "Specialization is required"],
    },
    hospitalName: {
        type: String,
        required: [true, "Hospital name is required"]
    },
    experience: {
        type: String,
        required: [true, "Experience is required"]
    },
    consultationFee: {
        type: String,
        required: [true, "Consultation fee is required"]
    },
})

module.exports = model("available_Doctors", Doctor_Model)