const {model, Schema } = require("mongoose");


const Appointment_Model = new Schema({
    patientName:{
        type:String,
        required:[true, "Patient name is required"]
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:[true, "Email must be unique"]
    },
    phone:{
        type:String,
        required:[true, "Phone is required"],
        unique:[true, "Phone must be unique"]
    },
    country:{
        type:String,
        required:[true, "country is required"]
    },
    preferredDate:{
        type:String,
    },
    treatment:{
        type:String,
    },
    doctorName:{
        type:String,
    },
    message:{
        type:String,
    },
    time:{
        type:String,
        default: "Not appointed yet"
    },
    status:{
        type:String,
        default: "Pending"
    },
})

module.exports = model("appointments", Appointment_Model)