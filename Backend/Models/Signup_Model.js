const { model, Schema } = require("mongoose");


const Signup_Model = new Schema({
    fullName: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"]
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
        unique: [true, "Phone must be unique"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        required: [true, "Role is required"]
    },
    verified: {
        type: Boolean,
        default: false
    }
})

module.exports = model("user", Signup_Model)